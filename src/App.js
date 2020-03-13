import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

function App() {
    return (
        <Container style={{backgroundColor:"rgb(31, 33, 33)",padding:"0px"}} fluid>
        <Router>
          {/* NavBar Home, About, Dates(Calendar(Performance dates)/Announcements), Help us (Donation/Fundraising/Volunteer(Drink/Snack)), Contact */}
          <Navbar sticky="top" bg="light" expand="lg" style={{padding:"5px 10px"}}>
            {/* Link to Home Page */}
            <Navbar.Brand href="/home" style={{fontSize:"2em",fontWeight:"bold"}}>Sanitizer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" style={{fontSize:"1.2em"}}>
              <Nav variant="pills" defaultActiveKey="1">
                {/* Link to About page */}
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                {/* Dropdown links to calendar and announcement page */}
                <NavDropdown title="Information" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/calendar">Calendar</NavDropdown.Item>
                  <NavDropdown.Item href="/announce">Announcements</NavDropdown.Item>
                </NavDropdown>
                {/* Dropdown links to donation, fundraising, volunteer pages */}
                <NavDropdown title="Support" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/donation">Donation</NavDropdown.Item>
                  <NavDropdown.Item href="/fundraising">Fundraising</NavDropdown.Item>
                  <NavDropdown.Item href="/volunteer">Volunteer</NavDropdown.Item>
                </NavDropdown>
                {/* Link to contact page */}
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* The Container that holds the content and displayed in */}
          <Container style={{backgroundColor:"white",minHeight:"91.3vh",paddingTop:"10px"}}>
            {/* Switch that show what page to display */}
            <Switch>
              {/* Home */}<Route path="/home"><FillerDiv /></Route>
              {/* About */}<Route path="/about"><FillerDiv /></Route>
              {/* Calendar */}<Route path="/calendar"><FillerDiv /></Route>
              {/* Announcements */}<Route path="/announce"><FillerDiv /></Route>
              {/* Dates */}<Route path="/dates"><FillerDiv /></Route>
              {/* Help Us */}<Route path="/helpUs"><FillerDiv /></Route>
              {/* Donation */}<Route path="/donation"><FillerDiv /></Route>
              {/* Fundraising */}<Route path="/fundraising"><FillerDiv /></Route>
              {/* Volunteer */}<Route path="/volunteer"><FillerDiv /></Route>
              {/* Contact */}<Route path="/contact"><FillerDiv /></Route>
              {/* Redirect to home */}<Redirect to="/home" />
            </Switch>
          </Container>
      </Router>
      </Container>
    );
}

function FillerDiv() {
    return (<div>Filler</div>);
}
export default App;