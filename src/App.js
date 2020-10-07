import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SignInPage from "./pages/SignIn";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
    };
  }
  signIn = (user) => {
    window.alert(`${user.email} is signed in!`);
    this.setState({ isSignedIn: true });
    return <Redirect to="/" />;
  };
  signOut = () => {
    this.setState({ isSignedIn: false });
  };
  signUp = (user) => {
    window.alert(`Welcome ${user.firstName}`);
    this.signIn();
  };

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Navbar
            isSignedIn={this.state.isSignedIn}
            signIn={this.signIn}
            signOut={this.signOut}
            signUp={this.signUp}
          />
          <Switch>
            <Route path="/" exact>
              {this.state.isSignedIn ? (
                <Homepage />
              ) : (
                <SignInPage signIn={this.signIn} />
              )}
            </Route>
            <Route path="/signup">
              {this.state.isSignedIn ? (
                <Redirect to={"/"} />
              ) : (
                <SignUp signUp={this.signIn} />
              )}
            </Route>
            <Route path="/signin">
              {this.state.isSignedIn ? (
                <Redirect to={"/"} />
              ) : (
                <SignInPage signIn={this.signIn} />
              )}
            </Route>
          </Switch>
        </Router>
      </DndProvider>
    );
  }
}

export default App;
