import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () =>{
    return <div className="mt-10 p-12 bg-slate-100">
        <div className="text-center text-lg font-bold mb-5">
            Contact Us
        </div>
        <div className="flex justify-evenly ">
        
        <div>
            <InstagramIcon 
            sx={{ fontSize: 35 ,
                '&:hover': {
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)'}}}/>
        </div>
        <div>
            <LinkedInIcon
            sx={{ fontSize: 35 ,
                '&:hover': {
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)'}}} />
        </div>
        <div>
            <FacebookIcon
            sx={{ fontSize: 35,
                '&:hover': {
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)'} }} />
        </div>
        <div>
            <EmailIcon
            sx={{ fontSize: 35,
                '&:hover': {
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)'} }} />
        </div>
        
    </div>
    </div>
}

export default Footer