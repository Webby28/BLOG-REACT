import "./header.css"

export default function Header() {
    return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>            
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
        src="https://www.publicdomainpictures.net/pictures/70000/velka/natural-green-background-1389459704YWX.jpg" alt="" 
        className="headerImg" />

    </div>
    )
}
