import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch.jsx";
import Categories from "../components/Categories";
import Hero from "../components/hero";
import "./home.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState();
  const { data: categories } = useFetch("/categories");

  const getCategoryLink = (categoryId) => `/products/${categoryId}`;

  return (
    <>
      <Hero />
      <section className="container">
        <h2>Utbud</h2>
        <nav className="categories">
          <ul>
            {categories &&
              categories.map((category) => (
                <li key={category.id}>
                  <NavLink
                    to={getCategoryLink(category.id)}
                    className={
                      selectedCategory === category.id
                        ? "selected-category"
                        : ""
                    }
                  >
                    {category.attributes.title}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Home;
