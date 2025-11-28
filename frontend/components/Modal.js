import React, { useState } from 'react'
import axios from "axios";
import "./Modal.css";
import { Link } from "react-router-dom";
function Modal({ setdisplayfileModal }) {
  const [fileplace, setFileplace] = useState(null);
  const changeFile = (e) => {
    setFileplace(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", fileplace);

    try {
      const response = await axios.post(
        "http://localhost:5000/uploadfile",
        formData
      );
      console.log(response.data);
      setdisplayfileModal(false);
      window.location.reload();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="modalplace">
      <div className="Modal_Container">
        <div className="fileplace">
          <div className="Filebutton">
            <input type="file" onChange={changeFile} />
            <Link to="/cart">
              <button className="uploadbutton" onClick={handleUpload}>
                Upload
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal