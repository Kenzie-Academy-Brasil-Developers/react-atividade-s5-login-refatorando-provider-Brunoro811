import "./style.css"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
function FormLogin ({callback,email,setEmail,password,setPassword}){
    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo Obrigatório")
    })
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm({resolver: yupResolver(schema)})
    return(
        <div className="ContainerLogin">
              <h1>Login</h1>
                <form onSubmit={handleSubmit(callback)}>
            <div className="Login-Row">
                <input {...register("email")} className="Input Shadow" placeholder="Digite seu email..." value={email} onChange={(e)=>setEmail(e.target.value)} type="text" />
                {errors.email && 
              <span className="Message">{errors.email?.message}</span>
              }
            </div>
            <div className="Login-Row">
                <input {...register("password")} className="Input Shadow" placeholder="Digite sua senha..." value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
              {errors.password && 
              <span className="Message">{errors.email?.message}</span>
              }
            </div>
            <div className="Login-Row">
                <button className="Button Primary Shadow" type="submit">Entrar</button>
            </div>
                </form>

        </div>
    )
}
export default FormLogin;