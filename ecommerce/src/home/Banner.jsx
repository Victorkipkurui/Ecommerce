import React, { useState, useEffect } from 'react';
import productData from "../products.json";
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';

const title = (
  <h2>Search Your Products from our <span>Thousands</span> of Products</h2>
);
const desc = 'We have the largest collection of products';

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More than 2000 Merchants",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterProducts, setFilterProducts] = useState(productData);

  useEffect(() => {
    // Filter products based on search input
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilterProducts(filtered);
  }, [searchInput]); // Runs when searchInput changes

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
  };

  return (
    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
          {title}
          <form>
            <SelectedCategory select={'all'}></SelectedCategory>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search Your Product'
              value={searchInput}
              onChange={handleSearch}
            />
            <button type='submit'><i className="icofont-ui-search"></i></button>
          </form>
          <p>{desc}</p>
          <ul className='lab-ul'>
            {searchInput &&
              filterProducts.map((product, i) => (
                <li key={product.id}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
