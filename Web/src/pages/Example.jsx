import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExItem from "../components/ExItem";
import "./Example.css";

function Example() {
  const { categoryId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(
    parseInt(categoryId, 10) || null
  );

  useEffect(() => {
    // Update the URL when selectedCategory changes
    if (selectedCategory !== null) {
      window.history.replaceState(null, null, `/example/${selectedCategory}`);
    } else {
      window.history.replaceState(null, null, "/example");
    }
  }, [selectedCategory]);

  /* prettier-ignore */
  const products = [
    { id: 1, title: "Product 1", description: "Description 1", categoryId: 1 },
    { id: 2, title: "Product 2", description: "Description 2", categoryId: 1 },
    { id: 3, title: "Product 3", description: "Description 3", categoryId: 2 },
    { id: 4, title: "Product 4", description: "Description 4", categoryId: 2 },
    { id: 5, title: "Product 5", description: "Description 5", categoryId: 3 },
    { id: 6, title: "Product 6", description: "Description 6", categoryId: 3 },
    { id: 7, title: "Product 7", description: "Description 7", categoryId: 1 },
    { id: 8, title: "Product 8", description: "Description 8", categoryId: 1 },
    { id: 9, title: "Product 9", description: "Description 9", categoryId: 1 },
    { id: 10, title: "Product 10", description: "Description 10", categoryId: 2 },
    { id: 11, title: "Product 11", description: "Description 11", categoryId: 2 },
    { id: 12, title: "Product 12", description: "Description 12", categoryId: 2 },
    { id: 13, title: "Product 13", description: "Description 13", categoryId: 3 },
    { id: 14, title: "Product 14", description: "Description 14", categoryId: 3 },
    { id: 15, title: "Product 15", description: "Description 15", categoryId: 3 },
  ];

  const filteredProducts = products.filter(
    (product) => product.categoryId === selectedCategory
  );

  const categories = [1, 2, 3];

  return (
    <>
      <section className="content categories">
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <div
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "active" : ""}
              >
                Category {category}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="content">
        {selectedCategory !== null && (
          <>
            {filteredProducts.map((product) => (
              <ExItem key={product.id} product={product} />
            ))}
            <div className="box box-expand">Låda</div>
            <div className="box box-expand">Låda</div>
          </>
        )}
      </section>
    </>
  );
}

export default Example;
