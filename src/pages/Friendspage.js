import React from 'react'
import friends from '../data/Friendsdata'
import '../css/Friends.css'
import { Row, Col, Card, } from 'react-bootstrap'
import img from '../data/profile.jpg'

export default function Friendspage() {
  const photoUpload = (event) => {
    event.preventDefault();
    alert('image clicked')
  }
  return (
    <Row>
      {friends.map(items => {
        const { firstname, id, lastname } = items;
        return (
          <Col lg={3} className="d-flex">
            <Card key={id} className="flex-fill">
              <Card.Body>
                <Card.Text>
                  <img src={img} class="rounded-circle" alt="..." onClick={photoUpload} />
                  <p>{firstname} {lastname}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}
