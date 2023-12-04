import React from 'react'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function ListingPage() {

    const [name, setName] = useState('')
    const [isbnNUmber, setisbnNumber] = useState('')
    const [price, setPrice] = useState('')
    const [coveredPic, setCoveredPic] = useState('')


    const handleSubmit = () => {}

  return (
    <div className='container mt-5'>
           <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book Name</Form.Label>
        <Form.Control 
            onChange={e => setName(e.target.value)}
            value={name}
            type="text" 
            placeholder="Enter Book Name" 
            />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ISBN </Form.Label>
        <Form.Control 
            onChange={p => setisbnNumber(p.target.value)}
            value={isbnNUmber}
            type="text" 
            placeholder="ISBN number" 
            />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price </Form.Label>
        <Form.Control 
            onChange={p => setPrice(p.target.value)}
            value={price}
            type="text" 
            placeholder="Enter Price" 
            />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Upload Picture </Form.Label>
        <Form.Control 
            onChange={p => setCoveredPic(p.target.files[0])}
            value={coveredPic}
            type="file" 
            
            />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form> 
    </div>
  )
}
