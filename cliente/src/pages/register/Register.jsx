import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
    <span className="registerTitle">Registrarse</span>
      <form action="" className="registerForm">

        <label htmlFor="">Usuario</label>   
        <input type="text" className="registerInput" placeholder="Nombre de Usuario..." />

        <label htmlFor="">Email</label>   
        <input type="email" className="registerInput" placeholder="Ingresa tu email" />       
        
        <label htmlFor="">Contraseña</label>
        <input type="password" className="registerInput" placeholder=""></input>

        <label htmlFor="">Repita Contraseña</label>
        <input type="password" className="registerInput" placeholder=""></input>

        <button className="registerButton">REGISTRAR</button>
        
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">INGRESAR</Link>
      </button>
    
    
    </div>
  )
}
