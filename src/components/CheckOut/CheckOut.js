import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser] = useContext(UserContext)
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [details] = useState({
        name: "",
        price: "",
        productImg: '',
        productName: '',
        productWeight: ''

    });

    console.log(products)
    useEffect(() => {
        fetch('https://young-garden-33771.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    products.map(product => {
        if (product._id === { id }.id) {
            details.name = product.name;
            details.price = product.price;
            details.productImg = product.imageURL;
            details.productName = product.name;
            details.productWeight = product.weight;
            loggedInUser.price = details.price;
            loggedInUser.productImg = details.productImg;
            loggedInUser.productName = details.productName;
            loggedInUser.productWeight = details.productWeight;
        }
    })
    
    return (
        <div>
            <Header />
            <div className="container">
                <h1 class="my-5">Check Out</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{details.name}</th>
                            <td>1</td>
                            <td>{details.price}</td>
                        </tr>
                        <tr>
                            <th scope="row">Total</th>
                            <td></td>
                            <td>{details.price}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/placeOrder"><p class="text-center"><button class="btn btn-success">CheckOut</button></p></Link>
            </div>
        </div>
    );
};

export default CheckOut;