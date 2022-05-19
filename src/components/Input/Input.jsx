import '../../components/Input/Input.css'

function Input(props) {


    return (
        <>
            <input className="input-style col-12 p-3 fs-6" type={props.type} aria-label={props.ariaLabel} id={props.id} value={props.value} valueautocomplete="off" disabled={props.disabled} style={props.style} />
        </>
    )
}

export default Input