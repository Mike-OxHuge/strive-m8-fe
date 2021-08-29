import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Accomodations from "./pages/Accomodations.jsx";
import Auth from "./pages/Auth.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link to="/">Home </Link>
          <Link to="/accomodations"> Accomodations</Link>
          <Link to="/sign-up">Sign Up </Link>
          <Link to="/log-in">Log in </Link>
        </div>
        <Route exact path="/">
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
        </Route>
        <Route exact path="/accomodations">
          <Accomodations />
        </Route>
        <Route exact path="/sign-up" component={Auth} />
        <Route exact path="/log-in" component={Auth} />
      </div>
    </Router>
  );
}

export default App;
