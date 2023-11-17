import React from "react";
import { TextField } from '@mui/material';

const ProjectInfo = () => {
    return <div className="my-10 mx-20 lg:mx-32 flex flex-col">
    <div className=" md:flex md:justify-evenly md:gap-10">
            <div className=" md:flex md:flex-col md:w-1/2"> 
                <span className=" font-bold m-2">Name: </span>
                <TextField id="outlined-basic" label="Name" variant="outlined" margin="dense" fullWidth/>
            </div>   
            <br></br>
            <div className=" md:flex md:flex-col md:w-1/2"> 
                <span className=" font-bold m-2">Email: </span>
                <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" fullWidth/>
            </div>   
    </div>
    <br></br>
    <div className=" md:flex md:justify-evenly md:gap-10">
        <div className=" md:flex md:flex-col md:w-1/2"> 
            <span className=" font-bold m-2">Phone: </span>
            <TextField id="outlined-basic" label="Phone" variant="outlined" margin="dense" fullWidth/>
        </div>   
        <br></br>
        <div className=" md:flex md:flex-col md:w-1/2"> 
            <span className=" font-bold m-2">Linkdin: </span>
            <TextField id="outlined-basic" label="Linkdin" variant="outlined" margin="dense" fullWidth/>
        </div>   
    </div>
</div>
}

export default ProjectInfo