import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
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