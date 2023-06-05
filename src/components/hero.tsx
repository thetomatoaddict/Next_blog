
import Link from "next/link"

export default function Hero() {
 
return (

    <section className="text-center">
     <img src="IMG_8733.JPG" className="h-52 w-52 rounded-full mx-auto my-4" />
     <h1 className="font-bold text-3xl">{"Hi, I'm Sujin"}</h1>
     <p>Frontend engineer</p>
     <Link href='/contact'>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-xl mt-3">Contact me</button>
     </Link>
    
    </section>
)
}