import React from "react";
import { Menu } from "../../components/menu/menu";
import { Rodape } from "../../components/rodape/rodape";

import './agenda.css';

//IMAGENS
import batismoeceia from '../../images/agenda/batismo.jpg';
import cruzadaEvangelistica from '../../images/agenda/cruzadaEvangelistica.jpg';
import aniversarioCalifornia from '../../images/agenda/aniversarioCalifornia.jpg';
import diadasmaes from '../../images/agenda/diadasmaes.jpg';
import ceiadoSenhor from '../../images/agenda/ceiadoSenhor.png';
import fraternalJovemAraquari from '../../images/agenda/fraternalJovemAraquari.png';
import encontroCasais from '../../images/agenda/EncontroDeCasais.jpg';
import acaoDeGracasPrPresidente from '../../images/agenda/acaoDeGracasPrPresidente.jpg';
import umadir from '../../images/agenda/umadir.jpg';
import cultoKids from '../../images/agenda/cultoKids.png';
import congressoRegionalSul from '../../images/agenda/congressoRegionalSul.jpg';
import cultoAcaodeGracasPraRita from '../../images/agenda/cultoAcaodeGracasPraRita.jpg';

const Agenda: React.FC = () =>{
    return(
        <div className="container">
            <div className="menu">
                <Menu/>
            </div>

            <div className="content_agenda">
                <div className="titulo">
                    <span>Agenda</span><strong>2023</strong>
                </div>

                <div className="agenda_geral">
                    <div className="mes">
                        <span>Abril</span>
                        <hr/>

                        <div className="descricao">
                            <div className="dia"><strong>08</strong></div>
                            <div className="nome_evento"><strong>1º BATISMO 2023 + CEIA DO SENHOR</strong></div><br/>
                            <div className="dia_semana"><span>Sábado às 19h30</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua Francisco Raksa Junior, 167 - Costeira - Araucária/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={batismoeceia}/>
                            </div>
                        </div>

                        <div className="descricao">
                            <div className="dia"><strong>15.16</strong></div>
                            <div className="nome_evento"><strong>CRUZADA EVANGELíSTICA</strong></div><br/>
                            <div className="dia_semana"><span>Sábado e Domingo às 19h</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua Francisco Raksa Junior, 167 - Costeira - Araucária/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={cruzadaEvangelistica}/>
                            </div>
                        </div>

                        <div className="descricao">
                            <div className="dia"><strong>22.23</strong></div>
                            <div className="nome_evento"><strong>1º ANIVERSÁRIO DA CONGREGAÇÃO CALIFÓRNIA</strong></div><br/>
                            <div className="dia_semana"><span>Sábado e Domingo às 19h</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua Bico-de-Lacre, 1003 - Capela Velha - Araucária/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={aniversarioCalifornia}/>
                            </div>
                        </div>

                        <span>Maio</span>
                        <hr/>

                        <div className="descricao">
                            <div className="dia"><strong>13</strong></div>
                            <div className="nome_evento"><strong>CULTO ESPECIAL COM AS MÃES + CEIA DO SENHOR</strong></div><br/>
                            <div className="dia_semana"><span>Sábado às 19h30</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua Francisco Raksa Junior, 167 - Costeira - Araucária/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={diadasmaes}/>
                            </div>
                        </div>

                        <span>Junho</span>
                        <hr/>

                        <div className="descricao">
                            <div className="dia"><strong>10</strong></div>
                            <div className="nome_evento"><strong>CEIA DO SENHOR</strong></div><br/>
                            <div className="dia_semana"><span>Sábado às 19h30</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua Francisco Raksa Junior, 167 - Costeira - Araucária/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={ceiadoSenhor}/>
                            </div>
                        </div>

                        <div className="descricao">
                            <div className="dia"><strong>17</strong></div>
                            <div className="nome_evento"><strong>FRATERNAL JOVENS - REGIONAL SUL (ARAQUARI -SC)</strong></div><br/>
                            <div className="dia_semana"><span>Sábado às 19h</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua José Rafael Reinert, 226 - Volta Redonda - Araquari/SC</span></div><br/>
                            <div className="foto_evento">
                                <img src={fraternalJovemAraquari}/>
                            </div>
                        </div>

                        <div className="descricao">
                            <div className="dia"><strong>24</strong></div>
                            <div className="nome_evento"><strong>ENCONTRO DE CASAIS + JANTAR</strong></div><br/>
                            <div className="dia_semana"><span>Sábado às 19h30</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua Francisco Raksa Junior, 167 - Costeira - Araucária/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={encontroCasais}/>
                            </div>
                        </div>

                        <span>Julho</span>
                        <hr/>

                        <div className="descricao">
                            <div className="dia"><strong>01</strong></div>
                            <div className="nome_evento"><strong>CULTO DE AÇÃO DE GRAÇAS PELO ANIVERSÁRIO DO PASTOR PRESIDENTE</strong></div><br/>
                            <div className="dia_semana"><span>Sábado às 19h30</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua Francisco Raksa Junior, 167 - Costeira - Araucária/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={acaoDeGracasPrPresidente}/>
                            </div>
                        </div>

                        <div className="descricao">
                            <div className="dia"><strong>08</strong></div>
                            <div className="nome_evento"><strong>CEIA DO SENHOR</strong></div><br/>
                            <div className="dia_semana"><span>Sábado às 19h30</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua Francisco Raksa Junior, 167 - Costeira - Araucária/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={ceiadoSenhor}/>
                            </div>
                        </div>

                        <div className="descricao">
                            <div className="dia"><strong>15.16</strong></div>
                            <div className="nome_evento"><strong>CONGRESSO GERAL UMADMIR</strong></div><br/>
                            <div className="dia_semana"><span>Sábado às 19h e Domingo às 08h30</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Av. Iguaçu, 631 - Pq. Industrial Cidade Nova - Rolândia/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={umadir}/>
                            </div>
                        </div>

                        <div className="descricao">
                            <div className="dia"><strong>29</strong></div>
                            <div className="nome_evento"><strong>CULTO COM DEPARTAMENTO INFANTIL</strong></div><br/>
                            <div className="dia_semana"><span>Sábado às 15h</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua Francisco Raksa Junior, 167 - Costeira - Araucária/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={cultoKids}/>
                            </div>
                        </div>

                        <span>Agosto</span>
                        <hr/>

                        <div className="descricao">
                            <div className="dia"><strong>12</strong></div>
                            <div className="nome_evento"><strong>CEIA DO SENHOR</strong></div><br/>
                            <div className="dia_semana"><span>Sábado às 19h30</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua Francisco Raksa Junior, 167 - Costeira - Araucária/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={ceiadoSenhor}/>
                            </div>
                        </div>

                        <div className="descricao">
                            <div className="dia"><strong><h5>18, 19<br/>e 20</h5></strong></div>
                            <div className="nome_evento"><strong>CONGRESSO GERAL - REGIONAL SUL</strong></div><br/>
                            <div className="dia_semana"><span>Sexta e Sábado às 19h e Domingo às 09h00</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua Francisco Raksa Junior, 167 - Costeira - Araucária/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={congressoRegionalSul}/>
                            </div>
                        </div>

                        <div className="descricao">
                            <div className="dia"><strong>26</strong></div>
                            <div className="nome_evento"><strong>CULTO DE AÇÃO DE GRAÇAS PELO ANIVERSÁRIO DA PRA. MARIA RITA</strong></div><br/>
                            <div className="dia_semana"><span>Sábado às 19h30</span></div><br/>
                            <div className="local_evento"><span><b>Local:</b>Rua Francisco Raksa Junior, 167 - Costeira - Araucária/PR</span></div><br/>
                            <div className="foto_evento">
                                <img src={cultoAcaodeGracasPraRita}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer_agenda">
                <Rodape/>
            </div>

        </div>
    )
}

export default Agenda;