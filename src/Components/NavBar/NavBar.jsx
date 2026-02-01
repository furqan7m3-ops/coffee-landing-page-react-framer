import "./NavBar.css";
import hamburgerIcon from "../../assets/menu.png";
import { useEffect, useState } from "react";
import { motion} from "framer-motion";


const navContainer = {
    hidden:{},
    show:{
        transition:{
            staggerChildren: 0.20,
        }
    },
};
const navAnim = {
    hidden:{opacity:0,y:-100},
    show:{opacity:1,y:0}
};
export default function NavBar() {
    const [toggleNav, setToggleNav] = useState(true);
    const handleClick = (e) => {
        setToggleNav(state => !state);
    };

    useEffect(
        () => {
            const handleResize = () => {
                if (window.innerWidth < 768) {
                    setToggleNav(false);
                }
                else {
                    setToggleNav(true);
                }
            }

            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []
    )
    return (
        <nav className="nav">
            <motion.div
                className="nav-logo"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay:0.25, duration: 1, ease: "easeInOut" }}
            >
                Bean Scene
            </motion.div>

            {toggleNav && (
                <motion.ul variants={navContainer} initial="hidden" animate="show" className={`nav-list ${toggleNav ? 'active' : ''}`}>
                    <motion.li className="nav-list-item"
                        variants={navAnim}
                    ><a href="#">Home</a></motion.li>
                    <motion.li className="nav-list-item"
                        variants={navAnim}
                    ><a href="#">Menu</a></motion.li>
                    <motion.li className="nav-list-item"
                        variants={navAnim}
                    ><a href="#">About Us</a></motion.li>
                    <motion.li className="nav-list-item"
                        variants={navAnim}
                    ><a href="#">Contact Us</a></motion.li>
                </motion.ul>)
            }

            <motion.div
                className="nav-cta-btns"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{delay:0.25, duration: 1, ease: "easeInOut" }}
            >
                <button className="cta-btn">Sign In</button>
                <button className="cta-btn">Sign Out</button>
            </motion.div>
            <img onClick={handleClick} className="nav-icon" src={hamburgerIcon} alt="hamburger-icon" />
        </nav>
    );
}