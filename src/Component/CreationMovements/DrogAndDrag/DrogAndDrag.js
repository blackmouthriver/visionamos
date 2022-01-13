import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileCsv} from "@fortawesome/free-solid-svg-icons";
import Modals from '../../Modals/Modals';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Swal from 'sweetalert2';
const DrogAndDrag = () => {
    {/*
    const dropArea = document.querySelector(".drag-area");
    const dragtext = dropArea.querySelector("h2");
    const button = dropArea.querySelector("button");
    const input = dropArea.querySelector("input-file");
    let files;
    

    button.addEventListener("click", (e) =>{
        input.click();
    });

    input.addEventListener("change", (e) =>{
        input.click();
    });
    */}
    function redireccionar(){
        Swal.fire({
            text: "¿Desea cancelar la importación de este archivo?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: 'transparent linear-gradient(180deg, #D4D8DA 0%, #EAF3FB 100%) 0% 0% no-repeat padding-box;',
            cancelButtonText: 'No',
            confirmButtonColor: '#0575BF',
            confirmButtonText: 'Si'
          }).then((result) => {
            if (result.isConfirmed) { 
            }
          })
        
      }

    return (
        <div id='droganddragConteiner'>
            
        <div id='conteiner-drog'>
            <p id="title-Drog"> <FontAwesomeIcon id="iconfile" icon={faFileCsv} /> Arrastre o seleccione un archivo de su equipo</p>
        </div>
             <div>
             <div id='preview'></div>
             <input type="file" id="input-file" hidden />
             <div id='container-progress'>
             <div id='progress'>
             <ProgressBar now={0} />
             </div>
             <button id='cancelImport' onClick={()=>redireccionar()}>X</button>
             <Modals />
             </div>
             </div>
        </div>
    )
}

export default DrogAndDrag
