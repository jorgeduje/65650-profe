import { Link } from "react-router-dom";
import "./cardItem.css";
const CardItem = ({ elemento }) => {
  return (
    <div
      style={{ border: "2px solid black", width: "300px", height: "300px" }}
      key={elemento.id}
    >
      <img src={elemento.imageUrl} style={{ width: "100px" }} alt="" />

      <h3>{elemento.title}</h3>

      <h4>{elemento.description}</h4>

      <h4>{elemento.price}</h4>
      <Link to={`/detail/${elemento.id}`}>Ver detalle</Link>
    </div>
  );
};

export default CardItem;
