import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavHeader() {
    return (
        <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand href="/">Musical Mood</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/moodpage">Choose a New Mood</Nav.Link>
                            <Nav.Link href="/dailysong">Song of the Day</Nav.Link>
                            <Nav.Link href="/dailysong">Learn More</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavHeader;