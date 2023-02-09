import { useState, useContext } from "react";
import CartCounter from "./CartCounter";
import styled from "styled-components";
import heart from '../../Assets/heart.svg';
import bag from '../../Assets/bag.svg';
import { CartContext } from "../../context/cart_context.js";

export default function ProductsVariantData({ product }) {
    const [amount, setAmount] = useState(1);
    const [activeColor, setActiveColor] = useState(product.colors[0]);
    const increment = () => { amount < 10 && setAmount(amount + 1) }
    const decrement = () => { amount > 1 && setAmount(amount - 1) }
    const { addtoCart } = useContext(CartContext);
    const ID = product.product_id + activeColor;
    const productTitle = product.product_title;
    const productImage = product.product_images;
    const productPrice = product.sale_price;

    return (
        <>
            <ColorsList className="colors_list">
                <strong>Colors:</strong>
                {product.colors.map((color, index) =>
                    <button key={index} className={color === activeColor ? 'active' : 'inactive'} style={{ backgroundColor: color }} onClick={() => setActiveColor(color)}>{color}</button>
                )}
            </ColorsList>
            <CartCounter amount={amount} increment={increment} decrement={decrement} />
            <div className="btnList">
                <button className="add-to-bag" onClick={() => addtoCart(ID, productTitle, productImage, activeColor, amount, productPrice)}><img src={heart} alt="" width="18" /> Add to Bag</button>
                <button className="add-to-wishlist"><img src={bag} alt="" width="16" /> Add to Wishlist</button>
            </div>
        </>
    )
}

const ColorsList = styled.ul`
    list-style: none;
    display: flex;
    gap: 7px;
    margin-top: 20px;
    button {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 15px;
        font-size: 0;
        cursor: pointer;
        &.active{
            position: relative;
            &:before{
                content: "";position: absolute;left: -3px;right:-3px;top:-3px;bottom:-3px;border: 1px solid #000;border-radius: 20px;
            }
        }
    }
`