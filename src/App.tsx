import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from "./views/Admin";
import Login from "./views/Login/Login";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
    return (
        <div>
            <Router>
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Admin}></Route>
            </Router>
        </div>
    );
};

export default App;
