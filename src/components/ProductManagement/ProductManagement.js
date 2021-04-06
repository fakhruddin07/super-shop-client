import React from 'react';

const ProductManagement = ({ product, products, setProducts }) => {
    console.log(product._id)
    const deleteProduct = (id) => {
        fetch(`https://young-garden-33771.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully");
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
    }
    return (
        <>
            <tbody>
                <tr>
                    <th scope="row">{product.name}</th>
                    <td>{product.weight}</td>
                    <td>{product.price}/- tk</td>
                    <td><button onClick={() => deleteProduct(product._id)}>Delete</button></td>
                </tr>
            </tbody>
        </>
    );
};

export default ProductManagement;