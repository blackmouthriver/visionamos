import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import Cobelen from '../Image/Cobelen.jfif';
import Breadcrmb from "../NavabrAndBreadcrumb/Breadcrumb";
import Swal from 'sweetalert2';
import navbarMenu from "../NavabrAndBreadcrumb/navbarMenu";
import navbarprofile from "../NavabrAndBreadcrumb/navbarprofile";


const MotionCapture = () => {
    
    const history = useHistory();

    function redireccionar(){
        Swal.fire({
            text: "¿Desea volver a la ventana anterior?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: 'transparent linear-gradient(180deg, #D4D8DA 0%, #EAF3FB 100%) 0% 0% no-repeat padding-box;',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#0575BF',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
                history.push('/CREACIÓN DE MOVIMIENTOS CONTABLES'); 
            }
          })
        
      }

    return ( 
        <div id="ContainerGobal">

         
         <Breadcrmb />
         <navbarMenu />
        <div id="Container">
            <div id="containerTibleAndbuttos">
                <div>
                <p id="TitleHead">RECIBO DE CAPTURA DE MOVIMIENTOS</p>
                </div>
                <div id="buttonsPrintAndReturn">
                        <button 
                                id="buttonprint" 
                                onClick={() => window.print()}
                                > 
                                <FontAwesomeIcon id="iconPrint" 
                                icon={faPrint}/>   Imprimir</button>
                        <button 
                               id="buttonReturn"
                               onClick={()=>redireccionar()}
                               >
                               Volver
                        </button>
                </div>
            </div>



            <div id="containerSubtitle">
                      <p id="subTitleInfo">Información General</p>
                 </div>    
            <div id="containerHeadComprobant">
                 
                 <div id="containerLabels">
                      <img  id='imagen' src={Cobelen} />
                      <label id="labelMovi">Comprobante</label>
                      <input id="inuputLabelsMovi"></input>
                      <label id="labelMovi">Numero</label>
                      <input id="inuputLabelsMovi"></input>
                      <label id="labelMovi">Fecha Contable</label>
                      <input id="inuputLabelsMovi"></input>
                      <label id="labelMovi">Descripción</label>
                      <input id="inuputLabelsMovi"></input>
                 </div> 
            </div>
            <div id="containerTables">
                <div id="tableCaptureMovi">
                    <thead id="tableCapture">
                            <tr id="">
                                <th id="cellOne">AGENCIA</th>
                                <th id="cellOne">CUENTA</th>
                                <th id="cellOne">CLIENTE</th>
                                <th id="cellTwo">COMENTARIO</th>
                                <th id="cellOne">REFERENCIA</th>
                                <th id="cellOne">DEBITO</th>
                                <th id="cellOne">CREDITO</th>
                            </tr>
                    
                    </thead>
                    <p id="alerta">No hay datos en la tabla</p>
                    <tbody>   

                    </tbody>
                </div>
                    <div id="celltotales">       
                        <input 
                            id="cellResult"
                            type="text" 
                            name="total " 
                            placeholder='Total'>  
                        </input>
                        <input 
                            id="cellResult"
                            type="text" 
                            name="SumaDebito " 
                            placeholder='$ 0'>
                        </input>
                        <input 
                            id="cellResult"
                            type="text" 
                            name="SumaCredito " 
                            placeholder='$ 0'>
                        </input>
                    </div> 
            </div>
            
        </div>
        </div>
     );
  
}
 
export default MotionCapture;