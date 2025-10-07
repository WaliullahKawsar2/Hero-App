import React from 'react';
import playStore from '../assets/playstore.png'
import appStore from '../assets/appStore.png'
import heroImg from '../assets/hero.png'

const HeroSection = () => {
    return (
        <div className='flex-1 flex flex-col justify-center items-center text-center bg-[#d2d2d238] gap-8 pt-20'>
            <h1 className='text-[#001931] text-5xl font-extrabold'>
                We Build <br /><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive </span>App
            </h1>
            <p className='text-[#627382] max-w-[840px] mx-auto px-4'>AtH ERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center items-center gap-4'>
                <a href='https://play.google.com/store/games' target='_blank' className='shadow-sm hover:shadow-lg  px-4 py-2 flex justify-center items-center gap-2 cursor-pointer'><img className='w-8' src={playStore} alt="playstore" /><span>Google Play</span></a>
                <a href='https://www.apple.com/app-store/' target='_blank' className='shadow-sm hover:shadow-lg px-4 py-2 flex justify-center items-center gap-2 cursor-pointer'><img className='w-8' src={appStore} alt="appstore" /><span> App store</span></a>
            </div>
            <div className='w-full flex flex-col text-center'>
                <img className='max-w-[700px] mx-auto' src={heroImg} alt="hero" />
                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-20 space-y-10'>
                    <h3 className='text-5xl font-semibold'>Trusted By Millions, Build For You</h3>
                    <div className='flex justify-between max-w-[1100px] mx-auto'>
                        <div className='space-y-5'>
                            <p className='text-[12px] font-light'>Total Downloads</p>
                            <p className='text-5xl font-extrabold'>29.6M</p>
                            <p className='text-[12px] font-light'>21% More Than Last Month</p>
                        </div>
                        <div className='space-y-5'>
                            <p className='text-[12px] font-light'>Total Downloads</p>
                            <p className='text-5xl font-extrabold'>29.6M</p>
                            <p className='text-[12px] font-light'>21% More Than Last Month</p>
                        </div>
                        <div className='space-y-5'>
                            <p className='text-[12px] font-light'>Total Downloads</p>
                            <p className='text-5xl font-extrabold'>29.6M</p>
                            <p className='text-[12px] font-light'>21% More Than Last Month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;