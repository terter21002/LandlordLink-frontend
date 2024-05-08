import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp, FaEnvelope } from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const initialPosts: ForumPost[] = [
    {
        title: 'First ',
        author: 'User1',
        date: new Date(),
    },
    {
        title: 'Second Post',
        author: 'User2',
        date: new Date(),
    },
    {
        title: 'Another Post',
        author: 'User1',
        date: new Date(),
    },
];


type ForumPost = {
    title: String;
    author: String;
    date: Date;
};

type ForumProps = {
    posts: ForumPost[];
}

const Forums: React.FC<ForumProps> = ({ posts }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = 10;

    return (
        <>
            <div className="max-w-7xl mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4">Forum Posts
                    <div className='flex flex-wrap items-center mt-5 tail-flex'>
                        <button className="sm:d-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full text-sm tail-none">
                            Newest
                        </button>
                        <button className="bg-gray-300 hover:bg-gray-500 text-black font-bold py-1 px-2 rounded-full text-sm ml-3 tail-none">
                            Trending
                        </button>
                        <button className="bg-gray-300 hover:bg-gray-500 text-black font-bold py-1 px-2 rounded-full text-sm ml-3 tail-none">
                            Unanswered
                        </button>
                        <select className="hidden h-8 px-2 border rounded-md text-sm ml-6 tail-w tail-block">
                            <option value="1">Newest</option>
                            <option value="2">Trending</option>
                            <option value="3">Unanswered</option>
                        </select>
                        <select className="block h-8 px-2 border rounded-md text-sm ml-6 tail-w">
                            <option value="1">Any Location</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                </h2>
                {initialPosts.map((post, index) => (
                    <div key={index} className="bg-white shadow-md rounded p-6 mb-4">
                        <div className="grid grid-cols-12 gap-4 tail-flex">
                            <span className='tail-w-2 col-span-2 grid grid-cols-2'>
                            <img alt="avatar" style={{ borderRadius: '100px', width: '50px', height: '50px' }} className='rounded-lg ' src="https://placekitten.com/200/300"></img>
                            </span>
                            <span className="tail-w-2 text-xl font-semibold mb-2 col-span-8 hover:text-blue-400"><Link to="/forums/forum">{post.title}</Link></span>
                            <span className='col-span-2 grid grid-cols-12'>
                                <span className='col-span-3  p-1'><FaArrowUp /></span>
                                <span className='col-span-3 '>1</span>
                                <span className='col-span-3  p-1'><FaEnvelope /></span>
                                <span className='col-span-3 '>1</span>
                            </span>
                        </div>
                        <p className="text-gray-600 grid grid-cols-12 gap-4 tail-flex">
                            <span className='col-span-1 tail-w tail-w'></span>
                            <span className="tail-w col-span-11 font-semibold tail-w">Author: {post.author}</span>
                        </p>
                        <p className="text-gray-600 grid grid-cols-12 gap-4 tail-flex">
                            <span className='tail-w col-span-1'></span>
                            <span className="tail-w col-span-6 font-semibold">21 Hours Ago | Real Estate Agent | {post.date.toDateString()}</span>
                            <div className='tail-w col-span-5'><span className='font-bold text-blue-900 ml-10'>Last Reply</span> by Samuel | 5 minutes </div>
                        </p>
                    </div>
                ))}
                <div className='flex justify-center'>
                <Stack spacing={2}>
                    <Pagination count={100} color="primary" />
                </Stack>
                </div>
                <div className='flex justify-center mt-6'>
                <input type="number" className="border border w-20 rounded-md p-2 h-8"></input>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 ml-4 rounded text-sm'>Go</button>
                </div>
            </div>

        </>
    );
};

export default Forums;
