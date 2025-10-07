import React from "react";
import logo from "../../assets/logo.png"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
      <aside>
        <img className="w-20" src={logo} alt="" />
        <p className="font-bold">
          HERO.IO
          <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <FaTwitter className="text-[#9F62F2] cursor-pointer" />
          <FaYoutube className="text-[#9F62F2] cursor-pointer" />
          <FaFacebook className="text-[#9F62F2] cursor-pointer" />
          
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
