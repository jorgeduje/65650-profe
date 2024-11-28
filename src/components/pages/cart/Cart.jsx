import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Aca van a ir las tarjetas del carrito</h1>
      <button>Limpiar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
