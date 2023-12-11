
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/firebase';
import { useNavigate } from 'react-router-dom';




function LoginPage() {

    const firebase = useFirebase();
    const navigate = useNavigate();

    const [ email, setEmail ] = useState('')
    const [password, setPassword] = useState("")
    
    // this is used if user is logged in then navigate it into home 
    useEffect(() => {
        if(firebase.isLoggedIn) {
            // navigate to home is the user is login
            //navigate('/')
        } 
    }, [firebase, navigate])    

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Sign in a user...");
        const result = await firebase.signinUsersWithEmailAndPassword(email, password) 
        console.log("successful" , result);
    }





  return (
    <div className='container mt-5'>
        <h1 className='text-center border '>Login page</h1>
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
        Log In
      </Button>
    </Form>
    <h1 className='mt-5 mb-5'>OR</h1>
    <Button onClick={firebase.signinWithGoogle} variant='danger'>Sign In With Google</Button>
    </div>
  )
}

export default LoginPage