import { forwardRef, useContext } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import cross from "../Assets/cross.svg";
import { CartContext } from '../context/cart_context';
import CartItemBox from "./CartItemBox";
import FormatPrice from "./Snippets/FormatPrice";

function CartDrawer(props, ref) {
    const { cartValue } = useContext(CartContext);

    function removeClass() {
        ref.current.classList.remove('active')
        document.querySelector('body').classList.remove('overflowHidden');
    }

    return createPortal(
        <>
            <Cartdrawer className="cart-drawer" ref={ref}>
                <span className="close" onClick={() => removeClass()}><img src={cross} alt="" width="30px" /></span>
                <h3>Your Bag</h3>
                <div className="cart-item-list">
                    {cartValue.cart.length ? cartValue.cart.map((el, i) =>
                        <CartItemBox key={i} id={el.id} title={el.title} image={el.image} color={el.color} itemCount={el.itemCount} price={el.price} />
                    ) : <p>Your Bag is empty now.</p>}
                </div>
                {
                    cartValue.cart.length !== 0 && <div className="cart-buttons">
                        <div className="cart-total-price"><h4>Subtotal: </h4><FormatPrice price={cartValue.totalAmount} /></div>
                        <div className="cart-checkout"><button>Checkout</button></div>
                    </div>
                }
            </Cartdrawer >
        </>,
        document.getElementById('cartDrawer')
    )
}
const Cartdrawer = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    right: -385px;
    z-index:999;
    padding: 30px 16px 16px 16px;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(30px);
    width: 350px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
    transition: right 600ms cubic-bezier(0.77, 0, 0.175, 1);
    .close{
        cursor: pointer;display: inline-block;position: absolute;left: -42px;top: 0;padding: 6px;
    }
    &.active{
        right: 0px;
    }
    .cart-item-list{height: calc(100vh - 170px); overflow: auto;padding-right: 10px;
        &::-webkit-scrollbar{width: 5px;}
        &::-webkit-scrollbar-track{width: 5px;background: #f0f0f0;border-radius:10px;}
        &::-webkit-scrollbar-thumb{background: #adadad;border-radius:10px;}
    }
    h3{border-bottom: solid 1px #d1d1d1; padding-bottom: 10px;margin-bottom: 15px}
    .cart-buttons{width: 100%; float: left;padding-top: 10px;}
    .cart-total-price {display: flex;align-items:center;justify-content: space-between;margin-bottom: 8px;
        .total-price{font-weight:600;}
    }
    .cart-checkout button{width: 100%; float:left;border-radius: 3px;cursor: pointer;background: linear-gradient(-90deg,rgb(142,45,226),rgb(74,0,224) 100%);color: #fff;font-size: 15px;text-transform: uppercase;font-weight: 500;padding: 12px;}
`

export default forwardRef(CartDrawer);