import React from 'react'

const ViewContacInformation = () => {
    return (
        <div id='Container'>
        <div>
            <label>Dirección *</label>
            <input type="text" placeholder='Ingrese dirección'/>  
            <label>Barrio</label>
            <input type="text" placeholder='Ingrese barrio'/> 
            <label>Ciudad *</label> 
            <select>
                    <option selected>Seleccione una opción</option>
                    <option value="1">Bogota</option>
                    <option value="2">Medellin</option>
                    <option value="3">Barranquilla</option>
            </select> 
            <label>Teléfono</label> 
            <input type="text" placeholder='Ingrese teléfono'/>
        </div>
        <div>
            <label>Teléfono 2</label>
            <input type="text" placeholder='Ingrese teléfono'/> 
            <label>Dirección de correspondencia</label>
            <input type="text" placeholder='Ingrese dirección'/> 
            <label>Barrio correspondencia</label> 
            <input type="text" placeholder='Ingrese barrio'/> 
            <label>Dirección Electrónica</label> 
            <input type="date" placeholder='Ingrese dirección electrónica'/>
        </div>
        <div>
            <label>Número de celular</label>
            <input type="text" placeholder='Ingrese teléfono'/> 
        </div>
    </div>
    )
}

export default ViewContacInformation
