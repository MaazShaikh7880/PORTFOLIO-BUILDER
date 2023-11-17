import React from "react";
import { BackgroundBlogCard } from "../components/BackgroundBlogCard";

const Templatespage = () => {
    return <div class="container mx-auto p-4">
            <h1 className="my-10  font-bold text-center text-3xl sm:my-20 sm:text-4xl  md:text-6xl lg:text-8xl ">Create Your first ever portfolio website with us</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* <!-- Card 1 --> */}
        <BackgroundBlogCard/>
        <BackgroundBlogCard/>
        <BackgroundBlogCard/>
        <BackgroundBlogCard/>
        <BackgroundBlogCard/>
        <BackgroundBlogCard/>
        <BackgroundBlogCard/>
        <BackgroundBlogCard/>
        <BackgroundBlogCard/>
        <BackgroundBlogCard/>
        <BackgroundBlogCard/>
        <BackgroundBlogCard/>
        

        {/* <!-- Add more cards as needed --> */}
    </div>
</div>
}

export default Templatespage