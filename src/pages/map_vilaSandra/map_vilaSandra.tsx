import React from "react";
import { Menu } from "../../components/menu/menu";
import { Rodape } from "../../components/rodape/rodape";

import './map_vilaSandra.css';

import map_icon from '../../images/contato/map_icon.png';
import { Link } from "react-router-dom";

const MapaVilaSandra: React.FC = () => {
    return(
        <div className="container">
            <div className="menu">
                <Menu/>
            </div>
            <div className="content_contato_vilaSandra">
                <div className="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.27449147868487!2d-49.34306119863397!3d-25.465132222631862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x17c2ae70ca59ff9f!2sIgreja%20evang%C3%A9lica%20assembleia%20de%20Deus%20minist%C3%A9rio%20Israelita!5e0!3m2!1spt-BR!2sbr!4v1679086186866!5m2!1spt-BR!2sbr" 
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

export default MapaVilaSandra;