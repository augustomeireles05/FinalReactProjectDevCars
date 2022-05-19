import '../../components/Input/Label.css'

function Label(props) {


    return (
        <>
            <label className="label font-recuperarsenha fs-6" htmlFor={props.for}>{props.label}</label>
        </>
    )
}

export default Label