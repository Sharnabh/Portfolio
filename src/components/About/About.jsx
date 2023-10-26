import "./About.css"
import pdf from "../../assets/Sharnabh-Resume.pdf";

function About() {

    const resume = () => {
        window.open(pdf);
    }

    return(
        <>
            <div className="container">
            <h1>All About Me</h1>
            <p>I am Sharnabh Banerjee 2nd B.tech Student at Galgotias University and a tech and cyber enthusiast. Best at time management and multi tasking.</p>
            <a onClick={resume}>
                Resume
                </a>
            </div>

            <div className="blank">
                <div className="skills">
                <h1>Skills</h1>
                <p>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/c-original.svg" alt="C" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/cplusplus-original.svg" alt="CPP" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/java-original.svg" alt="Java" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/javascript-original.svg" alt="Javascript" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/python-original.svg" alt="Python" width="40" height="40"/>
                </p>
                </div>
                <div className="frontend">
                <h1>Frontend</h1>
                <p>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/bootstrap-plain-wordmark.svg" alt="Bootstrap" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg" alt="React" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/html5-original-wordmark.svg" alt="HTML" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg" alt="Css" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg" alt="Tailwindcss" width="40" height="40"/>
                </p>
                </div>
                <div className="BaD">
                <h1>Backend and Database</h1>
                <p>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Database/mysql-original-wordmark.svg" alt="Mysql" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/BackendService/firebase-icon.svg" alt="Firebase" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Devops/amazonwebservices-original-wordmark.svg" alt="Amazon Web Services" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Devops/docker-original-wordmark.svg" alt="Docker" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Framework/django.svg" alt="Django" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/ML/pandas-original.svg" alt="Pandas" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/ML/opencv-icon.svg" alt="Opencv" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/git-scm-icon.svg" alt="Git" width="40" height="40"/>
                </p>
                </div>
            </div>
        </>
    );
}
export default About;