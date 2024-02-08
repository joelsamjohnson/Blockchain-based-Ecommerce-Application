import { useState } from 'react';
import React from 'react'
import Carousel from 'react-bootstrap/carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './welcomepage.css'
import { Link } from 'react-router-dom'
import Image3 from '../../components/images/3.jpg'
import Image4 from '../../components/images/4.jpg'
import Image5 from '../../components/images/5.jpg'
import Image6 from '../../components/images/6.jpg'
import Image7 from '../../components/images/7.jpg'
import Image9 from '../../components/images/9.jpg'
import Image10 from '../../components/images/10.jpg'
import Image17 from '../../components/images/17.jpg'
import Image18 from '../../components/images/18.jpg'
import Image19 from '../../components/images/19.jpg'
import Image20 from '../../components/images/20.jpg'
import Image23 from '../../components/images/23.jpg'
import Image24 from '../../components/images/24.jpg'
import Image25 from '../../components/images/25.jpg'
import Image26 from '../../components/images/26.jpg'
import Image27 from '../../components/images/27.jpg'
import Image28 from '../../components/images/28.jpg'
import Image30 from '../../components/images/30.jpg'
import Image31 from '../../components/images/31.jpg'
import Image32 from '../../components/images/32.jpg'
import Image33 from '../../components/images/33.jpg'
import Image34 from '../../components/images/34.jpg'
import Image35 from '../../components/images/35.jpg'
import Image36 from '../../components/images/36.jpg'
import Image39 from '../../components/images/39.jpg'
import Image40 from '../../components/images/40.jpg'


