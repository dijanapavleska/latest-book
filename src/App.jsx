import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Book from './Book';
import Header from './header';

function App() {

  const [book_data, setBookData] = useState(null)
  const [cart, setCart] = useState([])

  //make fetch request, get response

  const loadBookData = async () => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php')
    //parse the response

    const data = await response.json();

    setBookData(data);

    //pretending that we loaded the book data
    //and set it to anything else than null

    // setBookData(true);
  }

  useEffect  (() => {

    //load data about books when the component mounts
    loadBookData();
  }, [])
  
  const addItemToCart = (book_id) => {
    setCart([
      ...cart,
      book_id
    ])
    
  }
  const removeItemFromCart = (book_id) => {
    // prepare a copy of the current state
    // of the cart (so that we don't change it)
    const copy = [...cart];

    // try to find the first occurence of this
    // book_id in the copy
    const found_at_index = copy.indexOf(book_id);

    // if found...
    if (found_at_index !== -1) {
      // ...remove it from the array
      // (this changes the array which is why we
      // did not want to do it on `cart`)
      copy.splice(found_at_index, 1);
    }

    // update the state with the new "cart" array,
    // sans the first found occurence of this book_id
    setCart(copy)
  
  }

 return (
    <div className='App'>
      <Header
        cart_items_nr={cart.length} />
      <h1>Latest Books</h1>
      <button onClick={loadBookData}>Load data</button>
      <ul className='book-list'>
        {
          book_data === null ? <li>Loading...</li> : book_data.map(book =>
            <Book
              key={book.id}
              book={book}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart} />
          )
        }
      </ul>
    </div >
  );
}
export default App;









