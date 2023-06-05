import Header from '@/components/header'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import Footer from '@/components/footer'

const sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: {
    default : "토마토중독자의 블로그",
    template: "토마토중독자의 블로그 | %s"
  },
  description: '프론트엔드 개발자의 블로그',
  icons :'favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className='flex flex-col max-w-screen-2xl h-auto mx-auto justify-center'>
        <Header/>
        <main className='grow mt-24'>{children}</main>
        <Footer/>
        </body>
    </html>
  )
}
