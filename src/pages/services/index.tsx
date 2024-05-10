import React from 'react';

interface BlogPostProps {
    title: string;
    content: string;
}
const blogPosts = [
    {
        title: 'First Post',
        content: 'This is the content of the firsts post.'
    },
    {
        title: 'First Post',
        content: 'This is the content of the firsts post.'
    },  {
        title: 'First Post',
        content: 'This is the content of the firsts post.'
    },

    // Add more posts as needed
];

const Services: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto mt-8 grid grid-cols-12 gap-4 tail-flex">
            <div className='col-span-7 tail-w'>
                <h1 className="text-3xl font-bold text-black-800 ml-6 font-bold my-8">Services</h1>
                <h3 className='text-gray-700 font-bold my-3 text-lg'>Property Management</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {blogPosts.map((post, index) => (
                        <div key={index}>
                            <div className="bg-white p-6 rounded-md shadow-md mb-8">
                                <h2 className="text-xl font-bold mb-2">{post.title}
                                </h2>
                                <p>{post.content}</p>
                                <p><span className='text-green-900 font-bold text-sm mr-2' >SERVICES</span>
                                {post.content}
                                </p>
                                <h2 className='text-blue-800 mt-8'>Learn more</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <h3 className='text-gray-700 font-bold my-3 text-lg'>Background and Criminal Check</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  
                        <div className='h-24 mx-auto w-full'>
                            <div className="bg-white p-6 rounded-md shadow-md mb-8">
                                <h2 className="text-xl font-bold mb-2">First Advantage
                                </h2>
                            </div>
                        </div>
                        <div className='h-24 mx-auto w-full'>
                            <div className="bg-white p-6 rounded-md shadow-md mb-8">
                                <h2 className="text-xl font-bold mb-2">Innago
                                </h2>
                            </div>
                        </div>
                        <div className='h-24 mx-auto w-full'>
                            <div className="bg-white p-6 rounded-md shadow-md mb-8">
                                <h2 className="text-xl font-bold mb-2">SmartMove
                                </h2>
                            </div>
                        </div>
                </div>
                <h3 className='text-gray-700 font-bold my-3 text-lg flex justify-between'><span>Financial Services</span><span>Real Estate Consulting</span></h3>
                <div className="h-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  
                        <div className='mx-auto w-full'>
                            <div className="bg-white p-6 rounded-md shadow-md mb-8">
                                <h2 className="text-xl font-bold mb-2">Roofstocks</h2>
                            </div>
                        </div>
                        <div className='mx-auto w-full'>
                            <div className="bg-white p-6 rounded-md shadow-md mb-8">
                                <h2 className="text-xl font-bold mb-2">Insuarance Plan
                                </h2>
                            </div>
                        </div>
                        <div className='mx-auto w-full'>
                            <div className="bg-white p-6 rounded-md shadow-md mb-8">
                                <h2 className="text-xl font-bold mb-2">Smita Singh
                                </h2>
                            </div>
                        </div>
                </div>
                
            </div>
            
            <div className='col-span-5 tail-w mt-24'>
                <h3 className='text-gray-700 font-bold my-3 text-lg'>Other Info</h3>
                <div className="border w-full my-3 h-36 flex items-center justify-center text-2xl text-gray-500 font-bold">
                      Tenant Search
                </div>
                <div className="border w-full my-3 h-36 flex items-center justify-center text-2xl text-gray-500 font-bold">
                      Eviction Attorney
                </div>
                <div className="border w-full h-36 flex items-center justify-center text-2xl text-gray-500 font-bold">
                       Eviction Service
                </div>
            </div>
        </div>
    );
}

export default Services;