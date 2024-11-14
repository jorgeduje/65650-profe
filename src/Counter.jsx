import { useState, useEffect } from "react";

// UN COMPONENTE SE ACTUALIZA CUANDO CAMBIA UN ESTADO O SUS PROPS
const Counter = ({ darkMode }) => {
  // x[0] ---> variable --> contador
  // x[1] ---> setter  ---> funcion que cambia la variable

  const [contador, setContador] = useState(1); // [ variable, setter ]
  const [name, setName] = useState("pepito");

  // let contador = 1

  const sumar = () => {
    setContador(contador + 1); // 10 + 1 ---> 10 + 1 = contador
  };

  const changeName = () => {
    if (name === "pepito") {
      setName("juancito");
    } else {
      setName("pepito");
    }
  };

  useEffect(() => {
    console.log("se ejecuta");
    // UNA PETICION A UN SERVIDOR EN LA INDIA
    // UN FETCHING DE DATOS A JAPON
    console.log("ME CONECTE A JAPON");
  }, [contador]); // array de dependencias

  return (
    <div style={{ color: "red", margin: "20px" }}>
      <h1>contador = {contador}</h1>
      <button onClick={sumar}>sumar</button>
      <button onClick={changeName}>Cambiar nombre</button>
    </div>
  );
};

export default Counter;
