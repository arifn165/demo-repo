import React from 'react';
import { useLoaderData } from 'react-router';
import { LuCalendarHeart } from "react-icons/lu";

const Blogs = () => {
    const blogsData = useLoaderData();
    return (
        <div className=' mt-10 mb-20'>
            <h2 className='text-center text-3xl font-bold leading-8 text-[#141414]'>Blogs</h2>
            <p className='text-center text-lg py-6 text-gray-600'>Let's explore some basic concept that will make you a good developer</p>
            <div className=''>
                {
                    blogsData.map((blog, index) => 
                    <div className='bg-gray-100 shadow hover:shadow-lg duration-700 transform hover:-translate-y-1 mb-5 p-5 rounded-xl' key={index}>
                        <h2 className='text-2xl py-5 border-b-2 border-gray-100'>{blog.question}</h2>
                        <p className='py-5 border-y-2 border-dashed border-gray-200'><strong className='text-[#09982F] text-lg'>Answer: <br /></strong>{blog.answer}</p>
                        <small className='flex items-center gap-2 text-gray-600 text-lg py-3'><LuCalendarHeart size={15}/> Added at: {blog.date}</small>
                        
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;