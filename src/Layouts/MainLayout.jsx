import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
    );
};

export default MainLayout;