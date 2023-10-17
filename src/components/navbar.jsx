import React, { useState } from "react";
import ShuffleText from "react-shuffle-text";
import { FaTimes} from "react-icons/fa";
import {GoHubot} from "react-icons/go";
import{FcMusic} from "react-icons/fc";
import {Link} from "react-scroll";
const Navbar = () => {

const[nav, setnav]= useState(false);

    const links=[
      {
        id:1,
        link:"home",
      },
      {
        id:2,
        link:"about",
      },
      {
        id:3,
        link:"portfolio",
      },
      {
        id:4,
        link:"experience",
      },
      {
        id:5,
        link:"contact",
      },
    ];




  return (
    <div className="flex justify-between bg-black items-center w-full h-16">
      <div className="text-3xl md:text-5xl text-blue-100 hover:shadow-white px-2 cursor-pointer font-mono animate-pulse md:hover:text-5xl hover:font-bold hover:animate-none">
        <span className="flex flex-row">
        <ShuffleText content="Lakshay Khattar" /><FcMusic/>

        </span>
      </div>
       
       <ul className="hidden md:flex">
{links.map(({id,link})=>(
    <li
    key={id}
    className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 hover:text-white text-2xl"

> 
 <Link to={link} smooth duration={500}>{link}</Link> 
</li>
))}
 </ul>
      
      <div onClick={()=> setnav(!nav)} className=" md:hidden text-white px-2 hover:cursor-pointer z-10">
        {nav ? <FaTimes size={30}/> : <GoHubot size={30}/>}
      </div>

      {nav &&(                                                                                          
      <ul className="flex flex-col justify-center items-center absolute top-12  w-full h-screen bg-gradient-to-b from-black to gray-400 via-black text-gray-300">
      {links.map(({id,link})=>(
    <li
    key={id}
    className="px-4 capitalize font-medium text-white hover:scale-110 duration-200 hover:text-gray-500 cursor-pointer font-mono text-6xl py-3"

> 
 <Link to={link} smooth duration={100}>{link}</Link> 
</li>
))}
 
       </ul>


      )}
      
    </div>
  );
};

export default Navbar;
