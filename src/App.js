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
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import CreateIssue from "./pages/CreateIssue";
import Navbar from "./components/layout/Navbar";
import { data, issueStatus, users } from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: true,
      userId: 0,
      issues: data,
      users: users,
    };
  }
  signIn = (user) => {
    window.alert(`${user.email} is signed in!`);
    //we will want to save the user id of the logged in user to the state
    this.setState({ isSignedIn: true, userId: 1 });
    return <Redirect to="/" />;
  };
  signOut = () => {
    this.setState({ isSignedIn: false });
  };
  signUp = (user) => {
    window.alert(`Welcome ${user.firstName}`);
    this.signIn();
  };
  createIssue = (issue) => {
    window.alert(`issue created`);
  };
  updateIssue = (issue) => {
    console.log("updat issue", issue);
    window.alert(`issue was updated`);
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
                <Home
                  issues={this.state.issues}
                  users={this.state.users}
                  updateIssue={this.updateIssue}
                  userId={this.state.userId}
                />
              ) : (
                <Redirect to={"/signin"} />
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
            <Route path="/create">
              {this.state.isSignedIn ? (
                <CreateIssue
                  createIssue={this.createIssue}
                  users={this.state.users}
                />
              ) : (
                <Redirect to={"/signin"} />
              )}
            </Route>
          </Switch>
        </Router>
      </DndProvider>
    );
  }
}

export default App;
