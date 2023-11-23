import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
const Navbar = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate()

    // useEffect(() => {
    //     // Fetch user information after login
    //     const fetchCurrentUser = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3001/data'); // Adjust the API endpoint
    //             setCurrentUser(response.data);
    //         } catch (error) {
    //             console.error('Error fetching current user:', error);
    //         }
    //     };

    //     // Call the fetchCurrentUser function
    //     fetchCurrentUser();
    // }, []);
    return <div>
        <nav className="flex bg-slate-50 py-5 px-10  items-center font-semibold text-black">
        <img className=" mx-10" alt="Logo"></img>
            <ul className="mx-10 list-none justify-center items-center flex-1 sm:gap-12 md:flex md:gap-20 ">
                <li className=" text-slate-600 hover:text-black hover:text-lg transition duration-300 ease-in-out " onClick={() => {navigate('/')}}>HOME</li>
                <li className=" text-slate-600 hover:text-black hover:text-lg transition duration-1000 ease-in-out" onClick={()=>{navigate('about')}}>ABOUT</li>
                {/* <li className=" text-slate-600 hover:text-black hover:text-lg transition duration-1000 ease-in-out" onClick={()=>{navigate('contact')}}>CONTACT</li> */}
                <li className=" text-slate-600 hover:text-black hover:text-lg transition duration-1000 ease-in-out" onClick={()=>{navigate('templates')}}>TEMPLATES</li>
                {/* <li className=" text-slate-600 hover:text-black hover:text-lg transition duration-1000 ease-in-out" onClick={()=>{navigate('template1')}}>Template1</li> */}
            </ul>
                {/* <p>{currentUser.username}</p> */}
                {/* <button className="bg-black text-white rounded-md px-7 py-3 hover:bg-slate-600" onClick={()=>{navigate('/')}}>Login</button> */}

        </nav>
    </div>
}

export default Navbar