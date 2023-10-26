import "./Achievements.css"

function Achievements() {
    return(
        <>
            <div className="container second">
            <div className="item">
                <div className="img-bg img-first"></div>
                <div className="card">
                <h3>Hackathon</h3>
                <p>Galgotias College Technothon '23</p>
                <p>Hacktober Fest '23</p>
                </div>
            </div>
            <div className="item">
                <div className="img-bg img-second"></div>
                <div className="card">
                <h3>Internships</h3>
                <p>AICTE Virtual Internship'23</p>
                <a id="anchor" href="#">Learn more</a>
                </div>
            </div>
            </div>
        </>
    );
}
export default Achievements;