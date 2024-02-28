import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeProduct, updateTotalAmount } from "../redux/cartSlice";

const ProductScreen = () => {
    const ref=useRef()
    const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {products.products.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <p>Price : {item.price}$</p>
            <p>Quantity :{item.quantity}</p>
            <button onClick={() => dispatch(increment(item.id))}>+</button>
            <button onClick={() => dispatch(decrement(item.id))}>-</button>
            <button onClick={()=>dispatch(removeProduct(item.name))}>Remove Product</button>
            
          </div>
        );
    })}
    <p>Total Amount : {products.total}$</p>
    <button onClick={()=>dispatch(updateTotalAmount())}>total Amount</button>
    </div>
  );
};

export default ProductScreen;
