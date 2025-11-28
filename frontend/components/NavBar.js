import React, { useState } from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom"
import Modal from './Modal';
export default function NavBar() {
  const [displayfileModal, setdisplayfileModal] = useState(false)
  return (
    <div className="Container_Navbar">
      <div className="Text_Container">
        <div className="Text" id ="Meddisp">
          <Link to="/">
              <div className="words">Medicine Dispenser</div>
      
          </Link>
        </div>
        <div className='Text' id='Prescript'>
          <div className="words" onClick={()=>setdisplayfileModal(!displayfileModal)}>Prescription</div>
        </div>
        <div className="Text" id="Cart">
          <Link to="/cart">
            <div className="words">Cart</div>
          </Link>
        </div>
        {displayfileModal&&<Modal setdisplayfileModal={setdisplayfileModal}/>}
      </div>
      
    </div>
  );
}
