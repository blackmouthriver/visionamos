import React from 'react'

const ViewPassives = () => {
    return (
        <div id='Container'>
              <div>
                    <label>Pasivos obligaciones</label>
                    <input type="text" placeholder='0'/> 
                    <label>¿Subsidiado por tercero?</label>
                    <select>
                            <option selected>Seleccione una opción</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                    </select> 
              </div>
              <div>
                    <label>Nombre tercero</label>
                    <input type="text" placeholder='Ingrese Nombre'/> 
                    <label>Parentesco tercero</label>
                    <select>
                            <option selected>Seleccione una opción</option>
                            <option value="1">Padre</option>
                            <option value="2">Madre</option>
                            <option value="3">Amigo</option>
                    </select> 
              </div>
              <div>
                    <label>Identificación tercero</label>
                    <input type="text" placeholder='Ingrese Número de identificación'/> 
              </div>
              <div>
                    <label>Tipo de vivienda</label>
                    <select>
                            <option selected>Seleccione una opción</option>
                            <option value="1">Propia</option>
                            <option value="2">Familiar</option>
                            <option value="3">Arquilada</option>
                    </select> 
                    <label>Tiempo de residencia en la vivienda (meses)</label>
                    <input type="text" placeholder='Ingrese meses'/> 
              </div>
              <div>
                    <label>¿Maneja recursos de tercero?</label>
                    <select>
                            <option selected>Seleccione una opción</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                    </select> 
                    <label>¿Recibe giros de otra ciudad?</label>
                    <select>
                            <option selected>Seleccione una opción</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                    </select> 
              </div>
              <div>
                    <label>Operación moneda extranjera</label>
                    <select>
                            <option selected>Seleccione una opción</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                    </select> 
                    <label>Moneda</label>
                    <select>
                            <option selected>Seleccione una opción</option>
                            <option value="1">Pesos</option>
                            <option value="2">Dolar</option>
                            <option value="3">Euro</option>
                    </select> 
              </div>
              <div>
                    <label>Sector económico</label>
                    <select>
                            <option selected>Seleccione una opción</option>
                            <option value="1">Publico</option>
                            <option value="2">Privado</option>
                    </select> 
                    <label>Personas a cargo</label>
                    <select>
                            <option selected>Seleccione una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                    </select> 
              </div>
            
        </div>
    )
}

export default ViewPassives
