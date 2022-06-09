import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../utils/api";



const Home = () => {
    const [currentCategories, setCurrentCategories] = useState([{category_name: 'Electronics'}])

    useEffect(() => {
        fetchCategories().then(({categories}) => {
          setCurrentCategories(categories);
        });
      }, []);


      return (
          <>
          <h2>Categories</h2>
          <ul>
              {currentCategories.map((category) => {
                  return (<div className="Category">
                  <h3>{category.category_name}</h3>
                  <Link to="/items?category_name=:category_name">Items</Link>
                  </div>)
              })}
          </ul>
          </>
      )
    
}


export default Home;