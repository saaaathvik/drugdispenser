import React, { useEffect, useState } from "react";
import axios from "axios";
import MedicineCard from "./MedicineCard";
import "./Home.css";
export default function Cart() {
  const [cartproducts, setcartproducts] = useState([]);
  const [buttonclick, setButtonclick] = useState(0);
  useEffect(() => {

    fetchdata();
  }, [buttonclick]);
  const fetchdata = () => {
      axios
        .get("http://localhost:5000/getcart")
        .then((response) => {
          setcartproducts(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  const handleClick = (product) => {
    
    axios.delete("http://localhost:5000/delcart", {
      headers: {
        "Content-Type": "application/json",
      },
      data: product,
    })
      .then(() => {
        
    setButtonclick(buttonclick + 1);
   })
      .catch((err) => {
        console.log(err);
      });
      
  };
  return (
    <div className="scroll_bg">
      <div className="Card_container">
        {cartproducts.map((product) => {
          product.buttontext = "Remove";

          return <MedicineCard medicine={product} handleClick={handleClick} reload={buttonclick}/>;
        })}
      </div>
    </div>
  );
}
