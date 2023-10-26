import "./Home.css";
import profile from "../assets/profile_img.jpg"
import Header from "./Header/Header";
import "font-awesome/css/font-awesome.min.css"

function Home() {

    const updateColor = (newColor) => {
        setColor(newColor);
      };

    return(
        <>
            <div className="header">
                <Header updateColor={updateColor}/>
            </div>
            <div className="profile">
                <div className="dev">
                    <h1>Developer</h1>
                    <p>Who wants to learn, innovate and create</p>
                </div>
                <div className="image">
                    <img src= {profile} alt="Profile_Pic" />
                </div>
                <div className="code">
                    <h1>CODER</h1>
                    <p>Who knows C/C++ Python Java and JS</p>
                </div>
            </div>
        </>
    );
}
export default Home;