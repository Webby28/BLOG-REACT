import './topbar.css'

export default function TopBar() {
    return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="toplist">Pagina Principal</li>
                <li className="toplist">Acerca de</li>
                <li className="toplist">Contacto</li>
                <li className="toplist">Cerrar Sesión</li>
            </ul>
            
        </div>
        <div className="topRight">
            <img 
            className="topImg"
            src="https://c.pxhere.com/images/7d/21/ed588c6f9dd84ff1cf8f96100885-1450843.jpg!d" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
    )
}
