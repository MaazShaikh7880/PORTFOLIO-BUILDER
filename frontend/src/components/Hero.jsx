import React from "react";
import desktop from "../components/desktop.png"
import Video from "./Video.mp4"
const Hero = () => {
    return <div className=" mx-5 items-center md:flex md:flex-row-reverse md:justify-evenly lg:mt-20 lg:ml-10">
        <div className="w-full flex-1 justify-center">
        <div>
            <video width="640" height="250" autoPlay loop muted>
                <source src={Video} type="video/mp4" />
                
            </video>
    </div>
        </div>

        <div className=" flex-1 md:justify-start">
        <p className=" text-4xl font-bold xs:text-5xl sm:text-6xl md:text-6xl lg:text-8xl">EVERYTHING TO SHOW</p>
        <p className=" text-4xl font-bold xs:text-5xl sm:text-6xl md:text-6xl lg:text-8xl">SKILLS</p>

        <div className=" my-2 font-semibold md:text-3xl ">
        <button className="my-5 w-full py-5 md:w-56 md:text-2xl bg-slate-600 text-white md:px-7 md:py-5 hover:bg-gray-800">GET STARTED</button>
        <p className="text-slate-600 text-xl sm:text-2xl">Start your free website trial today</p>
        <p className="text-slate-600 text-xl sm:text-2xl">No credit card required</p>
        </div>
       
        </div>
        
    </div>
}

export default Hero