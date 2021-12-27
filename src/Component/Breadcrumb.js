import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
const Breadcrmb = () => {
    return ( 
        <div  class="contain"  id="breadcrmb">
            <p id="breadcrumb">Home/Movimientos Contables</p>
            <button id="buttonreturn"><FontAwesomeIcon id="iconbuttonreturn" icon={faArrowLeft} />Regresar</button>
        </div>
     );
}
 
export default Breadcrmb;