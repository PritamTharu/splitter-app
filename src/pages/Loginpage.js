import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import '../css/Login.css'

export default function Loginpage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false,);
  const handleShow = () => setShow(true);
  const [otp, setOtp] = useState('');
  return (
    <>
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div className='form-data'>
          <div className='form'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Enter phone number" />
              </Form.Group>
              <Button variant="primary" onClick={handleShow}>
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h6>OTP sent to your email and phone</h6>
        </Modal.Header>
        <Modal.Body >
          <p>Enter OTP to proceed</p>
          <OtpInput shouldAutoFocus value={otp} onChange={setOtp} numInputs={4} renderSeparator={<span>---</span>} renderInput={(props) => <input {...props} />} />
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn'>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}