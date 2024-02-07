import React from "react";

function Categories({ categories, onSelectCategory, selectedCategory }) {
  return (
    <nav className="categories">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <div
              onClick={() => onSelectCategory(category.id)}
              className={selectedCategory === category.id ? "active" : ""}
            >
              {category.attributes.title}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories;
