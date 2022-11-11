import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */
// const [cartTotal, setCartTotal] = useState(0);
// const [cartItems, setCartItems] = useState([]);

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <h1>My Super Great Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="rowContainer">
        <div className="BakeryGallery">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            // bakery Items have name, description, image, price
            BakeryItem(item, cartTotal, setCartTotal, cartItems, setCartItems)
          ))}
        </div>


        <div>
          <h2>Cart</h2>
          {
            /* TODO: render a list of items in the cart */
            Cart(cartTotal, setCartTotal, cartItems, setCartItems)
          }

        </div>
      </div>
    </div>
  );
}

function CartItem(item) {
  return (
    <div>
      <h2> {item.name} </h2>
      <p> {item.price} </p>
    </div >

  );
}

function Cart(cartTotal, setCartTotal, cartItems, setCartItems) {

  return (
    <div className="Cart">
      {console.log("cartItems: ", cartItems)}
      {cartItems.map((item) => (CartItem(item)))}
      <h1> CART TOTAL: {cartTotal}</h1>
    </div>
  );
}

function BakeryItem(item, cartTotal, setCartTotal, cartItems, setCartItems) {
  const [bakeryItemCount, setBakeryItemCount] = useState(0)
  return (
    <div className="BakeryItem">
      <h2> {item.name} </h2>
      <img src={item.image} height="300px" width="300px" ></img>
      <p> {item.description} </p>
      <p> {item.price} </p>
      <button onClick={() => {
        setBakeryItemCount(bakeryItemCount + 1);
        setCartTotal(cartTotal + item.price);
        setCartItems([...cartItems, item])
      }
      }>Add to cart!</button>

    </div >

  );
}

export default App;
