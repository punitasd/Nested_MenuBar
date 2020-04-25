import React from "react";
import AppBar from "./Components/AppBar.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Signin from "./Components/Signin.js";
import authContext from "./context.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      toggleIsAuth: this.toggleIsAuth
    };
  }

  toggleIsAuth = () => {
    this.setState({ isAuth: !this.state.isAuth });
  };

  render() {
    return (
      <authContext.Provider value={this.state}>
        <div className="App">
          <Router>
            <AppBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/signin" component={Signin} />
            </Switch>
          </Router>
        </div>
      </authContext.Provider>
    );
  }
}
