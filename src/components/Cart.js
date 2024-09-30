import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import ListItem from "./ListItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return cartItem.length === 0 ? (
    <h1 className="text-center m-4 p-4 text-2xl font-bold">Cart is Empty!!! Pls Add your food🥗🍟🍔</h1>
  ) : (
    <div className="text-center m-4 p-4">
      <div className="flex justify-center items-center gap-5">
        <h1 className="text-2xl font-bold">Cart - ({cartItem.length})</h1>
        <button
          onClick={handleClearCart}
          className="m-2 p-2 bg-green-600 text-white font-bold text-xl rounded-xl hover:bg-green-700"
        >
          Clear Cart
        </button>
      </div>
      <div className="w-[60%] m-auto">
        <ListItem items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
