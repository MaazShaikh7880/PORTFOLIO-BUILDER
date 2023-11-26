import React from "react";
import desktop from "../components/desktop.png"
import Video from "./Video.mp4"
import { useState } from "react";
import UserData from "./UserData";


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Hero = () => {
    const [show, setshow] = useState(false)
    const [morefields, setmorefileds] = useState(1)

    const handleincremnt = () => {
        setmorefileds((morefields) => morefields+1)
    }

    const handledecremnt = () => {
        if(morefields > 1){
            setmorefileds((morefields) => morefields-1)
        }
    }
    const handleclicked = () => {
        setshow(true)
    }
    const handleClose = () => {
        setshow(false)
    } 
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
            <button className="my-5 w-full py-5 md:w-56 md:text-2xl bg-slate-600 text-white md:px-7 md:py-5 hover:bg-gray-800" onClick={handleclicked}>GET STARTED
            </button>
        {show && (
        <div>
          <Dialog style={{backdropFilter:'blur(8px)', color:'black'}} open={show} onClose={handleClose}>
        <DialogTitle className="text-center" style={{fontSize:'2rem', fontWeight:'bold'}}>Enter Details</DialogTitle>
        <DialogContent>
          
          <div className=" m-5 flex gap-5">
          <TextField
            autoFocus
            margin="dense"
            id="linkdin"
            label="Linkdin Profile"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="github"
            label="Github Profile"
            type="text"
            fullWidth
            variant="standard"
          />
          </div>
          {/* <TextField
            autoFocus
            margin="dense"
            id="roles"
            label="Skills"
            type="text"
            fullWidth
            variant="standard"
          /> */}
   
        {[...Array(morefields)].map((_, index) => (
           
            <div className="m-5 flex" key={index}>
                <TextField
                autoFocus
                margin="dense"
                label={`Skill ${index + 1}`}
                type="text"
                fullWidth
                variant="standard"
                />    
                <div className=" flex">
                    <Button style={{ color : 'red'}} onClick={handledecremnt}>
                        <RemoveIcon/>
                    </Button>

                    <Button  onClick={handleincremnt}>
                        <AddIcon/
                    ></Button>
                </div>
            </div>
        
            
        ))}
        
    
        
          <div className="  mt-12 flex gap-2 justify-center">
            <Button style={{color: 'red'}} onClick={handleClose}>Cancel</Button>
            {/* <Button onClick={handledecremnt}>Remove</Button>
            <Button onClick={handleincremnt}>Add Field</Button> */}
            <Button onClick={handleClose}>Submit</Button>
          </div>
          
        </DialogContent>
      </Dialog>

        </div>
      )}
        <p className="text-slate-600 text-xl sm:text-2xl">Start your free website trial today</p>
        <p className="text-slate-600 text-xl sm:text-2xl">No credit card required</p>
        </div>
       
        </div>
        
    </div>
}

export default Hero