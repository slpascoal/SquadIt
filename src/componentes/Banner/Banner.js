import './Banner.css'

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <div className='imagem'>
                <img src="/imagens/Logo SquadIt.png" alt="O banner principal da página do Organo"/>
            </div>
            <div className='descricaoHeader'>
                <h1>Organize sua equipe dev</h1>
            </div>
        </header>
    )
}