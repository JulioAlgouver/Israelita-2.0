import React from "react";
import { Link } from "react-router-dom";

import './rodape.css';

//IMAGENS
import background from '../../images/rodape/background.png';
import facebook from '../../images/rodape/facebook.png';
import instagram from '../../images/rodape/instagram.png';
import whatsApp from '../../images/rodape/whatsApp.png';

export const Rodape: React.FC = () => {
    return(
        <div className="container_footer">
            <div className="content_footer">
                <div className="enderecos">
                    <strong>Venha ter um encontro com o Pai</strong>
                    <p/>
                    <span><b>Templo Sede</b></span>
                    <br/><span>Rua Franciso Raksa Junior 167 - Costeira - Araucária/PR</span>
                    <p/><br/>
                    <span><b>Congregação Vila Sandra</b></span>
                    <br/><span>Rua Cidade de Pomerode, 491 - CIC - Curitiba/PR</span>
                    <p/><br/>
                    <span><b>Congregação California</b></span>
                    <br/><span>Rua Bico-de-Lacre, 1003 - Capela Velha - Araucária/PR</span>
                    <p/><p/>
                </div>
                <div className="cultos">
                    <strong>Horário de Cultos</strong>
                    <p/>
                    <Link to='/cultos' style={{ color: 'white'}}>
                        <span>Veja aqui a grade</span><br/>
                        <span>completa de</span><br/>
                        <span>cultos</span>
                    </Link>
                </div>
                <div className="whatsApp">
                    <a href="https://wa.me/5541999632254" target={"_blank"}><img src={whatsApp}/></a>
                </div>

                <div className="redes_sociais">
                    <strong>Redes Sociais</strong>
                    <br/>
                    <a href="https://www.facebook.com/profile.php?id=100077326548458" target={"_blank"}><img src={facebook}/></a>
                    <a href="https://www.instagram.com/adisraelitasede/" target={"_blank"}><img src={instagram}/></a>
                </div>
            </div>
        </div>
    )
}