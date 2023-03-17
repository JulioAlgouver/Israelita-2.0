import React from "react";
import { Menu } from "../../components/menu/menu";
import { Rodape } from "../../components/rodape/rodape";

import './map_sede.css';

import map_icon from '../../images/contato/map_icon.png';
import { Link } from "react-router-dom";

const MapaSede: React.FC = () => {
    return(
        <div className="container">
            <div className="menu">
                <Menu/>
            </div>
            <div className="content_contato_sede">
                <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1272.101518575826!2d-49.37698391852181!3d-25.603373014667664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd0185d4afe0cd%3A0x4744455449c473fc!2sIgreja%20Evang%C3%A9lica%20Assembl%C3%A9ia%20de%20Deus%20-%20Minist%C3%A9rio%20Israelita!5e0!3m2!1spt-BR!2sbr!4v1679085848561!5m2!1spt-BR!2sbr"
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
                            <Link to ="/contato/temploSede">
                                <button>
                                    <strong>Templo Sede</strong><br/>
                                    <span>Rua Francisco Raksa Junior, 167</span><br/>
                                    <span>Costeira - Araucária - PR</span><br/>
                                    <span>CEP: 83709-170</span><br/>
                                </button>
                            </Link>
                        </div>

                        <div className="vilaSandra">
                            <Link to ="/contato/vilaSandra">
                                <button>
                                    <strong>Congregação Vila Sandra</strong><br/>
                                    <span>R. Cidade de Pomerode, 491</span><br/>
                                    <span>CIC - Curitiba - PR</span><br/>
                                    <span>CEP: 81230-130</span><br/>
                                </button>
                            </Link>
                        </div>

                        <div className="california">
                            <Link to="/contato/california">
                                <button>
                                    <strong>Congregação Califórnia</strong><br/>
                                    <span>R. Bico-de-Lacre, 1003</span><br/>
                                    <span>Capela Velha - Araucária - PR</span><br/>
                                    <span>CEP: 83706-450</span><br/>
                                </button>
                            </Link>
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

export default MapaSede;