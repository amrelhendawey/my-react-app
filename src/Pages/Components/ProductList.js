import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data with a traditional function
  function fetchData() {
    axios
      .get('https://fakestoreapi.com/products')
      .then(function(response) {
        setProducts(response.data);
      })
      .catch(function(error) {
        setError(error.message);
      })
      .finally(function() {
        setLoading(false);
      });
  }

  // Using useEffect to run fetchData once after the component mounts
  useEffect(function() {fetchData();}, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h4 className="product-list">Product List</h4>
      <div className="product-container">
        {products.map(function(product) {
          return (
            <div key={product.id} className="product-card">
              <h5 className="product-title">{product.title}</h5>
              <img src={product.image} alt={product.title} />
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-description">{product.description}</p>
              <button className="buy-now">Buy Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
