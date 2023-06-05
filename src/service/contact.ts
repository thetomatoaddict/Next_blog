import { EmailData } from "./email";


//front end 애서 api에 요청하기 위한 함수임
export async function sendContactEmail(email:EmailData) {
 const response = await fetch('/api/contact',{
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
        'Content-Type': 'application/json',
    },
 })
 const data = await response.json()
 if(!response.ok) {
    throw new Error(data.message || '서버 요청에 실패하였습니다.')
 }
 return data;
}