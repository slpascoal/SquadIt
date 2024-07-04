import './LabelFile.css'

const LabelFile = (props) => {
    return(
        <div className='LabelFile'>
            <label>{props.label}</label>
            <input type="file" placeholder={props.placeholder}/>
        </div>
    )
}

export default LabelFile