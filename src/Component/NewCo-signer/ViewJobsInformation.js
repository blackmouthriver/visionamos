import React from 'react'

const ViewJobsInformation = () => {
    return (
        <div id='Container'>
            <div>
                <label>Empresa</label>
                <input type="text" placeholder='Ingrese nombre empresa'/>  
                <label>Dirección empresa</label>
                <input type="text" placeholder='Ingrese dirección'/> 
                <label>Barrio empresa</label> 
                <input type="text" placeholder='Ingrese barrio'/>
                <label>Teléfono empresa</label> 
                <input type="text" placeholder='Ingrese teléfono'/>
            </div>
            <div>
                <label>Tipo contrato</label>
                <select>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Obra y labor</option>
                        <option value="2">Indefinido</option>
                        <option value="3">Fijo</option>
                </select> 
                <label>Jornada laboral</label>
                <select>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Completa(diurno)</option>
                        <option value="2">Rotativo</option>
                        <option value="3">Medio tiempo</option>
                 </select> 
                <label>Cargo</label> 
                <select>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Auxiliar</option>
                        <option value="2">Jefe (a) Area</option>
                        <option value="3">Operario (a)</option>
                        <option value="3">Administrativo (a)</option>
                 </select> 
                <label>Fecha ingreso empresa</label> 
                <input type="date" placeholder='Seleccione fecha'/>
            </div>
                
        </div>
    )
}

export default ViewJobsInformation
