import React from "react";
import { Link } from "react-router-dom";

import './menu.css';

import logoMinisterio from '../../images/menu/logoMinisterio.png';
import nomeIgreja from '../../images/menu/nomeIgreja.png';
import Sobre from "../../pages/sobre/sobre";

export const Menu: React.FC = () => {
    return(
        <div className="container_menu">
            <div className="content_menu">
                <div className="logo">
                    <img src={logoMinisterio}/>
                    <img src={nomeIgreja} className='nomeIgreja'/>
                </div>

                <div className="menu">
                    <ul>
                        <li>
                            <Link to='/' className='link'><button><span>INÍCIO</span></button></Link>
                        </li>

                        <li>
                            <Link to='/sobre' className='link'><button><span>SOBRE</span></button></Link><br/>
                        </li>

                        <li>
                            <Link to='/diretoria' className='link'><button><span>DIRETORIA</span></button></Link>  
                        </li>

                        <li>
                            <Link to='/cultos' className='link'><button><span>NOSSOS CULTOS</span></button></Link>
                        </li>

                        <li>
                            <Link to='/agenda' className='link'><button><span>AGENDA 2023</span></button></Link>
                        </li>

                        <li>
                            <Link to='/oferta' className='link'><button><span>OFERTA</span></button></Link>
                        </li>

                        <li>
                            <Link to='/contato' className='link'><button><span>CONTATO</span></button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}