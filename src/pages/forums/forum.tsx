import React, { useState } from 'react';
import { FaPencilAlt, FaStar, FaArrowUp, FaBeer, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type ForumProps = {
    title: String;
}

type ReplyProps = {
    name: String;
    answer: String;
    date: String;
}
const initialReplys = [
    {
        name: 'Ted',
        answer: 'Answer',
        date: '2020-09-09'
    },
    {
        name: 'Ted',
        answer: 'Answer',
        date: '2020-09-09'
    }
]

const Forum: React.FC<ForumProps> = ({ title }) => {
    const [replys, setReplys] = useState<ReplyProps[]>(initialReplys);
    return (

        <>
            <div className="max-w-7xl mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4">Forum Detail</h2>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-2 bg-gray-100 mx-auto p-3'>
                        <div className='avatar flex justify-center'>
                            <img alt="avatar" style={{ borderRadius: '100px', width: '50px', height: '50px' }} className='rounded-lg ' src="https://placekitten.com/200/300"></img>
                        </div>
                        <div className='flex justify-center text-gray-400'>
                            User Stats
                        </div>
                        <div className='flex justify-center text-blue-400 font-bold my-0 py-0'>
                            28
                        </div>
                        <div className='flex justify-center text-blue-400 font-bold my-0 py-0'>
                            Posts
                        </div>
                        <div className='flex justify-center mt-5 font-bold my-0 py-0'>
                            35
                        </div>
                        <div className='flex justify-center font-bold my-0 py-0'>
                            Votes
                        </div>
                    </div>
                    <div className='col-span-10'>
                        <h1 className='text-gray-500'>{title} General Landording Rental Properties</h1>
                        <h1 className='font-bold text-gray-600'>Tenant Screening Secrets: What's Your Magic Formula?</h1>
                        <div className='grid grid-cols-12 gap-4 tail-flex'>
                            <span className='col-span-2 tail-w'>Mike Calvey</span>
                            <div className='col-span-3  tail-w grid grid-cols-12 gap-4 flex mr-8 items-center'>
                                <span className='col-span-1 text-sm  mx-0 text-blue-400'><FaPencilAlt /></span>
                                <Link className='col-span-5' to="poster" > <span className='text-blue-400 font-bold text-sm'> POSTER</span></Link>
                                <span className='col-span-1 text-sm  mx-0 text-yellow-400'><FaStar /></span>
                                <Link className='col-span-5' to="poster" > <span className='text-yellow-400 font-bold text-sm'> PREMIUM</span></Link>

                            </div>
                        </div>
                        <div>
                                | Denver. CO
                            </div>
                        <hr className="border-t border-gray-300 my-2 w-1/4" />
                        <div className='text-gray-900 mb-4'>
                            Posted 12 Hours ago
                        </div>
                        <div>
                            In the most optimistic scenarios, some experts suggest that life expectancy could potentially exceed 100 years on average in certain regions with advanced healthcare systems and favorable living conditions. However, this would depend on sustained efforts to address various health challenges, such as chronic diseases, infectious illnesses, and disparities in access to healthcare.

                            It's essential to note that while extending life expectancy is a significant achievement, ensuring quality of life and addressing associated societal challenges, such as healthcare costs and pension systems, will also be crucial considerations in the future.
                        </div>
                        <button className='bg-green-200 p-1 rounded-md text-green-900 mt-3'>Featured</button>
                        <button className='bg-blue-200 p-1 rounded-md text-blue-900 mt-3 ml-3'>Denver, Colorado</button>
                        <hr className="border-t border-gray-300 my-2" />
                        <div className='eval flex items-center justify-between'>
                            <div className='fa-icons flex items-center'>
                                <FaArrowUp className='inline text-gray-600' /> <span className='ml-2'>2 Votes</span>
                                <FaBeer className="inline text-green-600 ml-3" /><span className='text-green-600 ml-2'>Following</span>
                                <FaEnvelope className='inline text-gray-600 ml-3' /> <span className='ml-2'> Share</span>
                                <FaBeer className="inline text-gray-600 ml-3" /><span className='text-gray-600 ml-2'>Replies</span>
                            </div>
                            <button className='bg-white text-blue-600 border p-1 px-5 text-sm'>Quote</button>
                        </div>
                    </div>
                </div>
                {
                    initialReplys.map((reply, idx) =>
                        <div key={idx} className='grid grid-cols-12 gap-4 mt-2'>
                            <div className='col-span-2 bg-gray-100 mx-auto p-3'>
                                <div className='avatar flex justify-center'>
                                    <img alt="avatar" style={{ borderRadius: '100px', width: '50px', height: '50px' }} className='rounded-lg ' src="https://placekitten.com/200/300"></img>
                                </div>
                                <div className='flex justify-center text-gray-400'>
                                    User Stats
                                </div>
                                <div className='flex justify-center text-blue-400 font-bold my-0 py-0'>
                                    28
                                </div>
                                <div className='flex justify-center text-blue-400 font-bold my-0 py-0'>
                                    Posts
                                </div>
                                <div className='flex justify-center mt-5 font-bold my-0 py-0'>
                                    35
                                </div>
                                <div className='flex justify-center font-bold my-0 py-0'>
                                    Votes
                                </div>
                            </div>
                            <div className='col-span-10 tail-p-5'>
                                <h1 className='text-gray-500'>Replyed twenty hours ago</h1>
                                <h1 className='font-bold text-gray-600 flex items-center'>Tenant Screening Secrets
                                    <button className='bg-white-800 rounded-lg p-0 ml-3 text-blue-700 p-1'><FaPencilAlt /></button>
                                    <span className='ml-5'>| Real Estate Agent | Grand Junction CO</span>
                                </h1>
                                <div className='text-gray-900 mb-4'>
                                    Posted 12 Hours ago
                                </div>
                                <div>
                                    In the most optimistic scenarios, some experts suggest that life expectancy could potentially exceed 100 years on average in certain regions with advanced healthcare systems and favorable living conditions. However, this would depend on sustained efforts to address various health challenges, such as chronic diseases, infectious illnesses, and disparities in access to healthcare.
                                </div>
                                <hr className="border-t border-gray-300 my-2 w-1/4" />

                                <div className='eval flex items-center justify-between'>
                                    <div className='fa-icons flex items-center'>
                                        <FaArrowUp className='inline text-gray-600' /> <span className='ml-2'>2 Votes</span>
                                        <span className='ml-6'>....</span>
                                    </div>
                                    <button className='bg-white text-blue-600 border p-1 px-5 text-sm'>Quote</button>
                                </div>
                            </div>
                        </div>)
                }

            </div>


        </>
    );
};

export default Forum;
