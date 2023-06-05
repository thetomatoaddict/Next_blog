import { Open_Sans } from 'next/font/google'
import Hero from '@/components/hero'
import Postlist from '@/components/posts'
import CarouselPosts from '@/components/carouselPosts'

const sans = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Hero/>
    {/* @ts-expect-error Async Server Component */}
    <Postlist/>
    {/* @ts-expect-error Async Server Component */}
    <CarouselPosts />
    </div>
    
  )
}
