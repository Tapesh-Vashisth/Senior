import '../styles/button.css'

function CreateButton (props) {

    return (
        <button onClick={() => props.modal()} className="btn-create">{`${props.icon} ${props.name}`}</button>
    )
}

export default CreateButton;