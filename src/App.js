import "./App.css";
import Login from "../src/Pages/Login/login";
import MyEnhancedRegister from "../src/Pages/Register/register";
import Dashboard from "../src/Pages/Dashboard/dashboard";
import AddressForm from "../src/Pages/AddressForm/addressForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../src/Components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register/" exact component={MyEnhancedRegister}></Route>
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
  );
}
export default App;
