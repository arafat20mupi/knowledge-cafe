import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    const [blogs , setBlogs] = useState([])

    useEffect(()=> {
        fetch('Blogs.json',)
       .then(res => res.json())
       .then(data => setBlogs(data))
    } ,[])

    return (
        <div className="mt-5">
            <h1 className="text-xl font-medium text-center">Blogs: {blogs.length}</h1>
            <div className="flex">
                <div className="w-2/3">
                    {blogs.map(blog => (
                        <div key={blog.id}>
                            <h2 className="text-xl font-medium ">{blog.title}</h2>
                            <img className="w-48" src={blog.cover_pic} alt="" />
                        </div>
                    ))}
                </div>
                <div className="w-1/3">
                    <h2 className="text-2xl">bookmarks added</h2>
                </div>
            </div>
        </div>
    );
};



// 42.4 module 

export default Blogs;