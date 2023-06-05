import Link from "next/link"

export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
}

export type postType = {
    post : Post
}

export default function Postcard({post}:postType) {
 
return <Link href={`/posts/${post.path}`}>
<div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl">
    <img className="w-full" src={`/images/${post.path}.png`} />
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-sm">
            {post.description}
        </p>
    </div>
    <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{post.category}</span>
    </div>
</div>
</Link>

}