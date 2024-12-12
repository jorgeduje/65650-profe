import { useState } from "react";

import { useEffect } from "react";
import CardItem from "../../common/cardItem/CardItem";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { name } = useParams(); // {}

  const [items, setItems] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let referencia = productsCollection;
    if (name) {
      let unaParteDeLaColeccion = query(
        productsCollection,
        where("category", "==", name)
      );
      referencia = unaParteDeLaColeccion;
    }
    getDocs(referencia).then((res) => {
      let nuevoArray = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });

      setItems(nuevoArray);
    });
  }, [name]);

  // const rellenar = () => {
  //   let refCollection = collection(db, "products");

  //   products.forEach((elemento) => {
  //     // se agregue en cada vuelta el elemento a mi coleccion de productos
  //     addDoc(refCollection, elemento);
  //   });
  // };

  return (
    <div>
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

      {/* <button onClick={rellenar}>Rellenar base de datos</button> */}
    </div>
  );
};
