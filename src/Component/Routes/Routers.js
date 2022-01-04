import react from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Breadcrmb from "../NavabrAndBreadcrumb/Breadcrumb";
import CreationView from "../CreationMovements/creationMovements";
import Home from "../Home";
import Modal from "../Modals/Modal";
import Modals from "../Modals/Modals";
import MotionCapture from "../CreationMovements/receiptMotionCapture";
import Error404 from "./Error404";
import Cosigner from "../NewCo-signer/Co-signer";

const Routers = () =>{
return(
    <div>
     <Router>
       <Switch>
                <Route exact path="/RECIBO DE CAPTURA DE MOVIMIENTOS" component={MotionCapture}/>
                <Route exact path="/NUEVO CODEUDOR" component={Cosigner}/>
                <Route exact path="/CREACIÓN DE MOVIMIENTOS CONTABLES">
                        <div>
                                <Modals />
                                <CreationView />
                        </div>
                </Route>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={Error404}/>
       </Switch>
     </Router>
    </div>
    
);
}
export default Routers;