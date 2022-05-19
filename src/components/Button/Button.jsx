import "./Button.css";

function Button(props) {
  
  return (
    <>
      {/* Estava justify-content-end */}
      <div className="d-flex justify-content-center me-md-0"> 
        <button onClick={props.onClick} className="btn btn-principal py-1 fw-normal text-decoration-none col-12" type="submit">
          <a href={props.link} className="link-referencia a">{props.name}</a>
        </button>

      </div>
    </>
  );
}

export default Button;
