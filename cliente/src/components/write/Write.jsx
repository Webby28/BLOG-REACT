import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fondo_Dem%C3%B3crito_y_Her%C3%A1clito.jpg/800px-Fondo_Dem%C3%B3crito_y_Her%C3%A1clito.jpg?20201117112700" alt="" className="writeImg" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Cuenta tu historia.." 
          type="text" 
          className="writeInput writeText">            
          </textarea>
        </div>
        <button className="writeSubmit">Publicar</button>
      </form>
    </div>
  )
}
