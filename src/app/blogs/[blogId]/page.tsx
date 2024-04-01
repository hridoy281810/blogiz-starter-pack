import BlogDetails from '@/components/ui/BlogDetails';
import { IBlogs } from '@/typs';
import React from 'react';
interface IParamsId {
    params:{
        blogId:string
    }
}
export const generateStaticParams = async()=>{
    const res = await fetch('http://localhost:5000/blogs')
    const blogs = await res.json()
    return blogs.slice(0,3).map((blog:IBlogs)=> ({
        blogId:blog.id
    }))
}
const BlogDetailsPage =async ({params}:IParamsId) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`,{
        cache:"no-store"
    })
      const blog = await res.json()
  return (
    <div className='w-[90%] mx-auto'>
    <h1 className='text-4xl text-center my-5'>Blog Details From <span className='text-accent'>Blogiz</span> </h1>
    <p className='text-xl text-center text-gray-400  w-2/4 mx-auto'><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>

   <div className='my-5'>
    <BlogDetails key={blog.id} blog={blog} />
    </div>
    </div>
  );
};

export default BlogDetailsPage;