import "bootstrap/dist/css/bootstrap.min.css";
import Crudform from "../CreationMovements/Crudform";
import Breadcrmb from "../NavabrAndBreadcrumb/Breadcrumb";
import DrogAndDrag from "./DrogAndDrag/DrogAndDrag";
import ContainerTable from "./ContainerTable";
import navbarMenu from "../NavabrAndBreadcrumb/navbarMenu";
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

const CreationView = (initialDb) => {

    return ( 
          <div id="ContainerGobal">
                <Breadcrmb />
                <navbarMenu />
                <div id="Container">     
                        <div>
                            <br></br>
                            <p id="TitleHead">CREACIÓN DE MOVIMIENTOS CONTABLES</p>
                            <div id="ConteinerHead">
                                <div id="Container-Comprob">
                                <div id="Conteiner-labels-head">
                                <label id="Comprobante">Comprobante*</label>

                                <select id="SelectCompro">
                                    <option id="valueOpt" selected>Seleccione un comprobante</option>
                                    <option id="valueOpt" value="1">One</option>
                                    <option id="valueOpt" value="2">Two</option>
                                    <option id="valueOpt" value="3">Three</option>
                                </select>
                                <label id="fecha-Contable">Fecha contable*</label>
                                <input type="date" id="SelecComp" placeholder="Seleccione Fecha"></input>
                            </div>    
                            <textarea type="text" id="inputAreaText" placeholder="Descripción"></textarea>
                                </div>

                        <div  id="drogAndDrag">
                            <DrogAndDrag />  
                        </div> 
                            </div>
                        </div>
                        <div id="container-table-create">
                            <table id="container-table-subcreate">
                                <ContainerTable />
                                <Crudform /> 
                            </table>
                        </div>

                
                </div>
         </div>
     );
}
 
export default CreationView;