import LoadingCard from "@/components/ui/LoadingCard";
import { IBlogs } from "@/typs";

const BlogLoadingPage =async () => {
    const res = await fetch(`http://localhost:5000/blogs`)
    const blogs = await res.json()
  return (
    <div >
     <div className='grid grid-cols-3 gap-4 my-5'>
    {
        blogs?.map((blog:IBlogs)=> <LoadingCard key={blog.id} />)
    }
 
    </div>
    </div>
  );
};

export default BlogLoadingPage;

// echo "# blogiz-starter-pack" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/hridoy281810/blogiz-starter-pack.git
// git push -u origin main