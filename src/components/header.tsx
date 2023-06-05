
import Link from "next/link"

export default function Header() {
 
return (
    <header className='w-full max-w-screen-2xl bg-white flex justify-between items-center p-4 shadow-md top-0 fixed'>
          <Link href='/'>
            <h1 className='text-2xl font-semibold'>{"tomatoaddict's Blog"}</h1>
            </Link>
          <nav className="flex gap-3">
            <Link href='/' className='px-2'>home</Link>
            <Link href='/about' className='px-2'>about</Link>
            <Link href='/posts' className='px-2'>posts</Link>
            <Link href='/contact' className='px-2'>contact</Link>
          </nav>
        </header>
)
}