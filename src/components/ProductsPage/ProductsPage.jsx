// collection of your comp
import NavBar from "../NavBar/NavBar";
import ProductCate from "../products/ProductCate";
import SideBar from "../products/SideBar";

export default function ProductsPage() {
  return (
    <>
      <NavBar />
      <div
        className="sec2"
        style={{
          display: "flex",
          padding: "2em",
          justifyContent: "space-between",
        }}
      >
        <SideBar />
        <ProductCate />
      </div>
    </>
  );
}
