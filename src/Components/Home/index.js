import { Home } from "@mui/icons-material";
import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./home.css"

function HomePage(){
    return(
        <div>
            <h1> Welcome to ServiCity</h1>

            <Link to="/Tires">
                <button
                type = "submit"
                className = "btn btn-primary"> Tire Maintenance 
                </button>
            </Link>
            

            <Link to="/FluidFlush"> 
                <button
                type = "submit"
                className = "btn btn-primary"> Fluid Flush 
                </button>
            </Link>

            <Link to="/TireAlignment"> 
                <button
                type = "submit"
                className = "btn btn-primary"> Alignment 
                </button>
            </Link>
            

            <Link to="/Oiling">  
                <button
                type = "submit"
                className = "btn btn-primary"> Oil Change
                </button>
            </Link>
           

            <Link to="/BreakMaintenance">
                <button
                type = "submit"
                className = "btn btn-primary"> Break Maintenance 
                </button>
            </Link>
            

            <Link to="/DIY">
                <button
                type = "submit"
                className = "btn btn-primary"> Do it Yourself
                </button> 
            </Link>   

        </div>
    );

    <div>  <img src={require('./Logo.png')}> </img></div>


}

export default HomePage;