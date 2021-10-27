import "./style.css"
import {useAuth} from "../Providers/Auth"

function Dashboard (){
    const {logout} = useAuth();
    const handleLogout = () =>{
        console.log("entrou")
        logout();
    }
    return(
        <div className="Container">
            <img className="Logo" src={"https://veja.abril.com.br/wp-content/uploads/2019/12/1.jpg"} alt="Kenzie Logo" />
            <h1>Bem vindo</h1>
           <button className="Button Primary Shadow" onClick={handleLogout}>Sair</button>
        </div>
    )
}
export default Dashboard;