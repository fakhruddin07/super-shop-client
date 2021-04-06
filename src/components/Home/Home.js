import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import Ajux from '../../Ajux_loader.gif'



const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://young-garden-33771.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        products.length === 0 && <img className="m-auto w-25" src={Ajux} alt=""/>
                    }
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;