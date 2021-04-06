import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    console.log({ product })
    return (
        <div className="col-md-4 mb-3">
            <div class="text-center bg-danger">
                <img src={product.imageURL} class="img-fluid w-75 mt-3 border border-warning rounded" alt="..." />
                <h3 class="mt-3">{product.name}</h3>
                <span class="btn btn-primary m-5">{product.price}/- tk</span>
                <Link to={`/checkout/${product._id}`} class="btn btn-success m-5">Buy Now</Link>
            </div>
        </div>
    );
};

export default Product;