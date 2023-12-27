import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Loginpage from './Loginpage';
import Signinpage from './Signinpage'
import '../css/Loginsignin.css'

export default function Loginsigninpage() {
    return (
        <div className='container'>
            <div class="row justify-content-center">
                <div class="col-sm-3">
                    <Tabs defaultActiveKey="Login" id="justify-tab-example" className="mb-3" justify>
                        <Tab eventKey="Login" title="Login" ><Loginpage /> </Tab>
                        <Tab eventKey="Signin" title="Signin"><Signinpage /> </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
