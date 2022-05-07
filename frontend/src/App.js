import React from "react";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Jdform from "./components/Jdform";
import BasicTabs from "./components/Company";
import PrivateRoute from "./components/PrivateRoute";
import JobDetails from "./components/JobDetails";
// import ForgotPassword from "./ForgotPassword";
// import UpdateProfile from "./UpdateProfile";
// import BasicTabs from './Company';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />

            {/* Define Private Routes here */}
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/details" component={JobDetails} />
            <PrivateRoute path="/form" component={Jdform} />
            <PrivateRoute path="/invite" component={BasicTabs} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
