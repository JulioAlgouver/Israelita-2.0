import React from "react";
import { Menu } from "../../components/menu/menu";
import { Rodape } from "../../components/rodape/rodape";

import './map_california.css';

import map_icon from '../../images/contato/map_icon.png';
import { Link } from "react-router-dom";

const MapaCalifornia: React.FC = () => {
    return(
        <div className="container">
            <div className="menu">
                <Menu/>
            </div>
            <div className="content_contato_california">
                <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.538575575334!2d-49.382792407590976!3d-25.540536086529443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd02b937c0af25%3A0x9c809f2a24059c12!2sR.%20Bico-de-Lacre%2C%201003%20-%20Capela%20Velha%2C%20Arauc%C3%A1ria%20-%20PR%2C%2083706-450!5e0!3m2!1spt-BR!2sbr!4v1679086411437!5m2!1spt-BR!2sbr" 
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

export default MapaCalifornia;