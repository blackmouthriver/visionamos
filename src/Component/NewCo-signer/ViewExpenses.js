import React from 'react'

const ViewExpenses = () => {
    return (
        <div id='Container'>
              <div>
                    <label>Egresos familiares</label>
                    <input type="text" placeholder='0'/> 
                    <label>Egresos fijos hogar</label>
                    <input type="text" placeholder='0'/> 
              </div>
              <div>
                    <label>Egresos financieros</label>
                    <input type="text" placeholder='0'/> 
                    <label>Egresos personales</label>
                    <input type="text" placeholder='0'/> 
              </div>
              <div>
                    <label>Egresos arriendo hipoteca</label>
                    <input type="text" placeholder='0'/> 
              </div>
              <div>
                    <label>Otros egresos</label>
                    <input type="text" placeholder='0'/> 
                    <label>Descripción otros egresos</label>
                    <input type="text" placeholder='Agregar descripción'/> 
              </div>
              <div>
                    <label>Egresos mensuales</label>
                    <input type="text" placeholder='0'/> 
              </div>
            
        </div>
    )
}

export default ViewExpenses
