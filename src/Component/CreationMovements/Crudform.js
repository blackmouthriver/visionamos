import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'




const initialDb = [
    {
        id:1,
        agency: "agencia1",
        bill: "123456789",
        client: "Arturo Casas",
        comment: "hoy es lunes",
        reference: "12345678910",
        debit: "1000000",
        credit: "2345678",
    },
    {
        id:2,
        agency: "agencia2",
        bill: "234567891",
        client: "Armado Casas",
        comment: "hoy es martes",
        reference: "79634982334",
        debit: "23987482",
        credit: "238964879823",
    },
    {
        id:3,
        agency: "agencia3",
        bill: "781927381",
        client: "Alan Brito",
        comment: "hoy es Miercoles",
        reference: "987128741324",
        debit: "7349857435",
        credit: "345453423",
    },
    {
        id:4,
        agency: "agencia4",
        bill: "4798327434",
        client: "Elmo Rongo",
        comment: "hoy es jueves",
        reference: "345345345345",
        debit: "354345433",
        credit: "43545345",
    },
    {
        id:5,
        agency: "agencia5",
        bill: "739187391",
        client: "Elsa Porico",
        comment: "hoy es viernes",
        reference: "123719831",
        debit: "456456456",
        credit: "45645645",
    },
    {
        id:6,
        agency: "agencia6",
        bill: "157677567",
        client: "elvis Conio",
        comment: "hoy es sabado",
        reference: "136464364",
        debit: "46456456",
        credit: "6346456456",
    },
    {
        id:7,
        agency: "agencia7",
        bill: "1627836273",
        client: "Armando Puertas",
        comment: "hoy es Domingo",
        reference: "13467456754",
        debit: "57656756756",
        credit: "56756756",
    }
    ];

const initialForm = {

    agency:"",
    bill:"",
    client:"",
    comment:"",
    reference:"",
    debit:"",
    credit:"",
    id: null,
}



const Crudform = () => {
    const history = useHistory();

    function redireccionar(){
        
        Swal.fire({
            title: 'Exito',
            text: "La captura de movimientos fue exitosa ¿Desea continuar?",
            icon: 'success',
            showCancelButton: true,
            cancelButtonColor: 'transparent linear-gradient(180deg, #D4D8DA 0%, #EAF3FB 100%) 0% 0% no-repeat padding-box;',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#0575BF',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
                history.push('/RECIBO DE CAPTURA DE MOVIMIENTOS');
            }
          })
      }

      function addRow(){
        
        Swal.fire({
            title: 'Atención',
            text: "¿Desea agregar una nueva fila?",
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

      function deleteRow(){
        
        Swal.fire({
            title: '¿Estas seguro?',
            text: "¿Desea eliminar esta fila?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'la fila ha sido eliminada.',
                'success'
              )
            }
          })
        
      }

    const handleChange =(e) =>{

    }
    
    const handleSubmit =(e) =>{
        
    }
    
    return (
        <div>
            <form  id="conteiner-form" onSubmit={handleSubmit}>
                <select id="labelTextOne">
                        <option id="selectTable" selected>Seleccionar</option>
                        <option id="selectTable" value="1">Agencia 1</option>
                        <option id="selectTable" value="2">Agencia 2</option>
                        <option id="selectTable" value="3">Agencia 3</option>
                </select>
                <input 
                        id="labelTextTwo"
                        type="text" 
                        name="Cuenta " 
                        placeholder='Ingresar cuenta' 
                        >
                 </input>
                <input  
                        id="labelTextOpt"
                        type="text" 
                        name="Cliente " 
                        placeholder='Ingresar cliente' 
                        >
                </input>
                <input 
                        id="labelTextfour"
                        type="text" 
                        name="Comentario " 
                        placeholder='Ingresar Comentario' 
                        >
                </input>
                <input 
                        id="labelTextRef"
                        type="text" 
                        name="Referencia " 
                        placeholder='Ingresar referencia' 
                        >
                </input>
                <input 
                        id="labelTextThree"
                        type="text" 
                        name="Debito " 
                        placeholder='0' 
                        >
                </input>
                <input 
                        id="labelTextThree"
                        type="text" 
                        name="Credito " 
                        placeholder='0' 
                        >
                </input>
                <button onClick={deleteRow}
                        id="buttonDelete">
                        <i class="bi bi-trash"></i>
                       <FontAwesomeIcon id="iconbutabletrash" 
                       icon={faTrash} />
                       </button>
            </form>
                <div id="conteiner-boton">
                    <button id="buttonAdd" onClick={() =>addRow()}>
                             Agregar 
                             <FontAwesomeIcon id="iconbuttonplus" 
                             icon={faTimes} 
                                
                             />
                    </button>
                </div>
                <div id="footerView">
                    <input
                          id="Cell-total"
                          type="text" 
                          name="total " 
                          placeholder='Total'>  
                    </input>
                    <input 
                          id="Cell-resul"
                          type="text" 
                          name="SumaDebito " 
                          placeholder='$ 0'>
                    </input>
                    <input 
                          id="Cell-resul"
                          type="text" 
                          name="SumaCredito " 
                          placeholder='$ 0'>
                    </input>
                    <button id="buttonAcept"
                     onClick={() =>redireccionar()}>
                    Aceptar
                    </button>
                </div>
        </div>
    )
}

export default Crudform
