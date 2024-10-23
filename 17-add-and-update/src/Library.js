import React, {useState} from 'react'

export default function Movies() {

    const [books, setBooks] = useState(
        [
            {
                'id': 101,
                'title': 'Dune',
                'author': 'Frank Herbert',
                'genre': 'science-fiction',
                'tags':['futuristic', 'classics']
            },
            {
                'id': 102,
                'title': 'The Lord of the Rings: The Fellowship of the Ring',
                'author': 'J.R.R Tolkien',
                'genre':'fantasy',
                'tags':['door-stopper', 'trilogy']
            }
        ]
    )

    const addBook = () => {

    }

    const updateBook = () => {

    }

    const displayEditBook = () => {

    }

    const cancelEditBook = () => {

    }

    const displayBooks = () => {
        
    }

    return <React.Fragment>
        <div class="container">
            <div class="col">
                {displayBooks()}
            </div>

            <div class="col">

            <h3>Add Book</h3>
            <div>
                <label>Title:</label>
                <input type="text" name="title" />
            </div>
            <div>
                <label>Author</label>
                <input type="text" name="author"/>
            </div>
            <div>
                <label>Genre</label>
                <input type="radio" name="genre" value="fantasy"/><label>Fantasy</label>
                <input type="radio" name="genre" value="science-fiction"/><label>Fantasy</label>
                <input type="radio" name="genre" value="romance"/><label>Romance</label>
            </div>
            <div>
                <label>Tags</label>
                <input type="checkbox" name="tags" value="classic"/><label>Classic</label>
                <input type="checkbox" name="tags" value="doorstopper"/><label>Doorstopper</label>
                <input type="checkbox" name="tags" value="futuristic"/><label>futuristic</label>
                <input type="checkbox" name="tags" value="trilogy"/><label>trilogy</label>
            </div>
            <button>Add Book</button>
            </div>
        </div>
    </React.Fragment>
}
