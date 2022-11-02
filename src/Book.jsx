import './Book.scss';
import { useState } from 'react';

export default function Book({ book, addItemToCart, removeItemFromCart }) {
    //const book = props.book
    // amout of this book in the cart
    const [amountInCart, setAmountinCart] = useState(0);
    const addToCart = () => {
        setAmountinCart(amountInCart + 1)
        addItemToCart(book.id);
    }
    const removeFromCart = () => {
        setAmountinCart(Math.max(0, amountInCart - 1));
        removeItemFromCart(book.id)
    }
    const style = {
        width: '3em',
        border: '1px solid black'
    }
    
    if (book.id == 19898) {
        style.borderColor = 'pink';
        style.borderWidth = '3px';
    }
    return (
        <li className="book"
            key={book.id}>
            <img src={book.image} alt={book.title + 'cover'} style={style} />
            {book.title}
            <div className='book__in-cart'>
                <button onClick={addToCart}>+</button>
                {amountInCart}
                <button onClick={removeFromCart}>-</button>
            </div>
        </li>
    )
}