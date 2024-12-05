import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, resetCart, deleteById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {cart.map((elemento) => {
          return (
            <div
              key={elemento.id}
              style={{ border: "2px solid black", width: "200px" }}
            >
              <h2>nombre: {elemento.title}</h2>
              <h3>precio: {elemento.price}</h3>
              <h3>cantidad: {elemento.quantity}</h3>
              <button onClick={() => deleteById(elemento.id)}>eliminar</button>
            </div>
          );
        })}
      </div>
      {total !== 0 && <h2>El total a pagar es {total}</h2>}

      <button onClick={resetCart}>Limpiar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;

// const sumar = a =>{
//   return a + 2
// }
// sumar( 10 )
