function ProductBoxes() {
  return (
    <section className="productBoxes">
      <div id="box1">
        <img id="SamsungS24" src="/S24.webp" alt="" />
        <h1 id="productTitleS24">Samsung Galaxy S24</h1>
        <p id="productDescriptionS24">Njut av den ultimata S24 från samsung!</p>
        <hr />
        <p id="productPriceS24">11.190kr</p>
      </div>
      <div id="box2">
        <img id="iPhone15" src="/iPhone-15.avif" alt="" />
        <h1 id="productTitleiPhone">iPhone 15</h1>
        <p id="productDescriptionIphone">
          Snabbare processor, bättre kamera och uppgraderat batteri. Njut!{" "}
        </p>
        <hr />
        <p id="productPriceIphone">15.000kr</p>
      </div>
    </section>
  );
}

export default ProductBoxes;
