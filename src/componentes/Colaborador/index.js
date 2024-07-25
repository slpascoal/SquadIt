import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corPrimaria }) => {
    const fundoCard = {
        backgroundImage: `url(${imagem})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        boxShadow: `10px 10px 0px ${corPrimaria}`
    }
    
    return (
        <div className='card' style={fundoCard}>
            <div className='cardInterno'>
                <div className='conteudoCard'>
                    <h4>{nome}</h4>
                    <h5>{cargo}</h5>
                </div>    
            </div>
        </div>
    )
}

export default Colaborador