import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from "react-router-dom";
import './App.css'
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
             <BrowserRouter>
                <div className="App">

                  <nav>
                    <NavLink to="/users" data-testid="user-btn">Users</NavLink> |&nbsp;
                    <NavLink to="/courses">Courses</NavLink> |&nbsp;
                    <NavLink to="/all-courses">All Courses</NavLink>
                  </nav>

                  <Switch>
                    <Route path="/users" exact component={Users}/>
                    <Route path="/courses" component={Courses}/>
                    <Redirect from="/all-courses" to="/courses"/>
                    <Route render={()=><h1>Page not found</h1>}/>
                    {/*<Router component={ProblemPage}/>*/}
                  </Switch>
                </div>
              </BrowserRouter>
    );
  }
}

export default App;
