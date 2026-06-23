import React from 'react'
import './CookieCard.css'

function CookieCard() {
  return (
    <div className="cookie-card">
      <h2>Chocolate Chip Cookie</h2>
      <p>A delicious chocolate chip cookie with gooey chocolate and a crispy edge.</p>
      <p>Price: R5.00</p>
      <button>Add to Cart</button>

      <h2>Ginger Biscuit</h2>
      <p>A classic ginger biscuit with a hint of spice and a crunchy texture.</p>
      <p>Price: R3.00</p>
      <button>Add to Cart</button>

      <h2>Romany Cream Biscuit</h2>
      <p>A delightful Romany Cream biscuit with a smooth, creamy filling.</p>
      <p>Price: R4.00</p>
      <button>Add to Cart</button>

      <h2>Melting Moments</h2>
      <p>A mouthwatering melting moment with a rich, indulgent flavor.</p>
      <p>Price: R6.00</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default CookieCard