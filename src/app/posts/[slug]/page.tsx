import Image from "next/image";
import MarkdownViewer from "@/components/markdownViewer";
import { getArticle, getPosts, } from "../../../service/posts";
import { AiOutlineCalendar } from 'react-icons/ai';
import { Post } from "../../../service/posts";
import Link from "next/link";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md"


type Props = {
    params: {
        slug: string;
    };
};


export async function generateMetadata({ params: { slug } }: Props) {
    const posts = await getPosts()
    const post = posts.find((post => post.path === slug))
    const { title, description } = post
    return {
        title: title,
        description : description
    }

} //동적 메타데이터

export default async function ArticlePage({ params: { slug } }: Props) {
    const article = await getArticle(slug)
    const posts = await getPosts()
    const post = posts.find((post => post.path == slug))
    const postIndex: number = posts.findIndex(post => post.path == slug)
    const next: Post = posts[postIndex - 1]
    const prev: Post = posts[postIndex + 1]




    return <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
        <Image className="w-full h-1/5 max-h-[500px]" alt={""} src={`/images/${post?.path}.png`} width={760} height={420} />
        <section className="flex flex-col p-4">
            <div className="flex items-center self-end text-sky-600">
                <AiOutlineCalendar />
                <p className="font-semibold ml-2">{post?.date.toString()}</p>
            </div>
            <h1 className="text-5xl font-bold mb-4">{post?.title}</h1>
            <p className="text-xl font-bold">{post?.description}</p>
            <div className="w-44 border-2 border-sky-600 mt-5 mb-8"></div>
            <MarkdownViewer article={article} />
            <div className="flex w-full mt-4">
                {postIndex !== 0 ?
                    <Link href={`/posts/${next.path}`} className="group w-1/2 bg-slate-800 relative flex h-100vh items-center justify-center ">
                        <MdKeyboardDoubleArrowLeft className="text-3xl z-auto text-white group-hover:text-7xl"/>
                        <Image src={`/images/${next.path}.png`} className="w-full opacity-40" alt="" width={500} height={350} />
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white ">
                        
                        <h3 className="text-3xl font-bold">{next.title}</h3>
                        <p className="text-xl">{next.description}</p>
                        </div>
                        
                    </Link> : null}
                {postIndex !== posts.length - 1 ?
                    <Link href={`/posts/${prev.path}`} className="group w-1/2 bg-slate-800 relative flex h-100vh items-center justify-center">
                        <Image src={`/images/${prev.path}.png`} className="w-full opacity-40" alt="" width={500} height={350} />
                        <MdKeyboardDoubleArrowRight className="text-3xl z-auto text-white group-hover:text-7xl"/>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-right">
                        
                        <h3 className="text-3xl font-bold">{prev.title}</h3>
                        <p className="text-xl">{prev.description}</p>
                        </div>
                        
                    </Link> : null}

            </div>
        </section>


    </article>
} // 동적 라우팅
