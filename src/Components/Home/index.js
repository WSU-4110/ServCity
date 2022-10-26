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
                className = "btn btn-primary"> Tires & Wheelcare
                </button>
            </Link>
            

            <Link to="/Denting&Painting"> 
                <button
                type = "submit"
                className = "btn btn-primary"> Denting & Paint
                </button>
            </Link>

            <Link to="/Lights"> 
                <button
                type = "submit"
                className = "btn btn-primary"> Lights & Windshield
                </button>
            </Link>
            
        
            <Link to="/Batteries"> 
                <button
                type = "submit"
                className = "btn btn-primary"> Batteries
                </button>
            </Link>

            <Link to="/ACrepair">
                <button
                type = "submit"
                className = "btn btn-primary"> A/C Repair
                </button>
            </Link>

            <Link to="/Oiling">  
                <button
                type = "submit"
                className = "btn btn-primary"> Oiling
                </button>
            </Link>
           

            <Link to="/Clutch&Breaks">
                <button
                type = "submit"
                className = "btn btn-primary"> Clutch & Breaks
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