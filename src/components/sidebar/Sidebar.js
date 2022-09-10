import "./Sidebar.css"
import { Link } from 'react-scroll';
import * as AiIcons from 'react-icons/ai';

const Sidebar = ({showSidebar, sidebar, onButtonClick}) => {
    return (
        <div className={!sidebar ? 'n-sidebar-active' : 'n-sidebar'}>
            <ul className="n-sidebar-items">
                <li className="n-sidebar-toggle" onClick={showSidebar}>
                    <AiIcons.AiOutlineClose className="n-close" />
                </li>
                <Link to='home' spy={true} smooth={true} offset={50} duration={500} onClick={showSidebar}>
                    <li className="n-sidebar-item">Home</li>
                </Link>
                <Link to='about' spy={true} smooth={true} offset={50} duration={500} onClick={showSidebar}>
                    <li className="n-sidebar-item">About</li>
                </Link>
                <Link to='work' spy={true} smooth={true} offset={50} duration={500} onClick={showSidebar}>
                    <li className="n-sidebar-item">Work</li>
                </Link>
                <Link to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={showSidebar}>
                    <li className="n-sidebar-item">Contact</li>
                </Link>
                <Link onClick={onButtonClick}>
                    <li className="n-sidebar-item">Download Resume</li>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar;