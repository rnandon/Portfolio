import React, {Component} from 'react';
import './App.css'
import HeaderBar from './HeaderBar/HeaderBar'
import About from './About/About'
import Work from './Work/Work'

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
      return (
          <div className="container-fluid m-0 p-0">
              <HeaderBar />
              <About />
              <Work />
          </div>
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