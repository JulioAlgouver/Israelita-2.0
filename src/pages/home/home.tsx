import React from "react";
import { Link } from "react-router-dom";
import Carrossel from "../../components/carrossel/carrossel";

//COMPONENTS
import { Menu } from "../../components/menu/menu";
import { Rodape } from "../../components/rodape/rodape";
import backgroundDate from '../../images/home/Background_day.png';

import './home.css';

const Home: React.FC = () => {
    return(
        <div className="container">

                <Menu/>

            <div className="carrossel">
                <Carrossel/>
            </div>

            <div className="content">
                <div className="devocional">
                    <strong>DEVOCIONAL DIÁRIO</strong>
                    <div className="versiculo">"A vossa palavra seja sempre agradável, temperada com sal, para saberdes como deveis responder a cada um."</div>
                    <div className="referencia">Colossenses 4:6</div>
                    <div className="texto_base">Aqui aprendemos que é preciso articular bem as palavras, usar o vocabulário correto, o tom de voz adequado, para saber falar a cada tipo de pessoa. É importante sempre ter uma atitude positiva e ter uma conversa agradável. Sal em excesso fica salgado, e pouco sal também não é bom, por isso devemos ter equilibrio e moderação.</div>
                </div>

                <div className="eventos">
                    <strong>PRÓXIMOS EVENTOS</strong>
                    <div className="desc_evento">
                        <div className="data">
                            <div className="day">DIA</div>
                            <div className="month">MES</div>
                        </div>                      
                        <div className="descricao">NOME DO EVENTO</div>
                        <div className="dia">Dia</div>
                        <div className="local"><b>Local:</b></div>
                    </div>
                    
                    <div className="desc_evento">
                        <div className="data">
                            <div className="day">DIA</div>
                            <div className="month">MES</div>
                        </div>                      
                        <div className="descricao">NOME DO EVENTO</div>
                        <div className="dia">Dia</div>
                        <div className="local"><b>Local:</b></div>
                    </div>

                    <div className="link_agenda">
                        <span><center>Clique <Link to ='/agenda' style={{textDecoration:'none'}}>aqui</Link> e veja nossa programação completa</center></span>
                    </div>
                </div>

                <div className="midias">
                    <strong>MÍDIAS</strong>
                    <a href="https://bo.net.br/" target={"_blank"}>
                        <button className="biblia" ></button>
                    </a>
                    <div className="legenda_biblia">Leia a <br/> Bíblia</div>

                    <a href="https://www.harpacrista.org/" target={"_blank"}>
                        <button  className="harpa"></button>
                    </a>
                    <div className="legenda_harpa">Harpa <br/> Cristã</div>
                </div>

                <div className="button_ofertas">
                    <Link to="/oferta">
                        <button>
                            <span><center>Seja um patrocinador<br/>
                            da obra de Deus!</center></span>
                        </button>
                    </Link>
                </div>
            </div>

            <footer>
                <Rodape/>
            </footer>
        </div>
    )
}

export default Home;