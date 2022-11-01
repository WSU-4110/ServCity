import { Home } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./home.css"
import "bootstrap/dist/css/bootstrap.min.css";
function HomePage(){
    return(
        <div>
            <h1> Welcome to ServiCity</h1>

            <Link to="/Tires">
                <Button
                type = "submit"
                className = "btn btn-primary"> Tires
                </Button>
            </Link>
            

            <Link to="/Oil Change"> 
                <Button
                type = "submit"
                className = "btn btn-primary"> Oil Change
                </Button>
            </Link>
            
        
            <Link to="/Brakes"> 
                <Button
                type = "submit"
                className = "btn btn-primary"> Brakes
                </Button>
            </Link>

            <Link to="/Alignment">
                <Button
                type = "submit"
                className = "btn btn-primary"> Alignment
                </Button>
            </Link>

            <Link to="/Fluid Flush">  
                <Button
                type = "submit"
                className = "btn btn-primary"> Fluid Flush
                </Button>
            </Link>
            
            <Link to="/DIY">
                <Button
                type = "submit"
                className = "btn btn-primary"> Do it Yourself
                </Button> 
            </Link>   

            <div>
                <img src="./images/background.png"/>
            </div>

        </div> 
    
    );


};

export default HomePage;


