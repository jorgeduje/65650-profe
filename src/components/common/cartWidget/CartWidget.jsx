import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <FaCartShopping color="white" />
      <h3>{cart.length}</h3>
    </div>
  );
};

export default CartWidget;
