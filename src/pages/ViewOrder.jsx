import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/firebase'

function OrdersPage() {

    const firebase = useFirebase()

    const [books, setBooks] = useState([])

    useEffect(() => {
        firebase
        .fetchMyOrders()
        ?.then((books) => setBooks(books))
    
    }, [firebase])
    console.log(books);

  return (
    <div>OrdersPage</div>
  )
}

export default OrdersPage