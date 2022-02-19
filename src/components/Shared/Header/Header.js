import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='my-background navigation' variant="light">
                <Container className='navigation'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink
                            className="menu"
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="menu"
                            to="/services"
                        >
                            Service
                        </NavLink>
                        <NavLink
                            className="menu"
                            to="/refferal"
                        >
                            Refferal
                        </NavLink>
                        <NavLink
                            className="menu"
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </Nav>
                    <Nav >
                        <div className='social-items'>
                            <a href="/" style={{margin:"0", padding:"0"}}><FacebookIcon className='social-icon' /></a>
                            <a href="/" style={{margin:"0 10px", padding:"0"}}><InstagramIcon className='social-icon' /></a>
                            <a href="/" style={{margin:"0", padding:"0"}}><YouTubeIcon className='social-icon' /></a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;