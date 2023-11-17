import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./style.css";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import Home2 from "./components/Home2.js";

const Template1 = () =>{
    return <div>
        <NavBar/>
        <Home/>
        <Home2/>
        <Footer/>
    </div>
}

export default Template1