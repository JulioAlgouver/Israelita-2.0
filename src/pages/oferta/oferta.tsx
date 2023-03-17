import React from "react";
import { Menu } from "../../components/menu/menu";
import { Rodape } from "../../components/rodape/rodape";

import pix from '../../images/oferta/pix.png';

import './oferta.css';

const Oferta: React.FC = () => {
    return(
        <div className="container">
            <div className="menu">
                <Menu/>
            </div>
            <div className="content_oferta">
                <strong>Deixe sua oferta de modo rápido e fácil por meio de nossa chave PIX:</strong>
                <div className="pix">
                    <img src={pix}/>
                    <br/>
                    <strong>CNPJ</strong>
                    <br/>
                    <span>21.488.748/0001-55</span>
                </div>
                <div className="versiculo">
                    <span>
                    Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.
                    <br/><br/>2 Coríntios 9:7
                    </span>
                </div>
            </div>
            <footer className="footer">
                <Rodape/>
            </footer>
        </div>
    )
}

export default Oferta;