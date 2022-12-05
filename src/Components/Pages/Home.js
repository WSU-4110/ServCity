/** import { Home } from "@mui/icons-material";**/
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/material";
import { Link } from "react-router-dom";
import TopSection from '../TopSection';
import Cards from '../Cards';
import Footer from '../Footer';



import "bootstrap/dist/css/bootstrap.min.css";

/** const useStyles = makeStyles(theme => ({
    root: {
        display:'flex',
    }
})); **/

function HomePage(){
    return(
        <div>
            <TopSection/>
            <Cards/>
        </div> 
    
    );


};

export default HomePage;


