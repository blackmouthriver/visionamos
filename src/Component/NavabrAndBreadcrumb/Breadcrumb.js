import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
const Breadcrmb = () => {

    const history = useHistory();

    function redireccionar(){
        history.push('/');
      }

    return ( 
        <div  id="conteinerBreadCrumb">

             <div id="breadcrumb">
             <p id="breadcrumb">Home/Movimientos Contables</p>
             </div>
            <button 
                  onClick={()=>redireccionar()}
                  id="button-Return">
                  <FontAwesomeIcon 
                  id="iconReturn" 
                  icon={faArrowLeft} />
                  Regresar
            </button>
        </div>
     );
}
 
export default Breadcrmb;