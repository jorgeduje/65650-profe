import Navbar from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemList/ItemListContainer";
import FetchingData from "./FetchingData";

function App() {
  return (
    <div>
      <Navbar />
      {/* <ItemListContainer /> */}
      <FetchingData />
    </div>
  );
}

export default App;
