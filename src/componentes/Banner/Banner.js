import './Banner.css'

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <section className='imagem'>
                <img src="/imagens/Logo SquadIt.png" alt="O banner principal da página do Organo"/>
            </section>
            <section className='descricaoHeader'>
                <h1>Organize sua equipe dev</h1>
            </section>
        </header>
    )
}