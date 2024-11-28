import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className={"container-navbar navbar"}>
        <img
          src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1727995204/images_hthelg.png"
          alt=""
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <ul style={{ display: "flex", gap: "10px" }}>
          <li style={{ listStyle: "none" }}>Todas</li>
          <li style={{ listStyle: "none" }}>Urbanas</li>
          <li style={{ listStyle: "none" }}>Deportivas</li>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};
