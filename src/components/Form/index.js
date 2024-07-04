import './Form.css'
import Label from '../Label'
import LabelFile from '../LabelFile'
import DropdownList from '../DropdownList'
import Button from '../Button'

const Form = () => {
    
    const times = [
        'Back End',
        'Front End',
        'Data Science',
        'Social Media',
        'Mobile',
        'UX e Design'
    ]

    const aoSalvar = (event) => {
        event.preventDefault()
    }

    return (
        <section className='Form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do colaborador</h2>
                <Label required="True" label="Nome" placeholder="Digite o nome do colaborador"/>
                <Label required="True" label="Cargo" placeholder="Digite o cargo do colaborador"/>
                <LabelFile required="False" label="Imagem" placeholder="Upload"/>
                <DropdownList required="True" label="Setor" itens={times}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section> 
    )
}

export default Form