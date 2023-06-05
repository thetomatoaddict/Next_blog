import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import SendEmail from "@/components/sendEmail"
import { Metadata } from "next"

export const metadata : Metadata = {
    title: 'Contact Me',
    description: '토마토중독자에게 메일 보내기'
}
export default function ContactPage() {

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center mb-4">
                <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
                <div className="text-5xl flex mb-4">
                    <AiFillGithub className="hover:text-slate-500"/><AiFillLinkedin className="hover:text-slate-500"/>
                </div>
                <h1 className="text-3xl font-bold">Or Send me an email</h1>
            </div>
            <SendEmail/>
            
        </div>
    )
}