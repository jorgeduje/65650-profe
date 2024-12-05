import { useState } from "react";
import { products } from "../../../products";
import { useEffect } from "react";
import CardItem from "../../common/cardItem/CardItem";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { name } = useParams(); // {}

  const [items, setItems] = useState([]);

  useEffect(() => {
    const arrayFiltrado = products.filter(
      (elemento) => elemento.category === name
    );
    const getProducts = new Promise((resolve, reject) => {
      let isLogged = true;
      if (isLogged) {
        setTimeout(() => {
          resolve(name ? arrayFiltrado : products);
        }, 2000);
      } else {
        reject({ message: "ocurrio un error" });
      }
    });

    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  // if (items.length === 0) {
  //   return <h1>Cargando......</h1>;
  // }

  return (
    <div>
      <h2>Esta es mi tienda</h2>
      {items.length === 0 ? (
        <h1>Cargando......</h1>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {items.map((elemento) => {
            return <CardItem key={elemento.id} elemento={elemento} />;
          })}
        </div>
      )}

      <h3>Otra cosa</h3>
    </div>
  );
};
