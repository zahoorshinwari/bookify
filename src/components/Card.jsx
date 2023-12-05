import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useFirebase } from '../context/firebase'

function BookCard(props) {

    const firebase = useFirebase()
    const [url, setUrl] = useState(null)


    useEffect(() => {
        firebase.getImageURL(props.imageURL).then((url) => setUrl(url))
    }, [])

  return (
    <div>
        <Card style={{ width: '18rem', margin: '5px' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          This book has a title {props.name} and this book is sold by { props.displayName } and this book
          costs Rs. {props.price}.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default BookCard