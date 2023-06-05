import path from "path";
import { readFile } from "fs/promises";
import { type } from "os";
import { cache } from "react";

export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
}

export const getPosts = cache(async () => {
    const filepath = path.join(process.cwd(), 'data', 'posts.json')
    return readFile(filepath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts)=>posts.sort((a,b)=>(a.date > b.date ? -1 : 1)))
}) // cache 함수로 정의하면 해당 함수가 여러번 호출되어도 최초 한번만 실행하고 리턴값은 캐쉬에 저장해 재사용함

// export async function getPosts(): Promise<Post[]> {
//     const filepath = path.join(process.cwd(), 'data', 'posts.json')
//     return readFile(filepath, 'utf-8')
//     .then<Post[]>(JSON.parse)
//     .then((posts)=>posts.sort((a,b)=>(a.date > b.date ? -1 : 1)))}

export async function getFeaturedPosts(): Promise<Post[]> {
    return getPosts().then((posts)=>posts.filter((posts)=>posts.featured))
}

export async function getUnfeaturedPosts(): Promise<Post[]> {
    return getPosts().then((posts)=>posts.filter((posts)=>posts.featured === false))
}


export async function getPost(title:string): Promise<Post | undefined> {
    const posts = await getPosts()
    return posts.find(post => post.title === title)
}

export async function getArticle(postpath:string): Promise<string> {
    const filepath = path.join(process.cwd(), 'data', 'posts', `${postpath}.md`)
    return readFile(filepath, 'utf-8')}


