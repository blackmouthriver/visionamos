import React from 'react'

const ViewPersonalInformation = () => {
    return (
        
        <div id='Container'>
            <div>
                 <label>Tipo de identificación *</label> 
                 <select>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Cedula de Ciudadania</option>
                        <option value="2">Cedula de Extrangeria</option>
                        <option value="3">Tarjeta de Identidad</option>
                 </select>
                 <label>Número identificación *</label>
                 <input type="text" placeholder='Ingrese número'/>
                 <label>Fecha de expedición *</label>
                 <input type="date" placeholder="Seleccione Fecha"></input>
                 <label>Lugar de expedición</label>
                 <select>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Bogota</option>
                        <option value="2">Medellin</option>
                        <option value="3">Cali</option>
                 </select>
            </div>
            <div>
                 <label>Primer nombre *</label>
                 <input type="text" placeholder='Ingrese primer nombre'/>  
                 <label>Segundo nombre</label>
                 <input type="text" placeholder='Ingrese segundo nombre'/> 
                 <label>Primer apellido *</label> 
                 <input type="text" placeholder='Ingrese primer apellido'/>
                 <label>Segundo apellido</label> 
                 <input type="text" placeholder='Ingrese segundo apellido'/>
            </div>
            <div>
                 <label>Nacionalidad</label>
                 <select>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Colombiano</option>
                        <option value="2">Ecuatoriano</option>
                        <option value="3">Venezolano</option>
                 </select>  
                 <label>Ciudad de nacimiento</label>
                 <select>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Bogota</option>
                        <option value="2">Medellin</option>
                        <option value="3">Cali</option>
                 </select> 
                 <label>Fecha de nacimiento</label> 
                 <input type="date" placeholder="Seleccione Fecha"></input>
                 <label>Profesión</label> 
                 <select>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Bogota</option>
                        <option value="2">Medellin</option>
                        <option value="3">Cali</option>
                 </select> 
            </div>
            <div>
                 <label>Estado civil</label>
                 <select>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Soltero</option>
                        <option value="2">Casado (a)</option>
                        <option value="3">Union Libre</option>
                        <option value="4">Viudo (a)</option>
                 </select> 
                 <label>Género</label>
                 <select>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                 </select> 
                 <label>Estrato</label> 
                 <select>
                        <option selected>Seleccione una opción</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                 </select> 
                 <label>Nivel de escolaridad</label> 
                 <select>
                        <option value="3">Sin escolaridad</option>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Primaria</option>
                        <option value="2">Secundaria</option>
                        <option value="3">Tecnico</option>
                        <option value="3">Tecnologo</option>
                        <option value="3">Universitario</option>
                        <option value="3">Posgrado</option>
                 </select> 
            </div>
            <div>
            <label>Estado civil</label>
                <select>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Soltero</option>
                        <option value="2">Casado (a)</option>
                        <option value="3">Union Libre</option>
                        <option value="4">Viudo (a)</option>
                </select> 
            </div>
        </div>
    )
}

export default ViewPersonalInformation
