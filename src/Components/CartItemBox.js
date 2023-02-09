import { useContext } from "react";
import styled from "styled-components";
import Delete from '../Assets/delete-icon.svg';
import { CartContext } from "../context/cart_context";
import CartCounter from "./Snippets/CartCounter";
import FormatPrice from "./Snippets/FormatPrice";

export default function CartItemBox({ id, image, title, color, itemCount, price }) {
    const { deleteCartItem, cartIncrement, cartDecrement } = useContext(CartContext);

    return (
        <CartItem>
            <div className="cart-img"><img src={image[0]} alt="" /></div>
            <div className="title">
                <h4>{title}</h4>
                <div className="cart-variant-data">
                    <p className="price"><FormatPrice price={price} /></p>
                    <p className="color-data">color: <span className="color-circle" style={{ backgroundColor: color }}></span></p>
                </div>
                <CartCounter amount={itemCount} increment={() => cartIncrement(id)} decrement={() => cartDecrement(id)} />
            </div>
            <button className="remove-item" onClick={() => { deleteCartItem(id) }}><img src={Delete} alt="" /></button>
        </CartItem >
    )
}
const CartItem = styled.div`
    display: flex;
    gap: 10px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 8px;
    margin-bottom: 8px;
    img{width: 60px;height: 60px;object-fit: cover;object-position: top center;}
    .title{flex: 1;}
    .title h4{font-size: 14px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;line-clamp: 1;-webkit-box-orient: vertical;}
    .cart-variant-data{display: flex; align-items: center; margin-top: 3px;
        .price{margin-right: 6px;font-size: 13px;}
    }
    .color-data{font-size:13px; font-weight: 500; color: #767676;}
    .color-circle{width: 13px;height: 13px;display: inline-block;border-radius: 10px;vertical-align: middle;}
    .remove-item{flex-basis: 20px;background-color:transparent;cursor: pointer;}
    .remove-item img{width: 14px; height: auto;}
    .cart-item-counter{
        display: inline-block;
        margin-top: 5px;
        border:solid 1px #ddd;
        input{width:26px;height: 24px;vertical-align: top;padding: 2px;text-align: center;}
        button{background: #ddd;font-size: 20px;padding: 0px 9px;cursor:pointer;}
    }
    .cart-counter{
        margin-top: 5px;
        button{padding: 2px 8px;}
        .item-count{width: 28px; height: 22px; font-size: 14px;}
    }
`