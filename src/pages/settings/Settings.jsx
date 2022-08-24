import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Actualiza tu cuenta</span>
                <span className="settingsDeleteTitle">Elimina tu cuenta</span>
            </div>
            <form action="" className="settingsForm">
                <label>Imagen de Perfil</label>
                <div className="settingsPP">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fondo_Dem%C3%B3crito_y_Her%C3%A1clito.jpg/800px-Fondo_Dem%C3%B3crito_y_Her%C3%A1clito.jpg?20201117112700" 
                    alt=""                         
                    />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display:"none" }}/>
                </div>
                <label>Nombre de Usuario</label>
                <input type="email" placeholder="Email"/>
                <label>Correo Electronico</label>
                <input type="password"/>
                <label>Contraseña</label>
                <button className="settingsSubmit">Enviar</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
