import { useState, useEffect } from "react";

const Counter = ({ darkMode }) => {
  const [contador, setContador] = useState(1); // [ variable, setter ]
  const [name, setName] = useState("pepito");

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
    console.log("ME CONECTE A JAPON");
  }, [contador]);

  return (
    <div style={{ color: "red", margin: "20px" }}>
      <h1>contador = {contador}</h1>
      <button onClick={sumar}>sumar</button>
      <button onClick={changeName}>Cambiar nombre</button>
    </div>
  );
};

export default Counter;
