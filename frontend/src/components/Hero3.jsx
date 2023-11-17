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
                    <p className=" text-2xl text-center font-semibold my-3 xs:text-left xs:text-3xl xs:mb-2 xs:mt-4 sm:text-left sm:text-4xl sm:mb-2 sm:mt-4">Create a website</p>
                    <p className=" mb-5 font-semibold xs:text-lg sm:text-xl "> Select from any of our industry-leading website templates, designer fonts, and color palettes that best fit your personal style and professional needs.</p>
                </div>
            </div>
            <div className=" flex gap-5 items-center xs:-mb-10 xs:gap-10 xs:my-16 sm:gap-10 ">
                <span className="text-2xl font-semibold xs:text-[9rem] sm:text-[9rem]">2</span>
                <div>
                    <p className=" text-2xl text-center font-semibold my-3 xs:text-left xs:text-3xl xs:mb-2 xs:mt-4 sm:text-left sm:text-4xl sm:mb-2 sm:mt-4">Ecommerce made easy</p>
                    <p className=" mb-5 font-semibold xs:text-lg sm:text-xl"> Explore which tools you want to add—whether it’s setting up an online store, booking services, or adding your favorite third-party extensions.</p>
                </div>
            </div>
            <div className=" flex gap-5 items-center xs:-mb-10 xs:gap-10 xs:my-16 sm:gap-10 ">
                <span className="text-2xl font-semibold xs:text-[9rem] sm:text-[9rem]">3</span>
                <div>
                    <p className=" text-2xl text-center font-semibold my-3 xs:text-left xs:text-3xl xs:mb-2 xs:mt-4 sm:text-left sm:text-4xl sm:mb-2 sm:mt-4">Create a website</p>
                    <p className=" mb-5 font-semibold xs:text-lg sm:text-xl"> Select from any of our industry-leading website templates, designer fonts, and color palettes that best fit your personal style and professional needs.</p>
                </div>
            </div>
        </div>
    </div>
}

export default Hero3