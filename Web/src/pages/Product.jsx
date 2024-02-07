import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import useFetch from "../hooks/useFetch.jsx";
import "./product.css";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  const { data: productData } = useFetch(`/products/${productId}?populate=*`);

  useEffect(() => {
    if (productData) {
      const simplifiedProduct = {
        id: productData.id,
        ...productData.attributes,
      };
      setProduct(simplifiedProduct);
    }
  }, [productData]);

  const imgSrc =
    import.meta.env.VITE_BASE_URL + product?.img?.data?.attributes?.url || null;

  const formattedPrice = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  }).format(product?.price);

  const addProductToCart = () => {
    if (product !== null) {
      addToCart(product);
    }
  };

  return (
    <>
      <section className="content">
        {product !== null && (
          <div className="product-container">
            <div className="product-image">
              <img src={imgSrc} alt={product?.title} />
            </div>
            <div className="product-details">
              <h3>{product?.title}</h3>
              <p>{formattedPrice}</p>
              <button className="buy-button" onClick={addProductToCart}>
                Lägg i varukorg
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Product;
