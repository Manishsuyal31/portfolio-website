import "./Navbar.css";
import { Link } from 'react-scroll';
import Icon from '../../img/icon.png'

const Navbar = () => {

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
                <ul className="n-list">
                    <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
                        <li className="n-icon">
                            <img src={Icon} alt="icon" className="n-img"/>
                        </li>
                    </Link>
                    <Link>
                        <li className="n-icon-name">PORTFOLIO WEBSITE   |</li>
                    </Link>
                    <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
                        <li className="n-items">Home</li>
                    </Link>
                    <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
                        <li className="n-items">About</li>
                    </Link>
                    <Link to='work' spy={true} smooth={true} offset={50} duration={500}>
                        <li className="n-items">Work</li>
                    </Link>
                    <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
                        <li className="n-items">Contact</li>
                    </Link>
                    <Link>
                        <li className="n-items" onClick={onButtonClick}>Download resume</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;