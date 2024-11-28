import { useState } from "react";
import { products } from "../../../products";
import { useEffect } from "react";
import CardItem from "../../common/cardItem/CardItem";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let isLogged = true;
      if (isLogged) {
        resolve(products);
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
  }, []);

  return (
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
  );
};
