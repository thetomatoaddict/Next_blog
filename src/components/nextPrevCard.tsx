
import Image from "next/image";
import Link from "next/link";
import { Post } from "../service/posts";


export default function NextPrevCard(post:Post) {
 
return <Link href={`/posts/${post.path}`}>
<Image src={`/images/${post.path}.png`} className="w-full" alt="" width={200} height={150}/>
<h3>{post.title}</h3>
<p>{post.description}</p>
</Link>
}