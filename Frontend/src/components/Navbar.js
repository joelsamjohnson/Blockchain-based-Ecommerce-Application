import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { ButtonContainer } from './Button';

const Navbar = ({ onLogout }) => {
    const location = useLocation();
    const userId = localStorage.getItem('user_id');

    // Check if the current page is the login page
    const isLoginPage = location.pathname === '/login';
    const isWelcomePage = location.pathname === '/';
    const handleLogoutClick = () => {
        onLogout(); // Call the logout function passed as a prop
    };

    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to='/ProductView'>
                <i className="fas fa-shopping-bag fa-2x" aria-hidden="true"></i>
            </Link>
            <div>
                <Link to="/ProductView" className="nav-link">
                    <h1 style={{ fontSize: 30, fontFamily: "Georgia, serif" }}>Trend-Warehouse</h1>
                </Link>
            </div>
            <div>
                <Link to="/" className="nav-link">
                    <i class="fa fa-info" aria-hidden="true"></i>
                </Link>
            </div>
            {/* Render the rest of the navbar only if it's not the login page */}
            {!isLoginPage && !isWelcomePage && (
                <div className='ml-auto'>
                    <Link to='/CartDetails'>
                        <ButtonContainer>
                            <span className="mr-2" style={{ color: "white", fontFamily: "Georgia, serif", fontSize: 18 }}>
                                <i style={{ marginRight: 10, fontSize: 20 }} className="fas fa-cart-plus" />
                                My cart
                            </span>
                        </ButtonContainer>
                    </Link>
                    <Link to='/UserProfile'>
                        <ButtonContainer>
                            <span className="mr-2" style={{ color: "white", fontFamily: "Georgia, serif", fontSize: 18 }}>
                                <i style={{ marginRight: 10, fontSize: 20 }} className="fas fa-user" />
                                User Profile
                            </span>
                        </ButtonContainer>
                    </Link>
                    <Link to={{pathname:'/AddProd'}} state={{ r_id: userId }}>                    
                        <ButtonContainer>
                            <span className="mr-2" style={{ color: "white", fontFamily: "Georgia, serif", fontSize: 18 }}>
                                <i style={{ marginRight: 10, fontSize: 20 }} className="fas fa-user" />
                                Add Product
                            </span>
                        </ButtonContainer>
                    </Link>
                    <ButtonContainer onClick={handleLogoutClick}>
                        <span className="mr-2" style={{ color: "white", fontFamily: "Georgia, serif", fontSize: 18 }}>
                            <i style={{ marginRight: 10, fontSize: 20 }} className="fas fa-sign-out-alt" />
                            Logout
                        </span>
                    </ButtonContainer>
                </div>
            )}
        </NavWrapper>
    );
};

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

export default Navbar;
