import React, { Fragment } from 'react';
import { Router, Switch, Route } from 'react-router';
import './App.css'
import HeaderBar from './HeaderBar/HeaderBar'
import About from './About/About'
import Work from './Work/Work'
import Project from './Project/Project'
import Contact from './Contact/Contact';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import ContactModal from './Contact/ContactModal'

const App = () => {
    // Need to get projects to pass to work page and navbar

    return (
        <Router>
            <main>
                <HeaderNavbar />
                <HeaderBar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/work" component={WorkPage} />
                    <Route path="/work/:project" component={ProjectPage} />
                </Switch>
            </main>
        </Router>
      )
}

const HomePage = () => {
    <Fragment>
        <h1>Home</h1>
        <Home />
    </Fragment>
}

const AboutPage = () => {
    <Fragment>
        <h1>About</h1>
        <About />
    </Fragment>
}

const ContactPage = () => {
    <Fragment>
        <h1>Contact</h1>
        <Contact />
    </Fragment>
}

const WorkPage = () => {
    <Fragment>
        <h1>Work</h1>
        <Work />
    </Fragment>
}

const ProjectPage = ({match:{params:{project}}}) => {
    <Fragment>
        <h1>Project</h1>
        <Project project={project} />
    </Fragment>
}

export default App;
