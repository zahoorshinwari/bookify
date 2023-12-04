import React, { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/firebase';
import { useNavigate } from 'react-router-dom';



function RegisterPage() {

    const firebase = useFirebase();
    const navigate = useNavigate()

    const [ email, setEmail ] = useState('')
    const [password, setPassword] = useState("")


    // this is used if user is logged in then navigate it into home 
    useEffect(() => {
      if(firebase.isLoggedIn) {
          // navigate to home is the user is login
          navigate('/')
          
      }
  }, [firebase, navigate])   

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Sign up a user...");
        const result = await firebase.signupUserWithEmailAndPassword(email, password) 
        console.log("successful" , result);
        setEmail('')
        setPassword('')
    }





  return (
    <div className='container mt-5'>
        <h1 className='text-center border '>Register page</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={e => setEmail(e.target.value)}
            value={email}
            />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
            type="password" 
            placeholder="Enter Password" 
            onChange={p => setPassword(p.target.value)}
            value={password}
            />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Create Acount
      </Button>
    </Form>
    </div>
  )
}

export default RegisterPage