import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div style={{ color: "red", margin: "20px" }}>
      <button onClick={restar}>restar</button>
      <h1>contador = {contador}</h1>
      <button onClick={sumar}>sumar</button>
    </div>
  );
};

export default Counter;
