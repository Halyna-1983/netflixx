import React from "react";

import MainScreen from "./MainScreen/MainScreen.js";
import Login from "./Login/Login.js";
import Profile from "./Profile/Profile.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export const App = () => {
  // const user = null;
  const user = "Halyna";

  return (
    <>
      <Router>
        {!user ? (
          <Login />
        ) : (
            <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
              
            <Route path="/">
              <MainScreen />
            </Route>
          </Switch>)}
        
      
      </Router>
    </>
  );
};
