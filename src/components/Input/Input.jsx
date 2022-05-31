import '../../components/Input/Input.css'

function Input(props) {


    return (
        <>
            <input className="input-style col-12 p-3 fs-6" type={props.type} aria-label={props.ariaLabel} id={props.id} valueautocomplete="off" value={props.value} onChange={props.onChange} maxLength={props.maxlength} mask={props.mask}/>
        </>
    )
}

export default Input