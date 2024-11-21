import "./cardItem.css";
const CardItem = ({ elemento }) => {
  return (
    <div style={{ border: "2px solid black" }} key={elemento.id}>
      <img src={elemento.imageUrl} alt="" />

      <h3>{elemento.title}</h3>

      <h4>{elemento.description}</h4>

      <h4>{elemento.price}</h4>
    </div>
  );
};

export default CardItem;
