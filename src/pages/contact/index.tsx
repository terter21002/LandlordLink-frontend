import React, { useState } from 'react';
import { FaArrowDown, } from 'react-icons/fa';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData); // You can handle form submission logic here
    };

    return (
        <div>
            <h1 className="text-3xl font-bold my-8 text-center">Contact Us</h1>
            <div className="max-w-4xl mx-auto mt-8 grid grid-cols-12 tail-flex gap-4">
                <div className='col-span-6'>
                    <div className=' border border-black-600'>
                        <div className='bg-orange-500 p-1 text-left text-white font-bold'>
                            <div className='ml-4'>Contact Us Do Not</div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="text-gray-600 max-w-lg mx-auto p-2">
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">This inquiry is regarding:</label>
                                    <div className="relative inline-block col-span-6 ">
                                        <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <FaArrowDown />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Name * </label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Title:</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Company:</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Telephone:</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Email:</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Prefered to be contacted By:</label>
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-4 flex items-center mb-2">
                                            <input
                                                type="radio"
                                                name="radioOption"
                                                value="Cell Phone"
                                                checked={false}
                                                className="form-radio text-indigo-600 h-5 w-5"
                                            />
                                            <label className="ml-1 text-gray-700">
                                                Phone
                                            </label>
                                        </div>
                                        <div className=" col-span-4 flex items-center mb-2">
                                            <input
                                                type="radio"
                                                name="radioOption"
                                                value="Cell Phone"
                                                checked={false}
                                                className="form-radio text-indigo-600 h-5 w-5"
                                            />
                                            <label className="ml-1 text-gray-700">
                                                Phone
                                            </label>
                                        </div>
                                        <div className="col-span-4 flex items-center mb-2">
                                            <input
                                                type="radio"
                                                name="radioOption"
                                                value="Cell Phone"
                                                checked={false}
                                                className="form-radio text-indigo-600 h-5 w-5"
                                            />
                                            <label className="ml-1 text-gray-700">
                                                Phone
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Please enter your questions or comments:</label>
                                    <textarea className="col-span-6 resize-none border border-gray-300 rounded-md p-2 w-full h-30"></textarea>
                                </div>
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">AntiSpam:</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className='text-center mt-4'>
                                <button type="submit" className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-span-6 mx-auto ml-4'>
                    <h1 className='text-blue-400 text-3xl font-bold'>Frequently Asked Questions</h1>
                    <div className='text-gray-500 text-2xl mt-6'>
                        What is Rentec Pro?
                    </div>
                    <hr className="border-t border-gray-300 my-4 w-full" />
                    <div className='text-gray-500 text-2xl mt-6'>
                      How much does Rentec Pro Cost?
                    </div>
                    <hr className="border-t border-gray-300 my-4 w-full" />
                    <div className='text-gray-500 text-2xl mt-6'>
                        What is the differenc e between Rentec Pro and Rentec PM?
                    </div>
                    <hr className="border-t border-gray-300 my-4 w-full" />
                    <div className='text-gray-500 text-2xl mt-6'>
                        What is Rentec Pro?
                    </div>
                    <hr className="border-t border-gray-300 my-4 w-full" />
                    <div className='text-gray-500 text-2xl mt-6'>
                        Does Rentec Pro include an app for my tenants?
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactForm;