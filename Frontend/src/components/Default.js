import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Default = () => {
    const location = useLocation();

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                    <h1 className="display-3">404</h1>
                    <h1>Error</h1>
                    <h2>Page Not Found</h2>
                    <h3>The requested URL <span className="text-danger">{location.pathname}</span> was not found</h3>
                    {/* ... rest of your code */}
                </div>
            </div>
        </div>
    );
};

export default Default;
