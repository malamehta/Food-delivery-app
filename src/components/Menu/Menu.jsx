import React, { useEffect, useState } from "react";
import "./Menu.css";
import "../../App.css";
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../../slices/cartSlice";
import {data} from '../../data'
import {Link} from 'react-router-dom'

export default function Menu() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  

  // const getItems = async () => {
  //   const check = localStorage.getItem("popular");
  //   if (check) {
  //       setItems(JSON.parse(check))
  //   } else {
  //       const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=4668d4e96ea04b7bb1277181973ab121&number=9`);
  //       const response = await api.json();
  //       console.log(response)
  //       localStorage.setItem("popular", JSON.stringify(response.recipes))
  //       setItems(response.recipes);
  //       console.log(response.recipes)
  //   }
    
  // };
  // useEffect(() => {
  //   getItems();
  // }, []);
  return (
    <>
      <header className="menu-header">
        <nav className="navbar">
          <div className="navbar-logo">
            <h1>LOGO</h1>
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <Link to={'/Menu'} >menu</Link>
              </li>
              <li>
                <Link to={'/Cart'} href="/Cart">
                  cart<span className="num">{cartTotalQuantity}</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="products">
        {data &&
          data?.map((product) => (
            <div key={product.id} className="product">
              {/* <img src={product.image} alt={product.name}/> */}
              <img src={product.image} alt={product.name}/>
              <h3 >{product.name}</h3>
              {/* <h3 >{product.title}</h3> */}
              <div className="details">
                {/* <span>{product.desc}</span> */}
                <span className="price" >${product.price}</span>
                {/* <span className="price" >${product.pricePerServing}</span> */}
              </div>
              <button
                onClick={() =>{
                  dispatch(addToCart(product))
                  dispatch(getTotals())
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
