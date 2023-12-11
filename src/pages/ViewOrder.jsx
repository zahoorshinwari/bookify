import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/firebase'
import BookCard from '../components/Card'

function OrdersPage() {

    const firebase = useFirebase()

    const [books, setBooks] = useState([])



    useEffect(() => {
        if(firebase.isLoggedIn)
        firebase
        .fetchMyBooks(firebase.user.uid)
        .then((books) => setBooks(books.docs))
    
    }, [firebase])
    
    console.log(books);
    
    if(!firebase.isLoggedIn) return <h1>Please logged In</h1>
    
  
    return (
        <div>
          {books.map(book => (
            <BookCard link={`/books/orders/${book.id}`} key={book.id} id={book.id} {...book.data()} />
          ))}
        </div>
      )      
}

export default OrdersPage