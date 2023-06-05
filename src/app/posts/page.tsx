import Category from "@/components/category"
import { getPosts } from "../../service/posts"
import { Metadata } from "next"

export const metadata : Metadata = {
    title: 'All Posts',
    description: '프론트엔드 관련 블로그 글'
}   
export default async function PostsPage() {
    const posts = await getPosts()
return (
<>
<Category posts={posts}/>
</>
)}