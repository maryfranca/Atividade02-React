import { BrowserRouter, Route, Routes } from "react-router-dom";
// mapeamento das páginas
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";

function AppRoutes()
{
	return(
	<BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/sobre" element={ <Sobre /> }></Route>
            <Route path="/contatos" element={ <Contatos /> }></Route>
            
        </Routes>
	</BrowserRouter>
)
}
export default AppRoutes