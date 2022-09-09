import "./About.css";
import Award from "../../img/Award.jpg";
import Award1 from '../../img/Award1.jpg'

const About = () => {
    return (
        <div className="a" id='about'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                   " I’m a great believer in luck, and I find the harder I work the more I have of it " 
                </p>
                <p className="a-desc">
                    Hi my name is Manish and i am a Computer Science Student at Graphic Era University .
                    I've been working with React for more than 2 years now and is fluent at it .
                </p>
                <div className="a-award">
                    <a href="https://www.udemy.com/certificate/UC-baa71a75-0232-4e66-9b44-e28a7bebe95d/" target="_blank" rel="noreferrer">
                        <img src={Award} alt="certification" className="a-award-img" />
                    </a>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">React Native Certification 2022</h4>
                        <p className="a-award-desc">
                            React Native Certification .
                        </p>
                    </div>
                </div>
                <div className="a-award">
                    <a href="https://olympus1.mygreatlearning.com/course_certificate/PQNPMHRN" target="_blank" rel="noreferrer">
                        <img src={Award1} alt="certification" className="a-award-img" />
                    </a>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">React JS Certification</h4>
                        <p className="a-award-desc">
                            React JS Certification from mygreatlearning .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;