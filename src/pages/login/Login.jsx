import "./login.css"

export default function Login() {
  return (
    <div className="login">
    <span className="loginTitle">Iniciar</span>
      <form action="" className="loginForm">
        <label htmlFor="">Email</label>   
        <input type="email" className="loginInput" placeholder="Ingresa tu email" />       
        
        <label htmlFor="">Contraseña</label>
        <input type="password" className="loginInput" placeholder=""></input>
        <button className="loginButton">Iniciar Sesión</button>
        
      </form>
      <button className="loginRegisterButton">Registrarse</button>
    
    
    </div>
  )
}
