
import { useModal } from "../../hooks/useModal";
import Modal from "./Modal";

const Modals = () => {
    const[isOpenModal, openModal1, closeModal1]=useModal(false);
    return (
        <div> 
           <button id="buttonimport" onClick={openModal1}>Importar</button>
           <Modal isOpen={isOpenModal} closeModal={closeModal1}>
           <div class="headModal">
                <label id="labelHeadModal">IMPORTAR ARCHIVO</label>
            </div>
            <div class="bodyModal">
                <label class="titleMoviCont">Movimientos contables</label>
                <li class="ModalListOne">Para importar el archivo de click en el boton <b class="strong">"ACEPTAR"</b></li>
                <li class="ModalListtwo">los siguientes son los campos requeridos para la migración de movimientos contables</li>
                <label class="ModalListtree">Recuerde que el archivo es <u>sin encabezado, separado por punto 
                y coma (;)</u> y debe ser extension .csv</label>
            </div>
            <div class="bodytableModal">
                 <table>
                        <thead class="headtableModal">
                                <tr>
                                <th id="posOne">Posición1</th>
                                <th id="posOne">Posición2</th>
                                <th id="posOne">Posición3</th>
                                <th id="posOne">Posición4</th>
                                <th id="posOne">Posición5</th>
                                <th id="posOne">Posición6</th>
                                <th id="posOne">Posición7</th>
                                </tr>
                        </thead>
                        <tbody class="footertableModal"> 
                                <tr>
                                <td id="titlestable">Cuenta</td>
                                <td id="titlestable">Cliente</td>
                                <td id="titlestable">Comentarios</td>
                                <td id="titlestable">Debito</td>
                                <td id="titlestable">Credito</td>
                                <td id="titlestable">Numero de referencia</td>
                                <td id="titlestable">Codigo de agencia</td>
                                </tr>
                        </tbody>
                 </table>
            </div>
           </Modal>
        </div>
    );
}

export default Modals;
