import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, animateScroll as scroll } from 'react-scroll';
import "./Navbar.css";

const Navbar = () => {
    const screenSize = useMediaQuery('(max-width:960px)');
    let [click, setClick] = useState(false)

    const toggleIcon = () => {
        setClick((prevState) => !prevState);
    }

    const clickedStyles = {
        top: 70,
        transition: 'all 0.5s ease'
    };

    const notClickedStyled = {
        top: -450,
        transition: 'all 0.5s ease'
    };

    const laptopView = {
        display: 'flex'
    };

    const menu = screenSize ? click ? clickedStyles : notClickedStyled : laptopView;

    //Need to add scroll lock feature after opening the navbar in mobile view

    return (
        <div className='container'>
            <div className='logo'>
                <a href='mailto:mannurkarswapnil@gmail.com' target='_blank' style={{ textDecoration: "none" }}>😎 <span className='name'>mannurkarswapnil@gmail.com</span></a>
                <div onClick={toggleIcon}>
                    {screenSize && (!click ? <MenuIcon sx={{ fontSize: 30 }} /> : <CloseIcon sx={{ fontSize: 30 }} />)}
                </div >
            </div>

            <div className='navItems' style={menu}>
                <ul>
                    <Link
                        activeClass="active"
                        to="about-me-section"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='link'
                        onClick={toggleIcon}
                    >
                        About Me
                    </Link>
                    <Link
                        activeClass="active"
                        to="about-me-section"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='link'
                        onClick={toggleIcon}
                    >Experience
                    </Link>
                    <Link
                        activeClass="active"
                        to="about-me-section"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='link'
                        onClick={toggleIcon}
                    >Projects
                    </Link>
                    <Link
                        activeClass="active"
                        to="about-me-section"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='link'
                        onClick={toggleIcon}
                    >Achievements
                    </Link>
                </ul>
                <button><a>Contact me</a></button>
            </div>
        </div>
    );
};

export default Navbar;
