import React, { useEffect } from 'react'
import MedicineCard from './MedicineCard'
import "./Home.css"
import axios from "axios";
import list from '../data';

import { useState } from "react";
export default function Home() {
  const [Cart, setCart] = useState([{"id":-1}]);
  useEffect(() => {
    console.log(Cart)
    fetch("http://localhost:5000/", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(Cart)
    })
      .then((response) => {
        // Handle the response from the Flask backend
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.log("Error:", error);
      });

  }, [Cart])
  
  const handleClick=(medicine)=>{
    setCart([medicine]);
    
  }
  return (
    <div className='scroll_bg'>
      <div className="Card_container">
        {list.map((medicine)=>{
          medicine.buttontext = "Add to Cart";
          medicine.cart_quantity=0;
          if(medicine.name.includes("Scheduled")){
            return null
          }
          else{
            return (
              <MedicineCard medicine={medicine} handleClick={handleClick} />
            );
          }
        })}
        </div>
    </div>
  );
}
