import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
    <Navbar variant="dark" bg="primary" data-bs-theme="light" className={styles.bgprimary}>
    <Container>
        <Navbar.Brand>Blog.app</Navbar.Brand>
        <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
    );
};
    
export default NavBar;
