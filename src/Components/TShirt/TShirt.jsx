import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt , handleAddToCart}) => {
    const { name , gender, price , picture} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <div>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <button onClick={()=>handleAddToCart(tshirt)} className='btn-buy'>Buy Now</button>
            </div>
        </div>
    );
};

export default TShirt;