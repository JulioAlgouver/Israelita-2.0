import React from 'react';
import { Menu } from '../../components/menu/menu';
import { Rodape } from '../../components/rodape/rodape';

import './diretoria.css';

import fotoPresidente from '../../images/diretoria/presidente.png';
import fotoVice from '../../images/diretoria/vice.png';
import firstsecret from '../../images/diretoria/1secretario.png';
import secondsecret from '../../images/diretoria/2secretario.png';
import firsttesou from '../../images/diretoria/1tesoureira.png';
import secondtesou from '../../images/diretoria/2tesoureira.png';

const Diretoria: React.FC = () => {
    return(
        <div>
            <div className='container'>
                <div className='menu'>
                    <Menu/>
                </div>
                <div className='content_diretoria'>
                    <div className='titulo'>
                        <strong>Diretoria Ministerial</strong>
                    </div>
                    <div className='gallery'>
                        <div className='first_line'>
                            <div className='presidentes'>
                                <span>Presidentes</span><br/>
                                <img src={fotoPresidente}/><br/>
                                <strong>Pr. Gediel Vaz<br/>Pra. Miriã Vaz</strong>
                            </div>

                            <div className='vice-presidente'>
                                <span>Vice-Presidente</span><br/>
                                <img src={fotoVice}/><br/>
                                <strong>Pb. Elson Lourenço<br/>da Silva</strong>
                            </div>
                        </div>

                        <div className='second_line'>
                            <div className='1-secretario'>
                                <img src={firstsecret}/><br/>
                                <span>1º Secretária</span><br/>
                                <strong>Diac. Gabrielle<br/>Brito Guedes</strong>
                            </div>

                            <div className='2-secretario'>
                                <img src={secondsecret}/><br/>
                                <span>2º Secretário</span><br/>
                                <strong>Diac. Matheus<br/>Guedes</strong>
                            </div>

                            <div className='1-tesoureiro'>
                                <img src={firsttesou}/><br/>
                                <span>1º Tesoureira</span><br/>
                                <strong>Ev. Rachel<br/>Melo</strong>
                            </div>

                            <div className='2-tesoureiro'>
                                <img src={secondtesou}/><br/>
                                <span>2º Secretário</span><br/>
                                <strong>Diac. Liane<br/>Missel</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_diretoria'>
                    <Rodape/>
                </div>
            </div>
        </div>
    )
}

export default Diretoria;