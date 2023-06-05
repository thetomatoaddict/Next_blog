'use client'
import { useState, useCallback, FormEvent, ChangeEvent } from "react"
import Banner from "./banner"
import { BannerData } from "./banner"
import { sendContactEmail } from "@/service/contact"

type Form = {
    address: string;
    subject: string;
    body: string;
}

const DEFAULT_DATA = {
    address: '',
    subject: '',
    body: ''
}

export default function SendEmail() {
    const [email, setEmail] = useState<Form>(DEFAULT_DATA)
    const [banner, setBanner] = useState<BannerData | null>(null)

    const getEmail = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEmail({
            ...email,
            [name]: value
        })
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendContactEmail(email)
            .then(() => {
                setBanner({ message: '이메일 보내기 성공!', state: 'success' });
                setEmail(DEFAULT_DATA)
            })
            .catch(() => {
                setBanner({ message: '이메일 전송 실패. 다시 시도하세요.', state: 'error' })

            })
            .finally(() => {
                setTimeout(() => {
                    setBanner(null)
                }, 3000)
            })

    }



    return (
        <div className="flex flex-col items-center justify-center">
            {banner && <Banner banner={banner} />}
            <section className="bg-slate-700 w-4/12 p-5 rounded-xl">

                <form onSubmit={onSubmit} className="text-white font-semibold text-xl">
                    <label className="my-1">Your Email</label>
                    <input type="text" name="address" className="w-full text-black" onChange={getEmail} required />
                    <label className="my-1">Subject</label>
                    <input type="text" name="subject" className="w-full text-black" onChange={getEmail} required />
                    <label className="my-1">Message</label>
                    <textarea rows={12} name="body" className="w-full text-black" onChange={getEmail} required />
                    <p> </p>
                    <button className="my-1 bg-yellow-500 w-full rounded-xl text-2xl">Submit</button>

                </form>

            </section>
        </div>
    )
}