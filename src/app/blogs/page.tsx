'use client'
import BlogCard from '@/components/ui/BlogCard';
import { useGetBlogsQuery } from '@/redux/api/baseApi';
import { IBlogs } from '@/typs';
import React from 'react';

const BlogsPage = () => {
      const {data: blogs} = useGetBlogsQuery(undefined)
      console.log(blogs);
      
  return (
    <div className='w-[90%] mx-auto'>
    <h1 className='text-4xl text-center my-5'>All Blogs From <span className='text-accent'>Blogiz</span> </h1>
    <p className='text-xl text-center text-gray-400  w-2/4 mx-auto'><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>

   <div className='grid grid-cols-3 gap-4 my-5'>
    {
        blogs?.map((blog:IBlogs)=> <BlogCard key={blog.id} blog={blog} />)
    }
 
    </div>
    </div>
  );
};

export default BlogsPage;