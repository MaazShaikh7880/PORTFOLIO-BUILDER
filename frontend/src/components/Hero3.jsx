import React from "react";
import desktop from "../components/desktop.png"

const Hero3 = () =>{
    return <div className="mx-10 items-center gap-10 md:flex md:justify-evenly">
        <div className=" md:w-1/2  items-center ">
            <img src={desktop} className="mx-auto my-auto w-auto h-auto"></img>
        </div>
        <div className=" md:w-1/2 md:mr-10 md:pr-5 "> 
            <div className=" flex gap-5 items-center xs:-mb-10 xs:gap-10 xs:my-16 sm:gap-10 ">
                <span className="text-2xl font-semibold xs:text-[9rem] sm:text-[9rem]">1</span>
                <div>
                    <p className=" text-2xl text-center font-semibold my-3 xs:text-left xs:text-3xl xs:mb-2 xs:mt-4 sm:text-left sm:text-4xl sm:mb-2 sm:mt-4">Clear and Concise Introduction</p>
                    <p className="text-slate-600 mb-5 font-semibold xs:text-lg sm:text-xl ">Aims to communicate to visitors who the user is and what they aim to achieve professionally.
</p>
                </div>
            </div>
            <div className=" flex gap-5 items-center xs:-mb-10 xs:gap-10 xs:my-16 sm:gap-10 ">
                <span className="text-2xl font-semibold xs:text-[9rem] sm:text-[9rem]">2</span>
                <div>
                    <p className=" text-2xl text-center font-semibold my-3 xs:text-left xs:text-3xl xs:mb-2 xs:mt-4 sm:text-left sm:text-4xl sm:mb-2 sm:mt-4">Portfolio Showcase</p>
                    <p className="text-slate-600 mb-5 font-semibold xs:text-lg sm:text-xl"> Empovering users to include links to live projects or GitHub repositories, thereby enhancing their online presence.</p>
                </div>
            </div>
            <div className=" flex gap-5 items-center xs:-mb-10 xs:gap-10 xs:my-16 sm:gap-10 ">
                <span className="text-2xl font-semibold xs:text-[9rem] sm:text-[9rem]">3</span>
                <div>
                    <p className=" text-2xl text-center font-semibold my-3 xs:text-left xs:text-3xl xs:mb-2 xs:mt-4 sm:text-left sm:text-4xl sm:mb-2 sm:mt-4">Resume and Skills Section</p>
                    <p className="text-slate-600 mb-5 font-semibold xs:text-lg sm:text-xl">Allow for the creation of a digital resume. Enable users to emphasize achievements, technical skills, and certifications effectively.</p>
                </div>
            </div>
        </div>
    </div>
}

export default Hero3