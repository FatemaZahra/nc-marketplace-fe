import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../utils/api";
import NewCategory from "./PostCategory";

const Home = () => {
  const [currentCategories, setCurrentCategories] = useState([
    { category_name: "Electronics" },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then(({ categories }) => {
      setCurrentCategories(categories);
      setIsLoading(false)
    });
  }, []);

  if(isLoading) { return <p>Loading...</p>}

  return (
    <>
      <h2>Categories</h2>
      <ul>
        {currentCategories.map((category) => {
          return (
            <div className="Category">
              <h3>{category.category_name}</h3>
              <Link to={`/items/${category.category_name}`}>Items</Link>
            </div>
          );
        })}
      </ul>
      <NewCategory setCurrentCategories={setCurrentCategories} currentCategories={currentCategories}/>
    </>
  );
};

export default Home;
