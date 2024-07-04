import './Form.css'
import Label from '../Label'
import LabelFile from '../LabelFile'
import DropdownList from '../DropdownList'

const Form = () => {
    
    const times = [
        'Back End',
        'Front End',
        'Data Science',
        'Social Media',
        'Mobile',
        'UX e Design'
    ]

    return (
        <section className='Form'>
            <form>
                <h2>Preencha os dados do colaborador</h2>
                <Label label="Nome" placeholder="Digite o nome do colaborador"/>
                <Label label="Cargo" placeholder="Digite o cargo do colaborador"/>
                <LabelFile label="Imagem" placeholder="Upload"/>
                <DropdownList label="Setor" itens={times}/>
            </form>
        </section> 
    )
}

export default Form