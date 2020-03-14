import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProfileContainer from "./containers/ProfileContainer";
import LoginContainer from "./containers/LoginContainer";
import NewsContainer from "./containers/NewsContainer";
import HomeContainer from "./containers/HomeContainer";
import PrivateRoute from "./containers/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/news" component={NewsContainer} />
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
