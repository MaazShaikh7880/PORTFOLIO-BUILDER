import React from "react";
import { BackgroundBlogCard } from "../components/BackgroundBlogCard";
import TemplateCard from "../components/TemplateCard";
import { useNavigate } from 'react-router-dom' 
const Templatespage = () => {

    const navigate = useNavigate()
    return <div>
        
        <div class = "container">
        <h1 className="  font-bold text-center text-3xl sm:my-20 sm:text-4xl  md:text-6xl lg:text-8xl pl-28 ">Create Your first ever portfolio website with us</h1>
           <div className=" pl-12">
            <div class="grid grid-cols-2" >
                <button onClick={()=>{navigate('/template1')}}><TemplateCard/></button>
                <TemplateCard/>
            </div>
            </div>

        </div>
</div>
}

export default Templatespage