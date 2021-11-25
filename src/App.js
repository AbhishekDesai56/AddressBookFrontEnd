import "./App.css";
import Login from "../src/Pages/Login/login";
import Register from "../src/Pages/Register/register";
import Dashboard from "../src/Pages/Dashboard/dashboard";
import AddressForm from "./Pages/AddressForm/addEditAddressForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../src/Components/ProtectedRoute/ProtectedRoute";
import { ErrorBoundary } from "../src/Helpers/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/register/" exact component={Register}></Route>
            <ProtectedRoute
              path="/details/"
              exact
              component={AddressForm}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/details/:id"
              exact
              component={AddressForm}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/dashboard/"
              exact
              component={Dashboard}
            ></ProtectedRoute>
            <Route path="/" exact component={Login}></Route>
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  );
};
export default App;
