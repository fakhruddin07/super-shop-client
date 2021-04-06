import { UserContext } from '../../App';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import OrdersDetail from '../OrdersDetail/OrdersDetail';
import Header from '../Header/Header';


const Orders = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [ordersDetails, setOrdersDetail] = useState([])

    useEffect(() => {
        fetch('https://young-garden-33771.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])
    console.log(loggedInUser)

    return (
        <div>
            <Header></Header>
            <div class="container">
                <h1>Hi Fakhruddin, You have {orders.length} orders</h1>
                <table class="table table-borderless bg-primary align-items-center p-5 mt-3">
                    {
                        orders.map(order => <OrdersDetail order={order}></OrdersDetail>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Orders;