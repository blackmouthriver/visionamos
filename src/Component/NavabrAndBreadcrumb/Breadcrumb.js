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

             {/*<div id="breadcrumb">
             <p id="breadcrumb">Home/Movimientos Contables</p>
             </div>*/}

             <nav aria-label="breadcrumb" id="breadcrumb">
              <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="./Component/Home.js">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Creación de movimientos</li>
              </ol>
            </nav>
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