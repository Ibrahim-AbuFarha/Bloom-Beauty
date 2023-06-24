import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();
export default CartContext;

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState("");

  //get user object from local storage

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) return console.log("no user");
    console.log(user);
    //to get the user id from local storage and set it for his cart
    axios
      .get(`http://localhost:3001/carts?userId=${user.id}`)
      .then(({ data }) => {
        console.log(data); //[{}]

        setCartItems(data[0].cartItems);
        setCartId(data[0].id);
      });
  }, []);

  //add items to the cart
  const addItem = (product) => {
    if (!user) return console.log("navigate to sign in page");
    let updatedCartItems;
    const isFound = cartItems.find((item) => {
      return item.id === product.id;
    });
// if the product found in cart just increase quantity
    if (isFound) {
      updatedCartItems = cartItems.map((item) => {
        return item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    }
    //else add it into cart
    if (!isFound) {
      updatedCartItems = [...cartItems, { ...product }];
    }
// req to update the cart items 
    axios
      .patch(`http://localhost:3001/carts/${cartId}`, {
        cartItems: updatedCartItems,
      })
      .then(() => {
        setCartItems(updatedCartItems);
      })
      .catch((err) => console.log(err));
    console.log("added");
  };

  //decrease item from cart

  const decreaseItem = (product) => {
    let updatedCartItems;
    if (product.quantity > 1) {
      updatedCartItems = cartItems.map((item) => {
        return item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
      // req to update the cart items 

      axios
        .patch(`http://localhost:3001/carts/${cartId}`, {
          cartItems: updatedCartItems,
        })
        .then(() => setCartItems(updatedCartItems));
    }

    if (product.quantity === 1) {
      removeItem(product);
    }
  };

  //remove item from cart
  const removeItem = (product) => {
    const deleteProduct = cartItems.filter((item) => {
      return item.id !== product.id;
    });
    //put and patch both edit
    //put overwrite
    //patch just edit without overwrite

    // req to update the cart items 
    axios
      .patch(`http://localhost:3001/carts/${cartId}`, {
        cartItems: deleteProduct,
      })
      .then(() => setCartItems(deleteProduct))
      .catch((err) => console.log(err));
  };
  // delete all the items
  const deleteAllItems = () => {
    axios
      .patch(`http://localhost:3001/carts/${cartId}`, {
        cartItems: [],
      })
      .then(() => setCartItems([]))
      .catch((err) => console.log(err));
  };
  //total price of products
  const totalPrice = () => {
    if (cartItems.length !== 0) {
      const total = cartItems.reduce(
        (acc, currItem) => acc + currItem.price * currItem.quantity,
        0
      );
      console.log(total);
      return total.toFixed(2);
    }
    return "";
  };
  const totalProducts = () => {
    if (cartItems.length !== 0) {
      const total = cartItems.reduce(
        (acc, currItem) => acc + currItem.quantity,
        0
      );
      console.log(total);
      return total;
    }
    return "";
  };

  //share all function using context
  const value = {
    addItem,
    removeItem,
    cartItems,
    totalPrice,
    deleteAllItems,
    decreaseItem,
    totalProducts,
  };

  console.log(cartItems);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
