import React from "react";
import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const LoginCard = ({ onLogin }) =>{

  const navigate = useNavigate();

  <ToastContainer autoClose={8000} />
  const success = () => "Login successfully"
  const [haveacc, sethaveacc] = useState(true)

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const handlesubmitlogin = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3001/data/auth',{email:Email, password : Password})
    .then((res)=>{
      
      console.log(res.data)
      console.log(res.data.result)
      // localStorage.setItem("user",JSON.stringify({
      //   username: res.username,
      //   email: res.email,
      //   password: res.password,
      // }))
      alert("Login successfully!!!")
      handleSignIn()
      navigate('/')

      // success()
    })
    .catch(err=> console.log(err))
  }

  const handleSignIn = () => {
    // Perform your login logic here

    // Call the onLogin callback to set isLoggedIn to true
    if (onLogin) {
      onLogin();
    }
  };

  const handlesubmitRegister = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3001/data',{username:Name, email: Email, password: Password})
    .then((res)=>{
      console.log(res)
      sethaveacc(true)
    })
    .catch((err)=> console.log(err))
  }
  
  return <div>
    {
            haveacc ?(<div className=" bg-black">
            <div className=" flex flex-col w-1/3 mx-auto py-52">
               <div className="flex flex-col gap-2 bg-slate-200 p-10 rounded-3xl">
                 <div className=" flex justify-around text-4xl font-bold mb-12">PORTFOLIO-BUILDER</div>

                 <form className=" flex flex-col gap-2" onSubmit={handlesubmitlogin}>

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

                 <button  type="submit" className=" text-white mx-auto  m-2 mt-4 w-32 bg-black rounded-md p-3 hover:bg-slate-400 transition duration-300" 
                  >Log In</button>
                  </form>

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
                    <form className=" flex flex-col gap-2" onSubmit={handlesubmitRegister}>
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
                      
                      <button type="submit" className=" text-white mx-auto  m-2 mt-4 w-32 bg-black rounded-md p-3 hover:bg-slate-400 transition duration-300" 
                        >Register</button>
                      </form> 
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