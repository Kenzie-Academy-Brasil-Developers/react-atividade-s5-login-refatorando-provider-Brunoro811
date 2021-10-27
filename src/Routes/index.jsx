import {Switch,Route} from "react-router-dom"
import {Redirect} from "react-router"
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import {useAuth} from "../Providers/Auth"
function Routes (){ 
    const {authToken} = useAuth()
    return(
        <Switch>
            <Route exact path="/" >
            {!!authToken ? <Redirect to="/dashboard" /> : "" }
                <Login/>
            </Route>
            <Route path="/dashboard" >
            {!authToken ? <Redirect to="/" /> : "" }
                <Dashboard/>
            </Route>
        </Switch>
    )
}
export default Routes;