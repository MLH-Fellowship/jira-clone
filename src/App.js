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
      userId: 1,
      // issues: data,
      users: users,
      project_id: 1,
      issues: [],
      // users: []
    };
  }

  componentDidMount() {
    if (!this.state.users) {
      fetch("/users")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              users: result,
            });
          },
          (error) => {
            // how to handel this error?
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }

    // fetch("/tickets/1")
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     this.setState({
    //       issues: result
    //     });
    //   },
    //   (error) => {
    //     // how to handel this error?
    //     this.setState({
    //       isLoaded: true,
    //       error
    //     });
    //   }
    // )
  }

  signIn = (user) => {
    window.alert(`${user.email} is signed in!`);
    this.setState({ isSignedIn: true, userId: 1 });

    fetch("/users/1")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            user: result,
            userId: result.id,
          });
          return <Redirect to="/" />;
        },
        (error) => {
          // how to handel this error?
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };
  signOut = () => {
    this.setState({ isSignedIn: false, user: {}, userId: 0 });
  };
  signUp = (user) => {
    window.alert(`Welcome ${user.firstName}`);
    this.signIn();
  };
  createIssue = (issue) => {
    //post issue
    window.alert(`issue created`);
  };
  updateIssue = (issue) => {
    // put issue
    console.log("updat issue", issue);
    window.alert(`issue was updated`);
  };
  addComment = (comment) => {
    console.log(comment);
    let newComment = {
      user_id: comment.user,
      project_id: 1,
      ticket_id: comment.issue,
      content: comment.content,
      created_at: comment.date,
    };
    console.log(newComment);
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          // how to handel this error?
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    window.alert(`comment added`);
  };
  deleteIssue = (issue) => {
    // delete issue
    window.alert(`issue was deleted`);
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
                  deleteIssue={this.deleteIssue}
                  addComment={this.addComment}
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
                  userId={this.state.userId}
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
