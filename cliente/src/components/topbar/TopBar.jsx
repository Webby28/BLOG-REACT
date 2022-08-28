import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
    const user = false;
    return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                <Link className="link" to="/"> PRINCIPAL</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/write"> ESCRIBIR</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/contact"> CONTACTO</Link>
                </li>
                <li className="topListItem">
                    {user && "SALIR"}
                <Link className="link" to="/"></Link>
                </li>
            </ul>
            
        </div>
        <div className="topRight">
            {
                user ? (
                    <img 
            className="topImg"
            src="https://c.pxhere.com/images/7d/21/ed588c6f9dd84ff1cf8f96100885-1450843.jpg!d" alt="" />

                ) : (
                <ul className="topList">
                    <li className="topListItem">   
                    <Link className="link" to="/login"> INGRESAR</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/register"> REGISTRO</Link>
                    </li>
                </ul>
                )}
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
    )
}
