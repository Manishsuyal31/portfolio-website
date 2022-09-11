import { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-scroll';
import * as FaIcons from 'react-icons/fa';
import Sidebar from "../sidebar/Sidebar";
import Toggle from "../toggle/Toggle"

const Navbar = () => {

    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => {

        setSidebar(!sidebar);
    };

    const onButtonClick = () => {
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
                alert('Downloading resume');
            })
        })
    }

    return (
        <div className="n">
            <div className="n-wrapper">
                <Sidebar showSidebar={showSidebar} sidebar={sidebar} onButtonClick={onButtonClick}/>
                <ul className="n-list">
                    <Link>
                        <li className="n-icon">
                            <FaIcons.FaBars className="n-bar" onClick={showSidebar} />
                        </li>
                    </Link>
                    <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
                        <li className="n-items" id='n-item'>PORTFOLIO WEBSITE</li>
                    </Link>
                    <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
                        <li className="n-items">Home</li>
                    </Link>
                    <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
                        <li className="n-items">About</li>
                    </Link>
                    <Link to='/work' spy={true} smooth={true} offset={50} duration={500}>
                        <li className="n-items">Work</li>
                    </Link>
                    <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
                        <li className="n-items">Contact</li>
                    </Link>
                    <Link>
                        <li className="n-items" onClick={onButtonClick}>Download resume</li>
                    </Link>
                </ul>
                <Toggle />
            </div>
        </div>
    )
}

export default Navbar;