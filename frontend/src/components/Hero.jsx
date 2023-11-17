import React from "react";
import desktop from "../components/desktop.png"
const Hero = () => {
    return <div className="mx-5 items-center md:flex md:flex-row-reverse md:justify-evenly lg:mt-20 lg:ml-10">
        <div className="w-full flex-1 justify-center">
            <img src={desktop} className="mx-auto my-auto w-auto h-auto"></img>
        </div>

        <div className=" flex-1 md:justify-start">
        <p className=" text-4xl font-bold xs:text-5xl sm:text-6xl md:text-6xl lg:text-8xl">EVERYTHING TO SELL</p>
        <p className=" text-4xl font-bold xs:text-5xl sm:text-6xl md:text-6xl lg:text-8xl">ANYTHING</p>

        <div className=" my-2 font-semibold md:text-3xl ">
        <button className="my-5 w-full py-5 md:w-56 md:text-2xl bg-black text-white md:px-7 md:py-5 hover:bg-blue-200 hover:text-black transition-color duration-200 delay-200">GET STARTED</button>
        <p className=" text-xl sm:text-2xl">Start your free website trial today</p>
        <p className=" text-xl sm:text-2xl">No credit card required</p>
        </div>
       
        </div>
        
    </div>
}

export default Hero