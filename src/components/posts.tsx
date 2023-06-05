
import Link from 'next/link'
import { getFeaturedPosts } from '../service/posts'
import Postcard from './postcard'

export default async function Postlist() {
    const posts = await getFeaturedPosts()
    return (
        <>
            <h2 className='text-2xl font-bold my-4'>Featured posts</h2>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3'>
                {
                    posts.map((post, i) =>
                        
                            <Postcard key={post.path} post={post}/>
                        
                    )
                }
            </div>
        </>
    )
}
