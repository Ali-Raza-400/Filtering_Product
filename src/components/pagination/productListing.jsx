import React, { useState } from "react";
import data from "../../db/data";

const ProductListing = () => {
    const productPerPage=8;
    const [currentPage,setCurrentPage]=useState(1);
    const lastIndex=currentPage*productPerPage;
    const firstIndex=lastIndex-productPerPage;
    const currentProduct=data.slice(firstIndex,lastIndex);
    const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
  console.log("data=====>", data.length);
  return (
    <div>
      {currentProduct.map(({ title }) => {
        return <p>{title}</p>;
      })}
    <div>
      {/* render pagination number page 1,2,3 */}
 {currentPage>1 &&     <button onClick={() => paginate(currentPage-1)}>back</button>}
      <button onClick={() => paginate(1)}>1</button>
      <button onClick={() => paginate(2)}>2</button>
      <button onClick={() => paginate(3)}>3</button>
      <button onClick={() => paginate(4)}>4</button>
     { currentPage<data.length/8 && <button onClick={() => paginate(currentPage+1)}>Next</button>}
    </div>
    </div>
  );
};

export default ProductListing;