function WelcomePage() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='home'>
      <div className="wrapper">
        <section class="hero1">
          <div class="intro-text">
            <h1>
              <span class="hear"> Welcome to Trend-Warehouse </span> <br />
            </h1>
            <h5>
              <span class="hear">A blockchain e-commerce platform for buying products with Warranty NFTs </span>
            </h5>
            <p>
              <span class="hear">
              Our website is capable of tracking all the transactions done using metamask and  <br />
              on resale, the product’s ownership is updated both in the database and contract.
              </span>
              </p> 
          </div>
        </section>

        <div className="herosection">
          <div className="hero1">
            <Link to={{ pathname: '/ProductView' }}>Proceed to Website</Link>
          </div>
        </div>
        <div className="herosection">
          <div className="hero1">
            <h1>Instructions on how to use the Application</h1>
          </div>
        </div>


        <Carousel className="dark-carousel" activeIndex={index} onSelect={handleSelect} slide={false}>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image3} alt="Homepage" />
            <Carousel.Caption>
              <h5>Ecommerce Homepage</h5>
              <p>Click on the image to view details.</p>
              <p> Add to cart by clicking the 'Add' button.</p>
              <p> Click on 'Cart' to view cart</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image7} alt="Product Details" />
            <Carousel.Caption>
              <h5>Product Description</h5>
              <p>Click on Add to cart</p>
              <p>Click on Go to Cart</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image4} alt="Details" />
            <Carousel.Caption>
              <h5>Viewing Cart</h5>
              <p>You can add more items to the cart or Clear Cart, or Proceed with your Order</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image9} alt="Metamask" />
            <Carousel.Caption>
              <h5>Install Metamask</h5>
              <p>Click on Install Meta Mask Extension. Get Extension and install after downloading.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image10} alt="Create" />
            <Carousel.Caption>
              <h5>Create new Metamask wallet</h5>
              <p>Agree to terms and conditions. Create password and skip account security to make new wallet</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image17} alt="Network" />
            <Carousel.Caption>
              <h5>Change network</h5>
              <p>Change the network of the wallet by clicking on the drop down menu</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image19} alt="Sepolia" />
            <Carousel.Caption>
              <h5>Sepolia Network</h5>
              <p>Click on show test networks, Sepolia and then click Add Network.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image6} alt="Complete Transaction" /> 
            <Carousel.Caption>
              <p>Press back to go the Payment screen and click on Proceed to Payment</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image20} alt="Connect to Metamask Wallet" /> 
            <Carousel.Caption>
              <p>Enter yourpassword, press Unlock, next and then Connect to your wallet</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="herosection">
          <div className="hero1">
            <h1>How to import NFT into Metamask Wallet</h1>
          </div>
        </div>

        <Carousel className="dark-carousel" activeIndex={index} onSelect={handleSelect} slide={false}>
          <Carousel.Item>
            <img className="d-block w-100"
          src={Image24} alt="Transaction Completed" />
            <Carousel.Caption>
              <h5>Successful transaction</h5>
              <p>The transaction upon completion will give Token ID of the product
                and Hash ID of the transaction.
              </p>
              <p>Copy one Hash ID</p>
              <p>Right click on the HERE hyperlink and open in new tab</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image25} alt="Etherscan.io" />
            <Carousel.Caption>
              <h5>Etherscan.io</h5>
              <p5>You can use Etherscan blockchain explorer to explore transactions on the Ethereum blockchain including transaction history, address information, block information, token information, smart contracts, and more. </p5>
              <p>Paste the HashID into the search box and click the search button.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image23} alt="Transaction Details" />
            <Carousel.Caption>
              <h5>Transaction Details</h5>
              <p>On the individual transaction page, you can see the transaction’s details.</p>
              <p>This includes ETH spent on gas, the smart contract used, the recipient wallet address, and the transaction time, date, and amount.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image34} alt="NFT Details" />
            <Carousel.Caption>
              <h5>Click on NFT</h5>
              <p5>The NFT page displays details such as properties and trading history for a specific token ID in an NFT contract.</p5>
              <p>Copy the Contract address and remember the Token ID.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image36} alt="Transaction Details" />
            <Carousel.Caption>
              <h5>Transaction Details</h5>
              <p>Press back, scroll down and Click to show more</p>              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image27} alt="Decode Input Data" />
            <Carousel.Caption>
              <h5>Click on Decode Input Data</h5>
              <p>This shows the input parameters of the NFT mint function</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image30} alt="Copy ipfs Gateway URI" />
            <Carousel.Caption>
              <p>Copy the ipfs URL from start until ".../ipfs/"</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image35} alt="Metamask Settings" />
            <Carousel.Caption>
              <h5>Go to Metamask settings</h5>
              <p>Click on the three dots button at the top right corner.</p>
              <p>In the dropdown menu, go to settings. In the search box, type IPFS and click on the first result</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image31} alt="IPFS settings" />
            <Carousel.Caption>
              <h5>Change ipfs gateway URI</h5>
              <p>Paste the link "https://harlequin-added-guppy-784.mypinata.cloud/ipfs/" into the textbox.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image32} alt="Toggle settings" />
            <Carousel.Caption>
              <p>Enable Display NFT media and Autodetect NFTs.</p>
              <p>Enable both these toggles and then close the settings menu</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image28} alt="Copy address" />
            <Carousel.Caption>
              <h5>Smart Contract address</h5>
              <p>In transaction details page, copy the address with a green tick mark next to it</p>
              <p>Remember the ERC-721 Token ID displayed in square brackets.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image33} alt="Import NFT" />
            <Carousel.Caption>
              <h5>Import NFT</h5>
              <p>Open Metamask again and click on NFTs tab.</p>
              <p>Click on Import NFT</p>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img className="d-block w-100"
          src={Image39} alt="Paste address" />
            <Carousel.Caption>
              <p>Paste the address copied from transaction details website into the address field</p>
              <p>Enter the ERC-721 Token ID and Click on Import</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
          src={Image40} alt="NFT" />
            <Carousel.Caption>
              <h5>NFT displayed</h5>
              <p>You can see your NFT in your Wallet</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div >
  )
}

export default WelcomePage