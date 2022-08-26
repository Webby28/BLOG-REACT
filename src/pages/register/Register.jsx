import "./register.css"

export default function Register() {
  return (
    <div className="register">
    <span className="registerTitle">Iniciar</span>
      <form action="" className="registerForm">
        <label htmlFor="">Email</label>   
        <input type="email" className="registerInput" placeholder="Ingresa tu email" />       
        
        <label htmlFor="">Contraseña</label>
        <input type="password" className="registerInput" placeholder=""></input>
        <button className="registerButton">Iniciar Sesión</button>
        
      </form>
      <button className="loginRegisterButton">Registrarse</button>
    
    
    </div>
  )
}
