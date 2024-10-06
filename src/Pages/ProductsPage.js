import React from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import ProductList from './Components/ProductList';
import MyComponent from './Components/MyComponent';
import Footer from './Components/Footer';
const ProductsPage = () => {
  return (
    <div>
      <Nav />
      <Home />
      <ProductList />
      <MyComponent />
      <Footer />
    </div>
  );
};

export default ProductsPage;
