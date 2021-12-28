import React from 'react'
import Routers from './Component/Routes/Routers'
import './Style.css';
import './Component/Modal.css';
import './Component/receiptMotion.css';
import Breadcrmb from './Component/Breadcrumb';

const App = () => {
    return (
        <div>
            <Breadcrmb />
            <Routers />
        </div>
    )
}

export default App
