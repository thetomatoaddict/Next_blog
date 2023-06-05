import path from "path";
import { writeFile } from "fs/promises";
import { type } from "os";
import { Post } from "./posts";
import { getPosts } from "./posts";

export async function SavePost(data:Post,value:String): Promise<Post[] | undefined> {
    const filepath = path.join(process.cwd(), 'data', 'posts.json')
    const filepath2 = path.join(process.cwd(), 'data','posts',`${data.path}.md`)
    const posts = await getPosts()
    updatedPosts = posts.push(data)
    writeFile(filepath, updatedPosts.toString, "utf-8")
    writeFile(filepath2, value, "utf-8")

    
    return console.log(posts)
}


export default function Submit(title:String, value:String, category:String, enTitle:String, description:String) {
    if (title === "") {
        return alert('제목을 입력해주세요.')
    } else if (value === "") {
        return alert('내용을 입력해주세요.')
    }
    const date = new Date()
    const data : Post = {
        title: title,
        description: description,
        date: date,
        category: category,
        path: path,
        featured: true
    }
 
return SavePost(data,value)
}