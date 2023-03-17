import React from "react";
import { Menu } from "../../components/menu/menu";
import { Rodape } from "../../components/rodape/rodape";

import './sobre.css';

import igreja from '../../images/sobre/igreja.png';
import fundadores from '../../images/sobre/fundadores.png';

const Sobre: React.FC = () => {
    return(
        <div className="container">
            <div className="menu">
                <Menu/>
            </div>
            <div className="content_sobre">
                <div className="titulo">
                    <span>Sobre a</span><strong>AD Israelita</strong>
                </div>
                <div className='img_igreja'>
                    <img src={igreja}/>
                </div>
                <div className="relato">
                    <div className="part-I">
                        <span>
                        Em 03 de Outubro de 1947, nasce Genes Loureiro de Melo, em Faxinal-PR, filho de uma família cristã que residiam em Faxinal, <br/>
                        foi batizado em meados de Julho de 1959, chamado pelo pastor e tio Dinarte Corrêa de Melo no rio água fria na cidade<br/>
                        de Arapuã-PR, em 1976 foi separado para o diaconato pelo Pr. Miguel Pereira dos Santos.<br/>
                        <br/><p/>
                        No ano de 1983, foi indicado pelo Pr. Darcy Ribeiro para dirigir a congregação Marco de Pedra por 3 anos, <br/>
                        exercendo a vice-presidência do campo na gestão do Pr. Manoel Caetano da Costa.<br/>
                        Sempre assíduos na obra de Deus, em 1985 foi chamado pelo Pr. Darcy Ribeiro ao presbitério, <br/>
                        exercendo diversas funções no campo de trabalho como porteiro, professor da EBD jovens, <br/>
                        adultos, líder de cozinha, entre outros.
                        <br/><p/>
                        Em 1990 o Pr. Miguel Pereira dos Santos esteve em sua residência no vista alegre e <br/>
                        o convidou para dirigir aquela sofrida congregação, o mesmo aceitou o trabalho e <br/>
                        começou a desbravar e motivar os irmãos a construir uma congregação que depois <br/>
                        de muito trabalho conseguiram finalizar, ficaram por 4 anos, em setembro de 1994 <br/>
                        decidiram ir embora para Curitiba-PR, precisamente no Bairro Alto a fim de fugir do <br/>
                        chamado para pastoral, chegando na igreja Assembleia de Deus Missão Congregação <br/>
                        Copel, congregou por poucos meses com o Pr. João de Matos, este o chamou para <br/>
                        dirigir a mesma congregação, mas a resposta foi negativa, ficando como professor da <br/>
                        EBD, permaneceu na congregação por 1 ano e 6 meses, se mudando para Araucária-PR<br/>
                        em 20 junho de 1996.<br/>
                        <br/><p/>
                        Em sua chegada, imediatamente, o Pastor Presidente da Assembléia de Deus Missão <br/>
                        (in memorian) Sudslande Farago de Andrade, o convidou para dirigir uma congregação <br/>
                        e o mesmo não aceitou no momento, mas em 1998 após uma nova conversa pediu <br/>
                        para que aceitasse dirigir a congregação do Jardim Beira Rio, na qual pastoreou até 27 de novembro 2005 para cumprir o chamado e o propósito de Deus em sua vida. <br/>
                        </span>
                    </div>
                    <div className="part-II">
                        <span>
                        No dia 03 de Dezembro de 2005 foi empossado como Pastor Presidente Regional do Ministério Madureira, assim<br/>
                        trabalhando na obra de Deus foi indicado pelo então Pr. Edivanildo de Lima para a função de evangelista em 15 de<br/>
                        Novembro de 2006 e o trabalho continuou prosperando, saíram de um salão pequeno para um maior para agregar os<br/>
                        irmãos, no ano de 2008 foi indicado mais uma vez pelo então Pr. Edivanildo para ocupar a função pastoral recebendo a<br/>
                        ordenação ao pastorado pela CONAMAD-DF, trabalhando ao longo de 9 anos como Pastor Presidente Regional da <br/>
                        Assembleia de Deus Ministério de Madureira em Araucária. <br/>
                        <br/><p/><br/><p/>
                        Tendo colhido muitos frutos, por ordem divina e depois <br/>
                        de ter orado por muitos dias, Deus confirmou ao Pr. Genes este ministério que deu o nome de Assembleia de Deus <br/>
                        Ministério Israelita, seu nome veio em confirmação pelo Senhor quando adentrou na igreja no momento em que as <br/>
                        irmãs do círculo de oração estavam ensaiando o hino "Gideão e os Trezentos" da cantora Eliã Oliveira para uma <br/>
                        festividade, logo ardeu em seu coração a confirmação do nome do ministério a qual se chama até hoje, em junho de<br/>
                        2014 nasce este ministério no qual está há 8 anos à frente deste trabalho, sobre tudo sempre com integridade e fidelidade<br/>
                        a Deus, assim deixando um legado de muito orgulho e temor a Deus.<br/>
                        </span>
                    </div>
                </div>
                <div className="foto_fundadores">
                    <img src={fundadores}/>
                    <strong>Fundadores</strong><br/>
                    <span>Pr. Genes Loureiro de Melo<br/>Pra. Maria Rita de Melo</span>
                </div>
            </div>
            <div className="footer_sobre">
                <Rodape/>
            </div>
        </div>
    )
}

export default Sobre;