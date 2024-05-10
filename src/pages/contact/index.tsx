import React, { useState } from 'react';
import { FaArrowDown, } from 'react-icons/fa';
import { Collapse } from 'antd';

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
    const { Panel } = Collapse;

    return (
        <div>

            <h1 className="text-3xl font-bold my-8 text-center">Contact Us</h1>
            <div className="max-w-7xl mx-auto mt-8 grid grid-cols-12 tail-flex gap-4">
                <div className='col-span-6 tail-w border border-gray'>
                    <div className='border-black-600'>
                        <div className='bg-orange-500 p-1 text-left text-white font-bold'>
                            <div className='ml-4 font-bold text-2xl'>Contact Us Do Not</div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="text-gray-600 max-w-lg mx-auto p-2">
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left  font-bold ml-2">Request Type:  </label>
                                    <select className="h-8 px-2 border roundeds-md rounded-md text-sm border-gray-300 col-span-6 tail-w tail-block">
                                        <option value="1">Fix an Issue</option>
                                        <option value="2">Enhance a feather</option>
                                        <option value="3">Suggestion for Improvement</option>
                                        <option value="3">Comments</option>
                                    </select>
                                </div>
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Name  </label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Email:</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Telephone:</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>

                                <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                    <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2"> comments:</label>
                                    <textarea className="col-span-6 resize-none border border-gray-300 rounded-md p-2 w-full h-30"></textarea>
                                </div>
                                <div className='text-center mt-4'>
                                    <button type="submit" className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-span-6 tail-w mx-auto ml-4 border border-gray p-4'>
                    <h3 className='text-blue-400 text-3xl font-bold tail-font tail-center'>Frequently Asked Questions</h3>
                    <Collapse className='mt-4 text-gray-500 w-full'>
                        <Panel header=" What is Rentec Pro?" key="1">
                            Description of this topic
                        </Panel>
                        <Panel header=" How much does Rentec Pro Cost?" key="2">
                            How much does Rentec Pro Cost?
                        </Panel>
                        <Panel header=" Does Rentec Pro include an app for my tenants?" key="3">
                            Does Rentec Pro include an app for my tenants?
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;