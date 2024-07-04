import './Label.css'

const Label = (props) => {
    return(
        <div className='Label'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default Label