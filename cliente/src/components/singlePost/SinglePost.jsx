import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fondo_Dem%C3%B3crito_y_Her%C3%A1clito.jpg/800px-Fondo_Dem%C3%B3crito_y_Her%C3%A1clito.jpg?20201117112700" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet, consect
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>        
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Autor: <b>Williams Baez</b></span>
          <span className="singlePostDate">Hace 1 hora atrás</span>
        </div>
        
        <p className="singlePostDesc">
          Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
          Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
          Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
        </p>
      </div>
    
    </div>
  )
}
