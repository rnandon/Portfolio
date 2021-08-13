import React, {Component} from 'react';
import './App.css'
import HeaderBar from './HeaderBar/HeaderBar'
import About from './About/About'
import Work from './Work/Work'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import Contact from './Contact/Contact'

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
      return (
        <Container className="m-0 p-0" fluid>
            <HeaderNavbar />
            
            <Row className="mx-0">
                <Col className="m-0 p-0 d-none d-md-block col-md-2 bg-dark" />
                <Col className="m-0 p-0 col-xs-12 col-md-8" >
                    <Row className="my-5 mx-0"/>
                    <Row className="mx-0" >
                        <HeaderBar />
                    </Row>
                    <Row className="mx-0" >
                        <About />
                    </Row>
                    <Row className="mx-0" >
                        <Work />
                    </Row>
                    <Row>
                        <Contact />
                    </Row>
                </Col>
                <Col className="m-0 p-0 d-none d-md-block col-md-2 bg-dark" />
            </Row>
        </Container>
      )
    }
}

export default App;

/*
Idea for layout:

Navbar. Sticky, shows name at all sizes. Collapses on mobile, maybe a different icon for the collapse button?
Home page. A brief description of me, a couple highlights.
About page. A more thorough description of me, what tech I like, etc.
Work page. High level overviews of my work, links to github and video walkthroughs
Blog page? Show most recent posts first. This might need a backend.
Contact page. Form, on submit send me an email. Also provide contact info.

*/