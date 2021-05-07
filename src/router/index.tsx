import RouterMain from "./main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export interface RouterConfigProps {}

const RouterConfig: React.SFC<RouterConfigProps> = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={RouterMain}></Route>
            </Switch>
        </Router>
    );
};

export default RouterConfig;
