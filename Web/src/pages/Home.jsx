import { NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch.jsx";
import Hero from "../components/hero";
import "./home.css";

function Home() {
  const { data: categories } = useFetch("/categories");

  const getCategoryLink = (categoryId) => `/products/${categoryId}`;

  return (
    <>
      <Hero />
      <section className="container">
        <nav className="categories">
          <ul>
            {categories &&
              categories.map((category) => (
                <li key={category.id}>
                  <NavLink to={getCategoryLink(category.id)}>
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
