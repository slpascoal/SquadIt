import './Label.css'

const Label = (props) => {
    return(
        <div className='Label'>
            <label>{props.label}</label>
            <input required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default Label