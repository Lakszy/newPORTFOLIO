import React from "react";
import Hero from "../assests/MainPic.gif";
import { BiSolidRightArrow } from "react-icons/bi";


const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className=" font-mono max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="mt-16 flex flex-col justify-centerh-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-44">I'm a FrontEnd Developer
           <a target="_blank" href="https://www.linkedin.com/in/lakshaykhattar/" className="hover:text-2xl text-lg"> in</a>
           <a className="text-3xl"> ;  </a>
           <a target="_blank" href="https://github.com/Lakszy" className="hover:text-2xl text-lg"> git</a>
           </h2>
          <p className="text-gray-500 py-6 max-w-md line-clamp-6 lg:line-clamp-none ">
          Hi there!I'm a FrontEnd Developer with 1 year of experience in building and designing websites. I really enjoy working on web applications using technologies like React, Tailwind, NextJS, and Material UI. There's just something about creating compelling user interfaces that really excites me.
          </p>

          <div>
            <button className=" hidden font-semibold group text-white w-fit px-6 py-3 my-2 md:flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                Portfolio
                <span className="group-hover:rotate-90 duration-300 ml-2">
                <BiSolidRightArrow/> 
                </span>
            </button>
          </div>
        </div>
        <div className="w-96 mt-4">
            <img  src={Hero} alt="Pro_Image" size={20}
            className="cursor-pointer rounded-2xl mx-auto  md:w-full"/>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
