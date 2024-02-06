import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Divider from "@material-ui/core/Divider";
import "bootstrap/dist/css/bootstrap.min.css";
import { useWeb3React } from '@web3-react/core'

const PaymentScreen = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [isSave, setSave] = useState(false)
  const [acc, setacc] = useState("")
  const [response, setResponse] = useState([])
  const [trans, settrans] = useState(false);

  const { library } = useWeb3React();
  const userId = localStorage.getItem('user_id');

  async function connect() {
    if (window.ethereum) {
      console.log('detected');

      try {
        await window.ethereum.enable()

      } catch (ex) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setacc(accounts[0]);
    console.log(accounts[0], "abc");
     await transaction(accounts[0]);

  }
  async function transaction(acc) {
    console.log(acc)
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/token/${userId}/${acc}/`);
      settrans(true);
      console.log(response.data);
      setResponse(response.data);
    } catch (error) {
      console.error('Error performing transaction:', error);
      // Handle error as needed
    }
  }
  
  async function connect() {
    if (window.ethereum) {
      console.log('MetaMask detected');
  
      try {
        await window.ethereum.enable();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setacc(accounts[0]);
        console.log(accounts[0]);
        await transaction(accounts[0]); // Call transaction function after enabling and getting accounts
      } catch (error) {
        console.error('Error connecting or getting accounts:', error);
        // Handle error as needed
      }
  
    } else {
      alert('MetaMask not detected');
    }
  }
  


  const addShippingAddress = async () => {
    let formField = new FormData()
    formField.append('address', address)
    formField.append('city', city)
    formField.append('state', state)
    formField.append('postalCode', postalCode)
    console.log(formField.getAll('city'));
    await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/order/1/ship/',
      data: {
        "address": address,
        "city": city,
        "state": state,
        "postal_code": postalCode
      }
    }).then(response => {
      setSave(true);
      console.log(response.data);

    })
  }

  return (

    <div className="container">
      <div className="w-75 mx-auto shadow p-5">

        <h5 style={{ color: 'black', fontFamily: "arial", fontSize: 19 }}>Add Shipment address :</h5>
        <Divider /><br></br>
        <div className="form-group">
          <input style={{ fontFamily: "arial", fontSize: 14 }}
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter shipping Address :"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input style={{ fontFamily: "arial", fontSize: 14 }}
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter City :"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input style={{ fontFamily: "arial", fontSize: 14 }}
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter State :"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input style={{ fontFamily: "arial", fontSize: 14 }}
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Postal Code :"
            name="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <button style={{ fontFamily: "arial", fontSize: 14 }} variant="outlined"
          className="btn btn-outline-primary mr-2" disabled={isSave ? true : false} onClick={() => addShippingAddress()}>
          {isSave ? (
            <p className="text-capitalize mb-0" disabled>
              {""}
              Saved
            </p>
          ) : (
            <p className="text-capitalize mb-0" >save</p>
          )}</button><br></br><br></br>
        <Divider /><br></br>
        <h5 style={{ color: 'black', fontFamily: "arial", fontSize: 19 }}>Payment :</h5>
        <p style={{ fontFamily: "arial", fontSize: 14 }}>NFT related transactions are initiated using metamask so make sure  pre installed.</p>
        <p style={{ fontFamily: "arial", fontSize: 14 }}>If not !! install it from the here <i className="fas fa-arrow-right"></i> {' '}
          <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">Install Metamask</a>
        </p>

        <p style={{ color: "red", fontFamily: "arial", fontSize: 14 }}>Wallet Address:{acc}</p>

        <button style={{ fontFamily: "arial", fontSize: 14 }} className="btn btn-success btn-block"
          onClick={() => connect()}>Proceed to Pay</button><br></br>
        <div >
          {trans ? (
            <p style={{ color: 'red', fontFamily: "arial", fontSize: 14 }}>
              {""}
              Transaction Completed <br></br>Hash id per Token id is as follows :
            </p>
          ) : (
            <p></p>
          )}
        </div>
        <p>{response.map((i) =>
        (<div style={{ color: 'red', fontFamily: "arial", fontSize: 14 }}>{
          `${Object.keys(i)[0]}`} : {Object.values(i)[0]
          }</div>))}</p>
        <div >
          {trans ? (
            <p style={{ color: 'red', fontFamily: "arial", fontSize: 14 }}>
              {""}
              Your User Profile is updated with your recent purchase !! <br></br>
              You can check your payment status using Hash id in the link given
              <a href="https://sepolia.etherscan.io/"> HERE</a>!!
            </p>
          ) : (
            <p></p>
          )}
        </div>

      </div>
    </div>

  );
};

export default PaymentScreen;