import Hero from "@/components/hero"
import { Metadata } from "next"

export const metadata : Metadata = {
    title: 'About Me',
    description: '나는 누구일까요?'
}

export default function AboutPage() {
 
    return (
<>
<Hero/>
<section className="rounded-lg bg-gray-100 text-center m-4 leading-8 p-7">
        <h1 className="text-2xl font-bold">Who Am I?</h1>
        <p>문제해결을 즐기는 프론트엔드 개발자</p>
        <p>사람과 디자인을 담는 웹앱 개발자</p>
        <h1 className="text-2xl font-bold mt-3">Skills</h1>
        <p>JS, TS, Python,</p>
        <p>React, Next.js, Node</p>
</section>
</>
    )}