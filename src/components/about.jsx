import React from "react";
import Lottie from "lottie-react";
import animationData from "../assests/animation_llxnb1pm.json";
import data from "../assests/animation_lkp0q4ac.json";
import animation from "../assests/animation_llxn8k38.json";

const About = () => {
  return (
    <div
    name="about"
    className=" md:py-24 w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="px-5 flex justify-between py-10 mb-20">
        
        <Lottie animationData={animation} className="w-96 h-96 -mb-44"/>
        <Lottie animationData={animation} className="w-96 h-96 -mb-44"/>
        <Lottie animationData={animation} className="w-96 h-96 -mb-44"/>

      </div>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full z-60">

        <div className="-mb-12" >
          <p className="mt-hover:cursor-pointer hover:border-blue-200 text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20 font-semibold">As a computer science student at Delhi University, I am passionate about learning and applying new technologies to real-world problems. I have been fortunate enough to develop skills in REACTJS, VANILA JS, Bootstrap, CSS, and Canva, which have allowed me to create engaging and responsive web pages and graphics for various projects.!</p>
         <br />
         <p className="text-xl font-semibold">
         Additionally, I enjoy solving challenging and competitive coding problems on platforms such as LeetCode, Codechef, and Codeforces, where I have solved over 400 problems and achieved a 2-star rating on Codechef. I am always eager to improve my coding skills and learn from others.
         </p>
      
      </div>
    </div>
  );
};

export default About;
