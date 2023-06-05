'use client';
import Postcard, { Post, postType } from "./postcard"
import { getPosts } from "../service/posts"
import { useState } from "react"

type postsType = {
    posts:Post[]
}


export default function Category({ posts }:postsType) {
    const categories = [...new Set(posts.map(posts => posts.category))]
    const [selectCat, setSelectCat] = useState("All")

    const filtered = posts.filter((posts) => posts.category === selectCat)


    return (
        <div className="flex gap-3 p-3">
            {selectCat === "All" ?
                <section className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        posts.map((post, i) =>

                            <Postcard key={post.path} post={post} />

                        )
                    }
                </section>
                : <section className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        filtered.map((post, i) =>

                            <Postcard key={post.path} post={post} />

                        )
                    }
                </section>}
            <aside className="m-4">
                <h2 className="text-lg font-semibold border-b border-sky-500 mb-2 pb-2">Category</h2>
                <p className="cursor-pointer hover:text-sky-500 text-sm mb-2" onClick={() => { setSelectCat("All") }}>All Posts ({(posts.length)})</p>
                {
                    categories.map((category, i) =>
                        <p key={i} className="cursor-pointer hover:text-sky-500 text-sm mb-2" onClick={() => { setSelectCat(categories[i]) }}>{category} ({posts.filter((posts) => posts.category === categories[i]).length})</p>
                    )
                }

            </aside>
        </div>
    )
}