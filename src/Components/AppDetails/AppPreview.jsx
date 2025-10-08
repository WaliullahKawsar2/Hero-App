import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';


const AppPreview = () => {
    return (
         <div className='flex py-7 gap-4 border-b-1'>
            <div>
                <img src="https://i.ibb.co.com/4RNQQNYX/telegram.png" alt="" />
            </div>
            <div className='flex-1 space-y-2.5'>
                <h1 className='text-2xl font-bold'>SmPlan: ToDo List With</h1>
                <p>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Kawsar</span></p>
                <hr />

                <div className='flex gap-7'>
                    <div>
                        <FiDownload />
                        <p className='text-[12px]'>Downloads</p>
                        <p className='font-bold text-2xl'>8M</p>
                    </div>
                    <div>
                        <FaStar />
                        <p className='text-[12px]'>Average Ratings</p>
                        <p className='font-bold text-2xl'>4.9</p>
                    </div>
                    <div>
                        <AiFillLike />
                        <p className='text-[12px]'>Total Reviews</p>
                        <p className='font-bold text-2xl'>54K</p>
                    </div>
                </div>
                    <button className='bg-[#00D390] text-white py-1 px-3 rounded-sm font-medium'>Install Now (<span>291</span>MB)</button>
            </div>
        </div>
    );
};

export default AppPreview;