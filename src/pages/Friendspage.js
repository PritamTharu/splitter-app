import React from 'react'
import friends from '../data/Friendsdata'
import '../css/Friends.css'
import { Row, Col, Card,  } from 'react-bootstrap'
import img from '../data/profile.jpg'



export default function Friendspage() {
  return (
    <Row>
      { friends.map(items => {
        const { firstname, id } = items;
        return (
          <Col lg={3} className="d-flex">
            <Card key={id} className=" flex-fill">
              <Card.Img variant="top" src={img} width="1%"/>
              <Card.Body>
                <Card.Text >{firstname}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}
