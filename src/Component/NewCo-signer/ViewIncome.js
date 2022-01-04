import React from 'react'

const ViewIncome = () => {
    return (
        <div id='Container'>
              <div>
                    <label>Salario</label>
                    <input type="text" placeholder='0'/> 
                    <label>Ingresos Honorarios</label>
                    <input type="text" placeholder='0'/> 
              </div>
              <div>
                    <label>Ingresos arriendos</label>
                    <input type="text" placeholder='0'/> 
                    <label>Ingresos Financieros</label>
                    <input type="text" placeholder='0'/> 
              </div>
              <div>
                    <label>Otros Ingresos</label>
                    <input type="text" placeholder='0'/> 
                    <label>Descripción otros ingresos</label>
                    <input type="text" placeholder='Agregar descripción'/> 
              </div>
              <div>
                    <label>Ingresos mensuales</label>
                    <input type="text" placeholder='0'/> 
              </div>
            
        </div>
    )
}

export default ViewIncome
