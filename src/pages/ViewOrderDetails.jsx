import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/firebase';

function ViewOrderDetails() {

    const params = useParams()
    const firebase = useFirebase()


    const [orders, setOrders] = useState([])
    useEffect(() => {
        firebase.
        getOrders(params.bookId)
        .then((orders) => setOrders(orders.docs))
    }, [])

    
  return (
    <div className='container mt-5'>
        <h1>Orders</h1>
        {orders.map((order) => {
            const data = order.data()
            return (
                <div key={order.id} className='mt-5' style={{border: "2px solid", padding: '15px'}}>
                    <h2>Order By: {data.displayName}</h2>
                    <h2>Quantity: {data.qty}</h2>
                    <h2>Email: {data.userEmail}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default ViewOrderDetails