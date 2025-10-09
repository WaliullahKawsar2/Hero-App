import React, { useState } from 'react';
import HeroSection from '../Components/HeroSection';
import TrendingApps from '../Components/TrendingApps';
import { RingLoader } from 'react-spinners';

const Home = () => {
    const [loader, setLoader] = useState(true);
    setTimeout(()=>{
        setLoader(false)
    },500)
    if(loader)
    return(
       
        <div className='flex h-screen w-full justify-center items-center'>
            <RingLoader />

        </div>
    )
    else
    return (
        <>
        <HeroSection/>
        <TrendingApps/>
        </>
    );
};

export default Home;