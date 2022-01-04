import React from 'react'

const ViewAssets = () => {
    return (
        <div id='Container'>
              <div>
                    <label>Activos inversiones</label>
                    <input type="text" placeholder='0'/> 
                    <label>Descripción activos inversiones</label>
                    <input type="text" placeholder='Agregar descripción'/> 
              </div>
              <div>
                    <label>Descripción vehículo</label>
                    <input type="text" placeholder='Agregar descripción'/> 
                    <label>Valor comercial propiedad raíz</label>
                    <input type="text" placeholder='0'/> 
              </div>
              <div>
                    <label>Otros Activos</label>
                    <input type="text" placeholder='0'/> 
                    <label>Descripción otros activos</label>
                    <input type="text" placeholder='0'/> 
              </div>
              <div>
                    <label>Total activos</label>
                    <input type="text" placeholder='0'/> 
              </div>
            
        </div>
    )
}

export default ViewAssets
