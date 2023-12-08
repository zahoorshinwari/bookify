import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/firebase'
import BookCard from '../components/Card'
import CardGroup from 'react-bootstrap/CardGroup';


function HomePage() {

    const firebase = useFirebase()

    const [books, setBooks] = useState([])

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs))
    }, [])

    
  return (
    <div className="container mt-5">
        <h1 className='text-center '>All of the Books</h1>
        <CardGroup>
            {books.map((book) => (
                <BookCard key={book.id} id={book.id} {...book.data()}/>
            ))}
        </CardGroup>
    </div>
  )
}

export default HomePage