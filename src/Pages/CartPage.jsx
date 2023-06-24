import Cart from "../components/cart/Cart";
import { CartProvider } from "../store/cartContext";
function CartPage() {
  return (
    <>
      <CartProvider>
        <Cart />
      </CartProvider>
    </>
  );
}

export default CartPage;
