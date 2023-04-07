import React from 'react';
import './Cart.css'

const Cart = ({cart , handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }else{
        message = <div>
            <h3>The products you have added :</h3>
        </div>
    }


    return (
        <div>
            <h2 className={cart.length === 1 ? 'red' : 'yellow'}> Order Summery : {cart.length} </h2>
            <p className={`bold ${cart.length ===2 ? 'blue' : 'green' }`}>Somethig here</p>
            
            {cart.length > 2 ? <span>Aro kino</span> : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button> </p>)
            }
            {
                cart.length === 2 && <p>double kinchen vai !!1</p>
            }
            {
                cart.length === 3 || <h3>3 tar besi ba kom kinchen !</h3>
            }
        </div>
    );
};

export default Cart;

/* CONDITIONAL RENDERING
* 1. Use if or if else to set a variable that will contain an element , components 
* 2. Ternary operator: condition ? 'for true' : 'false'
* 3. Logical && : (if the condition is true then the next thing will be displayed)
* 3. Logical || : (if the condition is false then the next thing will be displayed)
 */

/* CONDITIONAL CSS CLASS
* 1.use ternary 
* 2. use ternary inside template string
*
*
*
*
*/