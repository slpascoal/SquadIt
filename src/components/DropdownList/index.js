import './DropdownList.css'

const DropdownList = (props) => {
    
    return (
        <div className='dropdownlist'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList