import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//PAGES
import Home from "../pages/home/home";
import Oferta from "../pages/oferta/oferta";
import Sobre from "../pages/sobre/sobre";
import Agenda from "../pages/agenda/agenda";
import Contato from "../pages/contato/contato";
import Cultos from "../pages/cultos/cultos";
import Diretoria from "../pages/diretoria/diretoria";
import MapaSede from "../pages/map_sede/map_sede";
import MapaVilaSandra from "../pages/map_vilaSandra/map_vilaSandra";
import MapaCalifornia from "../pages/map_california/map_california";

const AppRoutes: React.FC = () => (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/sobre" Component={Sobre}/>
                <Route path="/diretoria" Component={Diretoria}/>
                <Route path="/cultos" Component={Cultos}/>
                <Route path="/agenda" Component={Agenda}/>
                <Route path="/oferta" Component={Oferta}/>
                <Route path="/contato" Component={Contato}/>
                    <Route path="/contato/temploSede" Component={MapaSede}/>
                    <Route path="/contato/vilaSandra" Component={MapaVilaSandra}/>
                    <Route path="/contato/california" Component={MapaCalifornia}/>
            </Routes>
        </BrowserRouter>
)

export default AppRoutes;