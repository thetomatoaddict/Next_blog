import { getUnfeaturedPosts } from "../service/posts"
import Postcard from "./postcard"
import MultiCarousel from "./multiCarousel"


export default async function CarouselPosts() {
 const posts = await getUnfeaturedPosts()
return <section className="p-3">
    <h2 className='text-2xl font-bold my-4'>You may like</h2>
    <MultiCarousel>
    { posts.map((post) => (<Postcard key={post.path} post={post}/>))}
    </MultiCarousel>
</section>
}