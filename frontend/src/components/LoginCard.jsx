import React from "react";
import Register from "./Register";
import { useState } from "react";

const LoginCard = ({ onLogin }) =>{
  const [haveacc, sethaveacc] = useState(true)

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const handleSignIn = () => {
    // Perform your login logic here

    // Call the onLogin callback to set isLoggedIn to true
    if (onLogin) {
      onLogin();
    }
  };
  
  return <div>
    {
            haveacc ?(<div className=" bg-black">
            <div className=" flex flex-col w-1/3 mx-auto py-52">
               <div className="flex flex-col gap-2 bg-slate-200 p-10 rounded-3xl">
                 <div className=" flex justify-around text-4xl font-bold mb-12">PORTFOLIO-BUILDER</div>
                 <input className=" mb-2 w-72 mx-auto p-2 rounded-md" 
                  placeholder="Name"
                  type="text"
                  value={Name}
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}/>

                 <input className=" mb-2 w-72 mx-auto p-2 rounded-md" 
                  placeholder="Password"
                  type="password"
                  value={Password}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}/>

                 <button className=" text-white mx-auto  m-2 mt-4 w-32 bg-black rounded-md p-3 hover:bg-slate-400 transition duration-300" 
                  onClick={handleSignIn}>Log In</button>

                 <p className="mx-auto ">Don't have account <a className=" text-blue-500" 
                    onClick={()=>{sethaveacc(false)}}>Register here!</a>
                 </p>
               </div>
              </div>
            </div>) 
            :(<div className=" bg-black">
                <div className=" flex flex-col w-1/3 mx-auto py-48">
                  <div className="flex flex-col gap-2 bg-slate-200 p-10 rounded-3xl">
                    <div className=" flex justify-around text-4xl font-bold mb-12">PORTFOLIO-BUILDER</div>
                      
                      <input className=" mb-2 w-72 mx-auto p-2 rounded-md" 
                        placeholder="Name"
                        value={Name}
                        onChange={(e)=>{
                          setName(e.target.value)
                          console.log(Name)
                        }}/>

                      <input className=" mb-2 w-72 mx-auto p-2 rounded-md" 
                        placeholder="Email"
                        type="emial"
                        value={Email}
                        onChange={(e)=>{
                          setEmail(e.target.value)
                        }}/>
                      
                      <input className=" mb-2 w-72 mx-auto p-2 rounded-md"
                         placeholder="Password"
                         type="password"
                         value={Password}
                         onChange={(e)=>{
                          setPassword(e.target.value)
                        }}/>
                      
                      <button className=" text-white mx-auto  m-2 mt-4 w-32 bg-black rounded-md p-3 hover:bg-slate-400 transition duration-300" 
                        onClick={handleSignIn}>Register</button>
                      
                      <p className="mx-auto">Already have account <a className=" text-blue-500" 
                        onClick={()=>{sethaveacc(true)}}>Login here!</a>
                      </p>
                   </div>
                </div>
          </div>)
        }
  </div>
  
}

export default LoginCard