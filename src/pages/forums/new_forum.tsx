import React, { useState } from 'react';
import {Link} from 'react-router-dom';


type ForumPost = {
    title: String;
    author: String;
    date: Date;
};

type ForumProps = {
    posts: ForumPost[];
}

const New_forum: React.FC<ForumProps> = ({ posts }) => {

    return (
        <>
            <div className="max-w-7xl mx-auto mt-8">
                <h1 className='font-bold text-gray-700 text-3xl'>Create a New Forum</h1>
                <div className='w-full flex justify-center mt-3'>
                    <div className='w-full'>
                        <div className='border-black-600 border border'>
                            <div className='bg-orange-500 p-1 text-left text-white font-bold text-center'>
                                <div className='ml-4 font-bold text-2xl'>Create New Forum</div>
                            </div>
                            <div className='w-full'>
                                <form className="text-gray-600mx-auto p-2">
                                    <div className="mb-1 grid grid-cols-12 gap-4 flex items-center mt-10 tail-flex">
                                        <label htmlFor="name" className="block mb-1 col-span-4  font-bold ml-2 text-2xl text-gray-800 flex justify-center tail-w">Forum Title:</label>
                                        <div className="relative inline-block col-span-8 tail-w">
                                            <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                <option>How much it will take?</option>
                                                <option>What;s your company name?</option>
                                                <option>What's your telephone number?</option>
                                            </select>
                                        </div>
                                    </div>
                                  
                                    <div className="mb-1 grid grid-cols-12 gap-4 flex items-center mt-8 tail-flex">
                                        <label htmlFor="name" className="block mb-1 col-span-4 font-bold text-2xl ml-2 flex text-gray-800 justify-center tail-w">Content:</label>
                                        <textarea className="col-span-8 resize-none border border-gray-300 rounded-md p-2 w-full h-40 tail-w"></textarea>
                                    </div>
                                    <div className='text-right mt-4 text-3xl'>
                                        <button type="submit" className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md hover:bg-blue-600 text-2xl focus:outline-none focus:bg-blue-600 p-3 font-bold mr-1">
                                            <Link to="/forums/"><span className='text-xl'>Add</span></Link></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default New_forum;
