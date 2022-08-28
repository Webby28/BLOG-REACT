import './sidebar.css'
import image from '../images/foto.jpg';

export default function Sidebar() {
    return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ACERCA DE MI</span>
            <img src={image} 
            className="foto"
            alt="" />
            <p>Licenciado en Analisis de Sistemas</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIAS</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Vida</li>
                <li className="sidebarListItem">Referencia</li>
                <li className="sidebarListItem">Estudios</li>
                <li className="sidebarListItem">Experiencia</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">SIGUEME</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
            </div>
        </div>
    </div>
    )
}
