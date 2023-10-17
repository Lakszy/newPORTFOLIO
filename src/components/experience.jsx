import React from "react";
import node from "../assests/logos/node.png";
import canva from "../assests/logos/canva.png";
import css from "../assests/logos/css.png";
import html from "../assests/logos/html.png";
import github from "../assests/logos/newgit.png";
import newnext from "../assests/logos/newnext.png";
import react from "../assests/logos/react.png";
import tailwind from "../assests/logos/tailwind.png";
import mui from "../assests/logos/mui.png";
import js from "../assests/logos/js.png";
import ts from "../assests/logos/ts.png";
import py from "../assests/logos/py.svg";
import fg from "../assests/logos/figma.png";
import cpp from "../assests/logos/c++.png";
import mng from "../assests/logos/mongo.png";
import sql from "../assests/logos/sql.svg";

const Experience = () => {
  return (
    <div name="experience"
    className="bg-gradient-to-b from-gray-800 to-black w-full h-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-200 p-2 inline font-popins">Experience</p>
          <p className="py-6 text-lg">These are some technologies that I've worked with</p>
        </div>
           
          
           
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8 px- sm:px-0">
        <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-sky-300 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={react}
                alt="react"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">ReactJs</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-blue-500 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={ts}
                alt="type"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">Typescript</p>
            </div>
        
            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-green-300 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={mng}
                alt="materialui"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">Mongo DB</p>
            </div>


            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-blue-800 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={js}
                alt="taiwind"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">Javascript</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-green-500 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={node}
                alt="nodepic"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">NodeJs</p>
            </div>   
        
        <div className="shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-sky-700 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={css}
                alt="css"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">CSS</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-gray-500 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={newnext}
                alt="nextjs"
                className="w-20 py-6 px-3 mt-4 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">NextJs</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-white lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={github}
                alt="github"
                className=" text-white w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">GitHub</p>
            </div>


            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-orange-500 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={html}
                alt="html"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">HTML</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-blue-800 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={tailwind}
                alt="taiwind"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">Tailwind</p>
            </div>


            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-red-500 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={fg}
                alt="canva"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">Figma</p>
            </div>
            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-blue-500 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={cpp}
                alt="canva"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">C++</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-yellow-500 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={py}
                alt="pyhton"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">Python</p>
            </div>


            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-white lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={mui}
                alt="materialui"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">Material UI</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-pink-300 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={sql}
                alt="materialui"
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">SQL</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
