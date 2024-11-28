import { useState } from "react";
import { products } from "../../../products";
import { useEffect } from "react";
import CardItem from "../../common/cardItem/CardItem";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { name } = useParams(); // {}

  // truthy | falsy

  // name -->  undefined ----> todos
  // name -->  string  ----> una parte
  // if(name){
  //   // filtro y muestro una porcion del array
  // }else{
  //   // no filtro y muestro todo
  // }

  const [items, setItems] = useState([]);

  useEffect(() => {
    const arrayFiltrado = products.filter(
      (elemento) => elemento.category === name
    );
    const getProducts = new Promise((resolve, reject) => {
      let isLogged = true;
      if (isLogged) {
        resolve(name ? arrayFiltrado : products);
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
