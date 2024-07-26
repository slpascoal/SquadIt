import './Rodape.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const Rodape = () => {

    const Copiar = () =>{
        navigator.clipboard.writeText('slpascoal01@gmail.com');
    }

    return (
        <header className="rodape">
            <section className='redesSociais'>
                <ul>
                    <li><a href='https://portfolio-silas-psi.vercel.app/' target='_blank' rel="noreferrer"><FaGlobe /></a></li>
                    <li><a href='https://github.com/slpascoal' target='_blank' rel="noreferrer"><FaGithub /></a></li>
                    <li><a href='https://www.instagram.com/msi.lp/' target='_blank' rel="noreferrer"><FaInstagram /></a></li>
                </ul>
            </section>
            <section className='imagem'>
                <img src="/imagens/Logo SquadIt.png" alt="O banner principal da página do Organo"/>
            </section>
            <section className='descricao'>
                <div className='descCentro'>
                    <h4>Desenvolvido por Silas L. Pascoal</h4>
                    <p>Me envie um email: <IoMdMail className='copymail' onClick={Copiar}/>
                    </p>
                </div>
            </section>
        </header>
    )
}

export default Rodape