import * as yup from 'yup'
import { sendEmailData } from '@/service/email'

//메일 유효성 검증하기
const bodySchema = yup.object().shape({
    address: yup.string().email().required(),
    subject: yup.string().required(),
    body: yup.string().required(),
})

export async function POST(req: Request) {
    const reqbody = await req.json()
    if(!bodySchema.isValidSync(reqbody)){
        return new Response(JSON.stringify({ message : '유효한 포맷이 아닙니다.'}),{status: 400})
    }
    return sendEmailData(reqbody)
    .then(
        () =>
          new Response(JSON.stringify({ message: '메일을 성공적으로 보냈음' }), {
            status: 200,
          })
      )
      .catch((error) => {
        console.error(error);
        return new Response(JSON.stringify({ message: '메일 전송에 실패함!' }), {
          status: 500,
        });
      });
  }
  