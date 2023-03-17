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
            </Routes>
        </BrowserRouter>
)

export default AppRoutes;