import { useState } from "react";
import Counter from "./Counter";
import { ItemListContainer } from "./ItemListContainer";

function App() {
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
