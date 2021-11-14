import {Container} from "react-bootstrap";
import {AuthProvider} from "../context/AuthContect";
import SingUp from "./SingUp";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Container
      className="d-flex align-item-center justify-content-center"
      style={{minHeight: "100vh"}}
    >
      <div className="w-100 mt-4 " style={{maxWidth: "40%"}}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/signup" component={Signup} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
