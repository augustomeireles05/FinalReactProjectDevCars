import './MainTittle.css';

function MainTittle(props) {
    return (
      <>
        <div className="container titulo-pagina">
          <div className="row col-lg-5 col-xl-12">
            <div className="col-12 justify-content-flex-start">
              <h1 className="h1">{props.tittle}</h1>
            </div>
          </div>
        </div>
      </>
    );
}

export default MainTittle;