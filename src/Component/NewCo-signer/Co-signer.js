import React from 'react'
import Breadcrmb from '../Breadcrumb'
import { Accordion, Card, Button } from 'react-bootstrap' 
import ViewPersonalInformation from './ViewPersonalInformation'
import ViewJobsInformation from './ViewJobsInformation'
import ViewContacInformation from './ViewContacInformation'
import ViewIncome from './ViewIncome'
import ViewExpenses from './ViewExpenses'
import ViewAssets from './ViewAssets'
import ViewPassives from './ViewPassives'

const Cosigner = () => {
    return (
        <div>
            <Breadcrmb />
                <div>
                    <br></br>
                    <h1 className="title">NUEVO CODEUDOR</h1>
                </div>
            <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                        <Accordion.Header>Datos Personales</Accordion.Header>
                                        <Accordion.Body>
                                            <ViewPersonalInformation />
                                        </Accordion.Body>
                                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                        <Accordion.Header >Datos Laborales</Accordion.Header>
                                        <Accordion.Body>
                                            <ViewJobsInformation />
                                        </Accordion.Body>
                                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Datos de Contacto</Accordion.Header>
                                        <Accordion.Body>
                                            <ViewContacInformation />
                                        </Accordion.Body>
                                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                        <Accordion.Header> Información Económica</Accordion.Header>
                                        <Accordion.Body>
                        <Accordion defaultActiveKey="5">
                        <Accordion.Item eventKey="6">
                                        <Accordion.Header> Ingresos</Accordion.Header>
                                        <Accordion.Body>
                                             <ViewIncome />
                                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                                        <Accordion.Header>Egresos</Accordion.Header>
                                        <Accordion.Body>
                                              <ViewExpenses />
                                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                                        <Accordion.Header> Activos</Accordion.Header>
                                        <Accordion.Body>
                                              <ViewAssets />
                                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                                        <Accordion.Header> Pasivos</Accordion.Header>
                                        <Accordion.Body>
                                                 <ViewPassives />  
                                        </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>      
                                        </Accordion.Body>
                        </Accordion.Item>
             </Accordion>      
        </div>
    )
}

export default Cosigner

