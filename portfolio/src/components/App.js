import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import HeaderBar from './HeaderBar/HeaderBar'
import Home from './Home/Home';
import About from './About/About'
import Work from './Work/Work'
import Project from './Project/Project'
import Contact from './Contact/Contact';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import FooterBar from './FooterBar/FooterBar';

const App = () => {
    // Need to get projects to pass to work page and navbar

    return (
        <Router>
            <main className="min-vh-100 p-0">
                <div className="container-fluid edge min-vh-100 p-0">
                    <HeaderNavbar />
                    <div className="row full-page p-0 m-0">
                        <div className="col-sm-1" />
                        <div  className="col-sm-10 pop">
                            <HeaderBar />
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/work" component={Work} />
                                <Route path="/work/:project" component={Project} />
                            </Switch>
                            <FooterBar />
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </main>
        </Router>
      )
}

export default App;
