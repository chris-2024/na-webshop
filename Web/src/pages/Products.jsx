import ProductBoxes from "../components/productBoxes";
import "./Product.css";

function Products() {
  return (
    <>
      <p>Products Page</p>
      <section className="content">
        <p>
          Välkommen till vårat häftiga utbud av produkter, kika och se vad som
          lockar dig!
        </p>
      </section>
      <ProductBoxes/>
      
    </>
  );
}

export default Products;
