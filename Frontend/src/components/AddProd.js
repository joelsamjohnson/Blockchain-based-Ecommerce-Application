import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const AddProd = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { r_id: r_Id } = location.state;
  const [image, setImage] = useState(null)
  const [name, setName] = useState(null)
  const [price, setPrice] = useState(null)
  const [description, setDescription] = useState(null)
  const [warranty_period, setWarranty_period] = useState(null)

  const addNewProduct = async () => {
    let formField = new FormData();
    if (name) formField.append('name', name);
    if (price) formField.append('price', price);
    if (description) formField.append('description', description);
    if (warranty_period) formField.append('warranty_period', warranty_period);
    if (image) formField.append('image', image);
    formField.append('r_id', r_Id)

    try {
      const response = await axios({
        method: 'post',
        url: `http://127.0.0.1:8000/api/product/${r_Id}/add/`,
        data: formField
      });
      
      console.log(response.data);
      navigate('/ProductView');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  }



  return (
    <div className="container">
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4" style={{ fontFamily: "arial" }}>Add Product</h2>
          <div className="form-group">
            <label style={{ fontFamily: "arial", fontWeight: 500 }}>Upload Product Image :</label><br></br>
            <input style={{ fontFamily: "arial", backgroundColor: "white", fontSize: 14 }} type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <label style={{ fontFamily: "arial", fontWeight: 500 }}>Product Name :</label><br></br>
          <div className="form-group">
            <input style={{ fontFamily: "arial", fontSize: 14 }}
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label style={{ fontFamily: "arial", fontWeight: 500 }}>Add Product Price (Without any special character):</label><br></br>
          <div className="form-group">
            <input style={{ fontFamily: "arial", fontSize: 14 }}
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Price (eg 50000)"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <label style={{ fontFamily: "arial", fontWeight: 500 }}>Warranty period :</label><br></br>
          <div className="form-group">
            <input style={{ fontFamily: "arial", fontSize: 14 }}
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Warranty period"
              name="warranty_period"
              value={warranty_period}
              onChange={(e) => setWarranty_period(e.target.value)}
            />
          </div>
          <label style={{ fontFamily: "arial", fontWeight: 500 }}>Product Description :</label><br></br>
          <div className="form-group">
            <input style={{ fontFamily: "arial", fontSize: 14 }}
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button style={{ fontFamily: "arial", fontWeight: 500 }} className="btn btn-primary btn-block" type="button" onClick={addNewProduct}>Add Product</button>


        </div>
      </div>
    </div>
  );
};

export default AddProd;