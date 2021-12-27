import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

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
    const [form, setForm] = useState(initialForm);
    const handleChange =(e) =>{

    }

    const handleSubmit =(e) =>{
        
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                        id="selectitems"
                        type="text" 
                        name="Agencia " 
                        placeholder='Seleccionar' 
                        onChange={handleChange} 
                        value={form.agency}>
                </input>
                <input 
                        id="selectitems"
                        type="text" 
                        name="Cuenta " 
                        placeholder='Ingresar cuenta' 
                        onChange={handleChange} 
                        value={form.bill}>
                 </input>
                <input  
                        id="selectitems"
                        type="text" 
                        name="Cliente " 
                        placeholder='Ingresar cliente' 
                        onChange={handleChange} 
                        value={form.client}>
                </input>
                <input 
                        id="selectitemstree"
                        type="text" 
                        name="Comentario " 
                        placeholder='Ingresar Comentario' 
                        onChange={handleChange} 
                        value={form.comment}>
                </input>
                <input 
                        id="selectitemsref"
                        type="text" 
                        name="Referencia " 
                        placeholder='Ingresar referencia' 
                        onChange={handleChange} 
                        value={form.reference}>
                </input>
                <input 
                        id="selectitemstwo"
                        type="text" 
                        name="Debito " 
                        placeholder='0' 
                        onChange={handleChange} 
                        value={form.debit}>
                </input>
                <input 
                        id="selectitemstwo"
                        type="text" 
                        name="Credito " 
                        placeholder='0' 
                        onChange={handleChange} 
                        value={form.credit}>
                </input>
                <button 
                       id="buttonselectoption">
                       <FontAwesomeIcon id="iconbutabletrash" 
                       icon={faTrash} />
                       </button>
            </form>
                <div>
                    <button id="ButtonAgregar">
                             Agregar 
                             <FontAwesomeIcon id="iconbuttonplus" 
                             icon={faTimes} />
                    </button>
                </div>
                <div id="footerView">
                    <input
                          id="resulselect"
                          type="text" 
                          name="total " 
                          placeholder='Total'>  
                    </input>
                    <input 
                          id="resulselecttwo"
                          type="text" 
                          name="SumaDebito " 
                          placeholder='$ 0'>
                    </input>
                    <input 
                          id="resulselecttwo"
                          type="text" 
                          name="SumaCredito " 
                          placeholder='$ 0'>
                    </input>
                    <button id="ButtonAceptar">
                    Aceptar
                    </button>
                </div>
        </div>
    )
}

export default Crudform
