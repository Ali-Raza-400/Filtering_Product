import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Products from "./components/products/Products";
import Recommended from "./components/Recomended/Recommended";
import "./App.css";
import products from "./db/data";
import Sidebar from "./components/sideBar/SideBar";
import Card from "./components/Card";
import Example1 from "./forms/htmlforms/Example1";
import ProductScreen from "./reduxUIPart/productScreen";
import CounterScreen from "./reducScreens/CounterScreen";
import BlogScreen from "./reducScreens/BlogScreem";
import BlogScreenWithRedux from "./reducScreens/blog/BlogScreenWithRedux";
import BlogForm from "./reducScreens/blog/blogForm";
import LearningObjects from "./components/LearningObjects";
import ProductListing from "./components/pagination/productListing";
import Form1 from "./components/learnungForms/form1";
import Dashboard from "./context/Dashboard";
const App = () => {
  //   const [selectedCategory, setSelectedCategory] = useState(null);

  //   // ----------- Input Filter -----------
  //   const [query, setQuery] = useState("");

  //   const handleInputChange = (event) => {
  //     setQuery(event.target.value);
  //   };

  //   const filteredItems = products.filter(
  //     (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  //   );

  //   // ----------- Radio Filtering -----------
  //   const handleChange = (event) => {
  //     setSelectedCategory(event.target.value);
  //   };

  //   // ------------ Button Filtering -----------
  //   const handleClick = (event) => {
  //     setSelectedCategory(event.target.value);
  //   };

  //   function filteredData(products, selected, query) {
  //     let filteredProducts = products;
  //     // Filtering Input Items
  //     if (query) {
  //       filteredProducts = filteredItems;
  //     }

  //     // Applying selected filter
  //    // Applying selected filter
  // if (selected) {
  //   console.log("Selected value:", selected);
  //   filteredProducts = filteredProducts.filter(
  //     ({ category, color, company, newPrice, title }) =>
  //       category === selected ||
  //       color === selected ||
  //       company === selected ||
  //       newPrice === selected ||
  //       title === selected
  //   );
  // }

  //     return filteredProducts.map(
  //       ({ img, title, star, reviews, prevPrice, newPrice }) => (
  //         <Card
  //           key={Math.random()}
  //           img={img}
  //           title={title}
  //           star={star}
  //           reviews={reviews}
  //           prevPrice={prevPrice}
  //           newPrice={newPrice}
  //         />
  //       )
  //     );
  //   }

  //   const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      {/* <Sidebar handleChange={handleChange} /> */}
      {/* <Nav handleInputChange={handleInputChange} query={query} /> */}
      {/* <Recommended handleClick={handleClick} /> */}
      {/* <Products result={result}   /> */}
      {/* <Example1/> */}
      {/* <ProductScreen/>*/}
      {/* <CounterScreen/> */}
      {/* <BlogForm/>
      <BlogScreenWithRedux/> */}
      {/* <LearningObjects/> */}
      {/* <ProductListing/> */}
      {/* <Form1/> */}
    <Dashboard/>
    </div>
  );
};

export default App;
