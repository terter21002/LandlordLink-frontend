import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdOutlineFileUpload } from "react-icons/md";
import FileUploadButton from '../../components/widgets/fileupload.component';

import './SearchInput.css';

const { Search } = Input;
let fileInputRef: HTMLInputElement | null = null;

const ContactForm: React.FC = () => {
    const [show, setShow] = useState(false);
    const[show1,setShow1] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleShow = () => {
        setShow(!show);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData); // You can handle form submission logic here
    };
    const handleFileSelect = (file: File) => {
        // Handle the selected file
        console.log('Selected file:', file);
        setShow1(true);
      };

    return (
        <div>

            <h1 className="text-3xl font-bold my-8 text-center">Landlord Portsal</h1>
            <div className='text-white text-3xl  mx-auto max-w-7xl my-5 py-2 text-center '>
                <Search
                    placeholder="Tenant Search (Name first/Last,Last 4 social,Last 4 license"
                    allowClear
                    size="large"
                    enterButton={
                        <Button type="primary" >
                            <SearchOutlined />
                        </Button>
                    }
                />
            </div>
            <div className='border text-center border-gray font-bold text-gray-700 text-2xl  mx-auto max-w-7xl p-1'>
                No Result Found
            </div>
            <div className='bg-blue-500 text-white border mx-auto max-w-7xl my-5 py-1 text-center flex items-center border-gray grid grid-cols-12 gap-4 tail-flex'>
               
                <button className='hover:mouse-cursor text-2xl font-bold hover:text-orange-400 ml-2 col-span-10 tail-w'>Upload Tenant from Lease Agreement</button>
                <button className='col-span-1 hover:text-orange-800 text-4xl tail-center mx-auto'  ><MdOutlineFileUpload /></button>
                <div className='col-span-1'>
                   <FileUploadButton onFileSelect={handleFileSelect} buttonText="Choose File" accept="image/*" />
                </div>
            </div>
            <div className='text-center text-gray-800 font-bold text-2xl'>
                {!show1 && 'O R'}
                {
                show1 && <div>
                    <div className="max-w-7xl mx-auto mt-8 grid grid-cols-12 tail-flex gap-4 border py-2 pr-4">
                        <div className='col-span-6'>
                            <div >
                                <div>
                                    <form onSubmit={handleSubmit} className="text-blue-700 max-w-lg mx-auto p-2">
                                        
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Tenant's first name</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Tenant's last name:</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Rental Address:</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Tenant's Rental State:</label>
                                            <div className="relative inline-block col-span-6 ">
                                                <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    <option>New Yorks</option>
                                                    <option>Boston</option>
                                                    <option>Seatle</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <FaArrowDown />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Tenant's Rental Country:</label>
                                            <div className="relative inline-block col-span-6 ">
                                                <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    <option>United States</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <FaArrowDown />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Email:</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>

                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Rental Period From:</label>
                                            <input type="date" id="name" name="name" value={new Date().toString()} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Rental Period To:</label>
                                            <input type="date" id="name" name="name" value={new Date().toString()} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-6 mx-auto ml-4  text-blue-700 font-bold'>
                            <div className='grid grid-cols-12 flex items-center gap-4'>
                                <div className='col-span-5'>
                                    Rent Owed($):
                                </div>
                                <div className='col-span-7 '>
                                    <input type="text" id="name" name="name" onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>

                            </div>
                            <div className='mt-2'>
                                <h1>Utilities Owned:</h1>
                            </div>
                            <div className='grid grid-cols-12 gap-4  tail-flex'>
                                <div className='col-span-3 mt-2 tail-half' >
                                    <h1>Gas($):</h1>
                                    <input type="text" id="name" name="name" value={0} onChange={handleChange} className="mt-2 col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className='col-span-3 mt-2 tail-half'>
                                    <h1>Electric($):</h1>
                                    <input type="text" id="name" name="name" value={0} onChange={handleChange} className="mt-2 col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className='col-span-3 mt-2 tail-half'>
                                    <h1>Water($):</h1>
                                    <input type="text" id="name" name="name" value={0} onChange={handleChange} className="mt-2 col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className='col-span-3 mt-2 tail-half'>
                                    <h1>Telephone($):</h1>
                                    <input type="text" id="name" name="name" value={0} onChange={handleChange} className="mt-2 col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>

                            </div>
                            <div className='grid grid-cols-12 gap-4 mt-3'>
                                <div className='col-span-4'>
                                    Landords's Comments (4000 Char. Max)
                                </div>
                                <textarea className="col-span-8 resize-none border border-gray-300 rounded-md p-2 w-full h-50"></textarea>
                            </div>
                            <div className='grid grid-cols-12 gap-4 mt-3'>
                                <div className='col-span-4'>
                                    Landlord's Property Damages(Pics):
                                </div>
                                <div className='col-span-8'>
                                    <input
                                        type="file"
                                        className='text-blue-700'
                                    />
                                    <input
                                        type="file"
                                        className='mt-2 text-blue-700'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <button type="submit" className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                    </div>
                </div>
            }
            </div>
            <div className='bg-orange-500 text-white border mx-auto max-w-7xl my-5 py-1 text-center border-gray grid grid-cols-12 gap-4 tail-flex'>

                <button className='hover:mouse-cursor text-2xl font-bold hover:text-blue-500 ml-2 col-span-11 tail-w'>Manually Add the Tenant To the Database</button>
                <button className='col-span-1 hover:text-blue-500 text-4xl tail-center mx-auto' onClick={handleShow}><IoMdArrowDropdown /></button>
            </div>
            {
                show && <div>
                    <div className="max-w-7xl mx-auto mt-8 grid grid-cols-12 tail-flex gap-4 border py-2 pr-4">
                        <div className='col-span-6'>
                            <div >
                                <div>
                                    <form onSubmit={handleSubmit} className="text-blue-700 max-w-lg mx-auto p-2">
                                        <div className="mb-1 grid grid-cols-12  gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Tenant's drivers </label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Tenant's SSN </label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Tenant's first name</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Tenant's last name:</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Address:</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Tenant's Rental State:</label>
                                            <div className="relative inline-block col-span-6 ">
                                                <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    <option>New Yorks</option>
                                                    <option>Boston</option>
                                                    <option>Seatle</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <FaArrowDown />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Tenant's Rental Country:</label>
                                            <div className="relative inline-block col-span-6 ">
                                                <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    <option>United States</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <FaArrowDown />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Email:</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>

                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Rental Period From:</label>
                                            <input type="date" id="name" name="name" value={new Date().toString()} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-1 grid grid-cols-12 gap-4 flex items-center">
                                            <label htmlFor="name" className="block mb-1 col-span-6 text-left font-bold ml-2">Rental Period To:</label>
                                            <input type="date" id="name" name="name" value={new Date().toString()} onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-6 mx-auto ml-4  text-blue-700 font-bold'>
                            <div className='grid grid-cols-12 flex items-center gap-4'>
                                <div className='col-span-5'>
                                    Rent Owed($):
                                </div>
                                <div className='col-span-7 '>
                                    <input type="text" id="name" name="name" onChange={handleChange} className="col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>

                            </div>
                            <div className='mt-2'>
                                <h1>Utilities Owned:</h1>
                            </div>
                            <div className='grid grid-cols-12 gap-4  tail-flex'>
                                <div className='col-span-3 mt-2 tail-half' >
                                    <h1>Gas($):</h1>
                                    <input type="text" id="name" name="name" value={0} onChange={handleChange} className="mt-2 col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className='col-span-3 mt-2 tail-half'>
                                    <h1>Electric($):</h1>
                                    <input type="text" id="name" name="name" value={0} onChange={handleChange} className="mt-2 col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className='col-span-3 mt-2 tail-half'>
                                    <h1>Water($):</h1>
                                    <input type="text" id="name" name="name" value={0} onChange={handleChange} className="mt-2 col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className='col-span-3 mt-2 tail-half'>
                                    <h1>Telephone($):</h1>
                                    <input type="text" id="name" name="name" value={0} onChange={handleChange} className="mt-2 col-span-6 w-full px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                                </div>

                            </div>
                            <div className='grid grid-cols-12 gap-4 mt-3'>
                                <div className='col-span-4'>
                                    Landords's Comments (4000 Char. Max)
                                </div>
                                <textarea className="col-span-8 resize-none border border-gray-300 rounded-md p-2 w-full h-50"></textarea>
                            </div>
                            <div className='grid grid-cols-12 gap-4 mt-3'>
                                <div className='col-span-4'>
                                    Landlord's Property Damages(Pics):
                                </div>
                                <div className='col-span-8'>
                                    <input
                                        type="file"
                                        className='text-blue-700'
                                    />
                                    <input
                                        type="file"
                                        className='mt-2 text-blue-700'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <button type="submit" className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                    </div>
                </div>
            }

        </div>
    );
}

export default ContactForm;