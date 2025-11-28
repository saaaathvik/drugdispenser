import  { useState } from 'react'
import "./MedicineCard.css"

export default function MedicineCard({ medicine, handleClick, buttonclick }) {
  const { name, Companyname, quantity, cost, buttontext, cart_quantity } =
    medicine;
  const [dummy, setdummy] = useState(0);

  return (
    <div className="MedicineContainer">
      <div className="buttonName">
        <div className="Med_Name">{name}</div>
        <button className="CartButton">
          <div
            className="Buttontext"
            onClick={() => {
              handleClick(medicine);
              setdummy(buttonclick);
            }}
          >
            {buttontext}
          </div>
        </button>
      </div>
      <div className="Comp_name">{Companyname}</div>
      <div className="Med_quant">{quantity}</div>
      <div className="costquant">
        <div className="Med_cost">₹{cost}</div>
        <div className="quantity">
          {cart_quantity === 0 ? null : cart_quantity}
        </div>
      </div>
    </div>
  );
}
