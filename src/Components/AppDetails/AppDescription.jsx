import React from 'react';

const AppDescription = ({description}) => {
    return (
        <div className='py-10 px-6'>
            <p className='text-2xl font-medium mb-5'>Description</p>
            <p className='text-[#627382]'>{description}             
            </p>
        </div>
    );
};

export default AppDescription;