import react from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Breadcrmb from "../Breadcrumb";
import CreationView from "../creationMovements";
import Home from "../Home";
import Modal from "../Modal";
import Modals from "../Modals";

function Routers() {
return(
    <div className="Routers">
       <Breadcrmb />
       <Modals />
       <CreationView />
       

    </div>
    
);



}
export default Routers;