import React from 'react';

const OrdersDetail = ({ order }) => {
    console.log(order)
    return (
        <>
            <tbody>
                <tr>
                    <th scope="row">{order.name}</th>
                    <td>{order.price}/- tk</td>
                    <td>{order.productName}</td>
                    <td>Order time : {new Date(order.time).toDateString('dd/MM/yyyy')}</td>
                </tr>
            </tbody>
        </>
    );
};

export default OrdersDetail;