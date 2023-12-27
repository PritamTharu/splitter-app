import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../css/Nav.css'


export default function Navpage() {
    return (
        <div className='top'>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href='/'>Splitter App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Button variant="warning">Add</Button>
                    </Nav>
                    <Navbar.Text><a href="/loginsigninpage">Login</a></Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
}
