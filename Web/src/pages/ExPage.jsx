import { useParams } from "react-router-dom";
import "./Example.css";

function ExPage() {
  const { productId } = useParams();
  return (
    <>
      <section className="content">
        <div className="box">{productId}</div>
      </section>
    </>
  );
}

export default ExPage;
