import "./Hero.css"
import profile from "../assets/profile_img.jpg"
import Header from "./Header/Header";
import Home from "./Home";
import About from "./About/About";
import Achievements from "./Achievements/Achievements";
import Footer from "./Footer/Footer"
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Hero() {
    return(
        <>
            <div className="hero">
                <Home/>
            </div>
            <div id = "about">
                <About/>
            </div>

            <div id="achievements">
                <Achievements/>
            </div>

            <div id="footer">
                <Footer/>
            </div>
        </>
    );
}
export default Hero;