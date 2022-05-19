import './SupportButton.css';

function SupportButton(props) {
    
    return (
        <>      
            {/*estava justify-content-end*/}
            <div className="d-flex justify-content-center me-md-0">
                <button className="btn btn-secundario fw-normal text-decoration-none col-12" type="submit">
                    <a href={props.link} className="link-referencia a">{props.name}</a>
                </button>
            </div>
        </>
    );
}

export default SupportButton;