import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/firebase';
import  Button  from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';

export default function BookDetailPage() {

    const params = useParams()
    const firebase = useFirebase();

    // used for getting the data
    const [data, setData] = useState(null)
    // getting the image url
    const [url , setURL ] = useState(null);
    // this is for quantity of the books
    const [ qty , setQty] = useState(1)


    // used for getting the data
    useEffect(() => {
        firebase
        .getBookById(params.bookId)
        .then((value) => setData(value.data()))
    }, [])

    // used for getting the image
    useEffect(() => {
        if(data) {
            const imageUrl = data.imageURL;
            firebase.getImageURL(imageUrl).then((url) => setURL(url))
        }
    }, [data])

    // used for getting the place order data
    const placeOrder = async() => {
        const result = await firebase.placeOrder(params.bookId, qty)
        console.log("order placed", result)
    }


   

//     const scanningEffectStyle = {
//       width: '20px', // Adjust the width of the scanning effect
//       height: '20px', // Adjust the height of the scanning effect
//       border: '2px solid #333', // Adjust the border color and size
//       borderRadius: '50%',
//       borderTop: '2px solid transparent',
//       animation: 'scanning 1s linear infinite', // Adjust the animation duration and timing function
//     };

//   if (data === null) {
//     // Display a scanning effect
//     return <div style={{scanningEffectStyle}}></div>;
//   }






   if (data == null) return <h1>Loading...</h1>

    return (
        <div className='container mt-5'>
            <h1>{data.name}</h1>
            <img src={url} width='50%' style={{ borderRadius: "10px"}}/>
            <h1>Book Details</h1>
            <p>Price: Rs. {data.price}</p>
            <p>ISBN Number: Rs. {data.isbnNUmber}</p>
            <h1>Owner Details</h1>
            <p>Name: {data.displayName}</p>
            <p>Email: {data.userEmail}</p>
            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quantity</Form.Label>
        <Form.Control 
            type="Number" 
            placeholder="Enter quantity" 
            onChange={p => setQty(p.target.value)}
            value={qty}
            />
      </Form.Group>
            <Button onClick={placeOrder} variant='success'>Buy Now</Button>

        </div>
    )
}
