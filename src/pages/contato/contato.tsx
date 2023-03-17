import React from "react";
import { Menu } from "../../components/menu/menu";
import { Rodape } from "../../components/rodape/rodape";

import './contato.css';

import map_icon from '../../images/contato/map_icon.png';

const Contato: React.FC = () => {
    return(
        <div className="container">
            <div className="menu">
                <Menu/>
            </div>
            <div className="content_contato">
                <div className="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d145159.23516465892!2d-49.39556718165078!3d-25.524822036112095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1679076301416!5m2!1spt-BR!2sbr" 
                            width="600" 
                            height="450" 
                            loading="lazy">
                    </iframe>
                </div>
                <div className="lista_enderecos">
                    <div className="titulo">
                        <img src={map_icon}/>
                        <span>Conheça nossos<br/>endereços:</span>
                    </div>
                    <div className="grid_enderecos">
                        <div className="sede">
                            <button>
                                <strong>Templo Sede</strong><br/>
                                <span>Rua Francisco Raksa Junior, 167</span><br/>
                                <span>Costeira - Araucária - PR</span><br/>
                                <span>CEP: 83709-170</span><br/>
                            </button>
                        </div>

                        <div className="vilaSandra">
                            <button>
                                <strong>Congregação Vila Sandra</strong><br/>
                                <span>R. Cidade de Pomerode, 491</span><br/>
                                <span>CIC - Curitiba - PR</span><br/>
                                <span>CEP: 81230-130</span><br/>
                            </button>
                        </div>

                        <div className="california">
                            <button>
                                <strong>Congregação Califórnia</strong><br/>
                                <span>R. Bico-de-Lacre, 1003</span><br/>
                                <span>Capela Velha - Araucária - PR</span><br/>
                                <span>CEP: 83706-450</span><br/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_contato">
                <Rodape/>
            </div>

        </div>
    )
}

export default Contato;