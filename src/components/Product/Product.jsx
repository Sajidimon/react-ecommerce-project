import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={props.img} alt="" />
                <h3>{props.name}</h3>
                <h4>Price: {props.price}</h4>
                <h4>Manufecturar: {props.seller}</h4>
                <h4>Rating {props.ratings}</h4>
            </div>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;