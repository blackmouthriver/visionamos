import react from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Breadcrmb from "../Breadcrumb";
import CreationView from "../creationMovements";
import Home from "../Home";
import Modal from "../Modal";
import Modals from "../Modals";
import MotionCapture from "../receiptMotionCapture";
import Error404 from "./Error404";

const Routers = () =>{
return(
    <div>
     <Router>
       <Switch>
                <Route exact path="/RECIBO DE CAPTURA DE MOVIMIENTOS" component={MotionCapture}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/CREACIÓN DE MOVIMIENTOS CONTABLES">
                        <div>
                                <Modals />
                                <CreationView />
                        </div>
                </Route>
                <Route path="*" component={Error404}/>
       </Switch>
     </Router>
    </div>
    
);
}
export default Routers;