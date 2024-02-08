import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';


function ProductView() {
    const [Products, setProducts] = useState([])
    const userId = localStorage.getItem('user_id');

    const navigate= useNavigate();
    const fetchProducts = async () => {
        const result = await axios.get('http://localhost:8000/api/product/');

        console.log(result.data)
        setProducts(result.data)    
    }
    
    
    const addCart = async (id) => {
        
        await axios({
            method: 'post',
            url:`http://127.0.0.1:8000/api/cart/${userId}/${id}/add/`,
        
          }).then(response=>{
            console.log(response.data);
            navigate('/CartDetails')
          })
    }
      

    useEffect(() => {
        fetchProducts();
    }, [])
   
    return (
         
        <div class="container mx-auto mt-4">
        <div class="row">
            {
                Products.map((Product, index) => (
                   
                    <div class="col-md-3" key={Product.id}>
                        <div class="card" style={{width: 260,marginTop:20,marginBottom:20}}>
                            <Link class="embed-responsive embed-responsive-4by3" to="/DeleteProd" state={{ id: Product.id,r_id:Product.user_id}}>
                                <img src={'http://127.0.0.1:8000' + Product.image}  class="card-img-top embed-responsive-item" alt="Product"/>
                            </Link>
                            
                        <div class="card-body">
                            <h5 style={{fontFamily:"arial"}} class="card-title">{Product.name}</h5>
                            <h6 style={{fontFamily:"arial"}} class="card-subtitle mb-2 text-muted">Price: Rs. {Product.price}</h6>
                            <p style={{fontFamily:"arial"}} class="card-text">Click on image to see details</p>
                            <button type="button" style={{fontFamily:"arial"}} variant="outlined"  className="btn btn-outline-primary mr-2" onClick={() => addCart(Product.id)}>
                                <i class="fas fa-cart-plus"></i> Add</button>
                                
                            <Link to={{pathname: '/CartDetails'}}>
                                <button style={{fontFamily:"arial"}} variant="outlined" className="btn btn-outline-primary float-right"><i class="fas fa-shopping-bag"></i> View</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                  
                ))

            }
            </div>
            </div>
        
     
    );
};
export default ProductView

