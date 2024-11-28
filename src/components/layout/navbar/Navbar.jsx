import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className={"container-navbar navbar"}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1727995204/images_hthelg.png"
            alt=""
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Link>
        <ul style={{ display: "flex", gap: "10px" }}>
          <Link style={{ listStyle: "none" }} to="/">
            Todas
          </Link>
          <Link style={{ listStyle: "none" }} to="/category/urbanas">
            Urbanas
          </Link>
          <Link style={{ listStyle: "none" }} to="/category/deportivas">
            Deportivas
          </Link>
        </ul>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </>
  );
};
