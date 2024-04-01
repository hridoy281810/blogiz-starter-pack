'use server'

import { IBlogs } from "@/typs"

export const createBlog = async(data:IBlogs)=>{
    const res =await fetch(`http://localhost:5000/blogs`,{
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data),
        cache:'no-store',
    })
    const blogInfo = await res.json()
    return blogInfo
}