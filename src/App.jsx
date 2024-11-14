import { useState } from "react";
import Counter from "./Counter";
import { ItemListContainer } from "./ItemListContainer";

function App() {
  // booleano que me diga si esta en modo claro / oscuro
  const [darkMode, setDarkMode] = useState(true);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  console.log(darkMode);
  return (
    <div>
      <button onClick={changeMode}>Sol/Luna</button>
      <ItemListContainer darkMode={darkMode} />
      <Counter darkMode={darkMode} />
    </div>
  );
}

export default App;

// const counter = (a, b )=>{

// }

// counter(22, 5)
// counter(2 , 5)
// counter(21 , 51)
// counter(2 , 5)
