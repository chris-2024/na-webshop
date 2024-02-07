import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.jsx";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";

function Products() {
  const { categoryId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(
    parseInt(categoryId, 10) || null
  );

  const { data: categories } = useFetch("/categories");

  useEffect(() => {
    // Update the URL when selectedCategory changes
    if (selectedCategory !== null) {
      window.history.replaceState(null, null, `/products/${selectedCategory}`);
    } else {
      window.history.replaceState(null, null, "/products");
    }
  }, [selectedCategory]);

  const { data: categoryData } = useFetch(
    selectedCategory
      ? `/categories/${selectedCategory}?populate[products][populate]=*`
      : null
  );

  const productsData = categoryData?.attributes?.products?.data || [];

  const simplifiedProducts = productsData.map((product) => ({
    id: product.id,
    ...product.attributes,
  }));

  return (
    <>
      <Categories
        categories={categories || []}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <section className="content">
        {selectedCategory !== null && (
          <>
            {simplifiedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        )}
      </section>
    </>
  );
}

export default Products;
