import React from 'react'
import '../css/Home.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Friendspage from './Friendspage';
import Groupspage from './Groupspage';
import Settlepage from './Settlepage';
import Chartpage from './Chartpage';

export default function Homepage() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Tabs defaultActiveKey="Friends" id="fill-tab" className="mb-3" justify>
              <Tab eventKey="Friends" title="Friends"><Friendspage /> </Tab>
              <Tab eventKey="Groups" title="Groups"><Groupspage /> </Tab>
              <Tab eventKey="History" title="History"><Settlepage /> </Tab>
              <Tab eventKey="Settle" title="Settle"><Settlepage /> </Tab>
            </Tabs>
          </div>
          <div class="col-sm">
            <div class="col-sm1">
              <h4>Summary</h4>
            </div>
            <div class="col-sm2">
              <Chartpage />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
