import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()
    return <div>
        <nav className=" flex py-5 px-10 items-center font-semibold text-black">
        <img className=" mx-10" alt="Logo"></img>
            <ul1 className="mx-10 list-none justify-center items-center flex-1 sm:gap-12 md:flex md:gap-20 ">
                <li className=" hover:text-white" onClick={()=>{navigate('/home')}}>HOME</li>
                <li className=" hover:text-white" onClick={()=>{navigate('about')}}>ABOUT</li>
                <li className=" hover:text-white" onClick={()=>{navigate('contact')}}>CONTACT</li>
                <li className=" hover:text-white" onClick={()=>{navigate('templates')}}>TEMPLATES</li>
            </ul1>
            <button className=" bg-black text-white px-7 py-3  hover:bg-white" onClick={()=>{navigate('/')}}>Login</button>

        </nav>
    </div>
}

export default Navbar