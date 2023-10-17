import React from "react";
import booksn from "../assests/booksntrade.png";
import bookmy from "../assests/bookmyshow.png";
import port from "../assests/portfolio.png";
import lol from "../assests/lll.png";
import sss from "../assests/sssage.png";
import ttt from "../assests/tic.png";
import Ai from "../assests/AI.png";
import ret from "../assests/retro.png"
import store from "../assests/STORE1.png"


const Portfolio = () => {
  return (
    <div
    name="portfolio"
    className="md:py-24 w-full h-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div
      className="s md:pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
        <p className="py-6">Check Out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">

          <div className="shadow-md shadow-gray-600 rounded-lg lg:hover:scale-150">
            <img 
            src={port} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-125"
            />
            <div className="flex items-center justify-center">
            <a href="https://64c61d031ec6cc6227a5315f--starlit-tulumba-72698b.netlify.app/" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Demo</a>
            <a href="https://github.com/Lakszy/PORTFOLIO" target="_blank" rel="noreferrer"className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Code</a>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg lg:hover:scale-150">
            <img 
            src={ttt} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-125"
            />
            <div className="flex items-center justify-center">
            <a href="https://mellow-bonbon-a7578e.netlify.app/" target="_blank" rel="noreferrer"className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Demo</a>
            <a href="https://github.com/Lakszy/SAMPLE-REPO/tree/main" target="_blank" rel="noreferrer"className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Code</a>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg lg:hover:scale-150">
            <img 
            src={booksn} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-125"
            />
            <div className="flex items-center justify-center">
            <a href="https://sites.google.com/view/booksntrade" target="_blank" rel="noreferrer"className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Site</a>
            <a href="https://sites.google.com/new" target="_blank" rel="noreferrer"className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Template</a>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg lg:hover:scale-150">
            <img 
            src={bookmy} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-125"
            />
            <div className="flex items-center justify-center">
            <a href="https://velvety-semifreddo-34dc31.netlify.app/" target="_blank" rel="noreferrer"className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Demo</a>
            <a href="https://github.com/Lakszy/BookMyShowLakszy" target="_blank" rel="noreferrer"className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Code</a>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg lg:hover:scale-150">
            <img 
            src={lol} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-125"
            />
            <div className="flex items-center justify-center">
            <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold hover:cursor-not-allowed">Demo</a>
            <a href="https://github.com/Lakszy/SocialPedia" target="_blank" rel="noreferrer"className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Code</a>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg lg:hover:scale-150">
            <img 
            src={sss} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-125"
            />
            <div className="flex items-center justify-center">
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7076578118999711745/" target="_blank"  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold hover:cursor-pointer">Demo</a>
            <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold hover:cursor-not-allowed">Code</a>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg lg:hover:scale-150">
            <img 
            src={ret} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-125"
            />
            <div className="flex items-center justify-center">
            <a href="https://eloquent-travesseiro-66e45d.netlify.app/" target="_blank"  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold hover:cursor-pointer">Demo</a>
            <a  href="https://github.com/Lakszy/RETRO" target="_blank"  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold hover:cursor-pointer">Code</a>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg lg:hover:scale-150">
            <img 
            src={Ai} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-125"
            />
            <div className="flex items-center justify-center">
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7101594201942859776/" target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold hover:cursor-pointer">Demo</a>
            <a href="https://github.com/Lakszy/YOUR-AI-COMPANION" target="_blank"  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold hover:cursor-pointer">Code</a>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg lg:hover:scale-150">
            <img 
            src={store} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-125"
            />
            <div className="flex items-center justify-center">
            <a href="https://6507189afbb37b4980cf0db2--majestic-griffin-49ee1b.netlify.app/" target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold hover:cursor-pointer">Demo</a>
            <a href="https://github.com/Lakszy/totalitycorp-frontend-challenge" target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold hover:cursor-pointer">Code</a>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Portfolio;
