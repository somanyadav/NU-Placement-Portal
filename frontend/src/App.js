import React from "react";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import Dashboard from "./Dashboard";
import Login from "./components/Login";
import "./App.css";
import Dashboard from "./components/Dashboard";
// import PrivateRoute from "./PrivateRoute";
// import ForgotPassword from "./ForgotPassword";
// import UpdateProfile from "./UpdateProfile";
// import BasicTabs from './Company';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            {/* <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
            <Route path="/signup" component={Signup} />

            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
