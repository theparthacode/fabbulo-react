import { createContext, useState } from 'react';

export const CartContext = createContext();

const cartValue = {
    cart: [],
    totalItems: '0',
    totalAmount: '0'
}

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(cartValue.cart);
    const addtoCart = (id, title, image, color, itemCount, price) => {
        const existingItem = cartValue.cart.find(items => items.id === id);
        if (existingItem) {
            let updatedProduct = cartValue.cart.map((curElem) => {
                if (curElem.id === id) {
                    let newAmount = curElem.itemCount + itemCount;
                    return { ...curElem, itemCount: newAmount }
                } else {
                    return curElem;
                }
            });
            setCartItems(cartValue.cart = updatedProduct, ...cartItems)
        } else {
            setCartItems(cartValue.cart = [{ id, title, image, color, itemCount, price }, ...cartItems]);
        }
    }
    const deleteCartItem = (id) => {
        setCartItems(cartValue.cart = cartValue.cart.filter((items) => items.id !== id));
    }
    const cartIncrement = (id) => {
        let incrementedProduct = cartValue.cart.map((el) => {
            if (el.id === id) {
                let newAmount = el.itemCount += 1;
                return { ...el, itemCount: newAmount }
            } else {
                return el
            }
        });
        setCartItems(cartValue.cart = incrementedProduct);
    }
    const cartDecrement = (id) => {
        let decrementedProduct = cartValue.cart.map((el) => {
            if (el.id === id) {
                let newAmount = el.itemCount > 1 ? el.itemCount - 1 : el.itemCount;
                return { ...el, itemCount: newAmount }
            } else {
                return el;
            }
        });
        setCartItems(cartValue.cart = decrementedProduct);
    }
    // item count update function
    const updateCartItemCount = () => {
        let updatedCartValue = cartValue.cart.reduce((initialVal, currVal) => {
            let { itemCount } = currVal;
            initialVal = initialVal + itemCount;
            return initialVal;
        }, 0);
        cartValue.totalItems = updatedCartValue;
    }
    updateCartItemCount();

    // Total price update function
    const updateTotalPrice = () => {
        let updatedPrice = cartValue.cart.reduce((initialVal, currVal) => {
            let { itemCount, price } = currVal;
            initialVal = initialVal + (parseInt(price) * itemCount);
            return initialVal;
        }, 0);
        cartValue.totalAmount = updatedPrice;
    }
    updateTotalPrice();

    console.log(cartValue.cart);

    return <CartContext.Provider value={{ cartItems, cartValue, addtoCart, deleteCartItem, cartIncrement, cartDecrement }}> {children} </CartContext.Provider>
}

export { CartProvider };