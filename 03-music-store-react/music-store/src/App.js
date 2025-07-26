import React, { useState } from "react";

const albums = [
  { id: 1, title: "Album One", artist: "Artist A", price: 10 },
  { id: 2, title: "Album Two", artist: "Artist B", price: 12 },
  { id: 3, title: "Album Three", artist: "Artist C", price: 9 }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = album => setCart([...cart, album]);

  return (
    <div>
      <h1>Music Store</h1>
      <h2>Albums</h2>
      {albums.map(album => (
        <div key={album.id}>
          <span>{album.title} by {album.artist} - ${album.price}</span>
          <button onClick={() => addToCart(album)}>Add to Cart</button>
        </div>
      ))}
      <h2>Cart</h2>
      <ul>
        {cart.map((album, idx) => (
          <li key={idx}>{album.title} - ${album.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
