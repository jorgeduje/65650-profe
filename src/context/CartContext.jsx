import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   // si esta , que no lo agregue
  //   // si no esta, que si lo agregue
  //   // let isInCart = cart.filter ( el => el.id === product.id ) // []
  //   // let isInCart = cart.find( el => el.id === product.id ) // elemento || undefined
  //   let isInCart = cart.some((el) => el.id === product.id); // booleano

  //   if (isInCart) {
  //     console.log("se ejecuta el if");
  //     // generar un nuevo array, igual que el anterior pero con un { } modificado
  //     // con ese array remplazar el anteriror

  //     let nuevoArray = cart.map((elemento) => {
  //       if (elemento.id === product.id) {
  //         return {
  //           ...elemento,
  //           quantity: elemento.quantity + product.quantity,
  //         };
  //       } else {
  //         return elemento;
  //       }
  //     }); // [{}{}{}]

  //     setCart(nuevoArray);
  //   } else {
  //     console.log("se ejecuta el else");
  //     setCart([...cart, product]);
  //   }
  // };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const resetCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    // filter ---> [] --> [] con los elementos que cumplan la condicion
    let nuevoArray = cart.filter((elemento) => elemento.id !== id);
    setCart(nuevoArray);
  };

  const getTotalAmount = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };

  const getTotalItems = () => {};

  let data = {
    addToCart,
    cart,
    resetCart,
    deleteById,
    getTotalAmount,
    getTotalItems,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

{
  /* <ItemDetail title sotck={} x={} /> 
<Checkout title sotck={} x={} / > */
}

{
  /* <CartContextProvider>



</CartContextProvider> */
}
