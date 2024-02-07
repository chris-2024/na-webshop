import { useParams } from "react-router-dom";
import "./product.css";

function Product() {
  const { productId, productSlug } = useParams();
  return (
    <>
      <section className="content">
        <div className="box">
          {productId}
          <br />
          {productSlug}
        </div>
      </section>
    </>
  );
}

export default Product;
