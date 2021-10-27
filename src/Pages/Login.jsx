import { useState } from "react";
import FormLogin from "../Components/FormLogin";
import "./style.css"
import {useAuth} from "../Providers/Auth"

function Login (){
    const {singIn} = useAuth();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin = () =>{
        const userData = {email,password}
        singIn(userData);
    }
    return(
        <div className="Container">
            <FormLogin callback={handleLogin} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        </div>
    )
}
export default Login;