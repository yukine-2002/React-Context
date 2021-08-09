import React, {createContext, useState, useEffect} from 'react';
import CartItem from '../../components/cart-item/cart-item.component';

import {addItemToCart , removeItemFromCart,FilterItemFromCart,getCartItemsCount,getTotalCart} from './cart.utils';

export const CartContext = createContext({
    hidden:true,
    toggleHidden : () => {},
    cartItems:[],
    addItem:()=> {},
    removeItem : ()=> {},
    clearItemFromCart :()=> {},
    cartItemsCount:0
})


const CartProvide = ({children}) => {
    const [hidden,setHidden] = useState(true);
    const toggleHidden = ()=> setHidden(!hidden);
    const [cartItems,setCartItems] = useState([]);
    const [cartItemsCount,setCartItemsCount] = useState(0);
    const [total,setTotal] = useState(0);

    const addItem = item =>  setCartItems(addItemToCart(cartItems,item));

    const removeItem = item => setCartItems(removeItemFromCart(cartItems,item));
    const clearItemFromCart = item => setCartItems(FilterItemFromCart(cartItems,item));

   useEffect( () => {
       setCartItemsCount(getCartItemsCount(cartItems));
   },[cartItems]) 

   useEffect(()=>{
    setTotal(getTotalCart(cartItems));
   },[cartItems]);

    return <CartContext.Provider value={{removeItem,hidden,toggleHidden,cartItems,addItem,cartItemsCount,clearItemFromCart,total}} >{children}</CartContext.Provider>
}

export default CartProvide;