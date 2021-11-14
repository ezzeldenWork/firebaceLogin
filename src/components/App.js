import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {AuthProvider} from "../context/AuthContect";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SingUp from "./SingUp";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
    <div style={{backgroundColor: "#333", color: "#ddd"}}>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh"}}
      >
        <div className="w-100 mt-4 " style={{maxWidth: "40%"}}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute
                  exact
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <Route path="/signup" component={SingUp} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;
