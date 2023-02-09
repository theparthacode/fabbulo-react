import styled from "styled-components";

export default function CartCounter({ amount, increment, decrement }) {
    return (
        <ProductItemCounter className="cart-counter">
            <button className="decrement" onClick={() => decrement()}>-</button>
            <span className="item-count">{amount}</span>
            <button className="imcrement" onClick={() => increment()}>+</button>
        </ProductItemCounter>
    )
}

const ProductItemCounter = styled.div`
    display: inline-block;
    margin-top: 25px;
    border:solid 1px #ddd;
    span.item-count{display: inline-flex;align-items: center;justify-content: center;width:46px;height: 40px;vertical-align: top;padding: 2px;text-align: center;font-size: 15px;font-weight: 500;}
    button{background: #ddd;font-size: 20px;line-height: 18px;padding: 11px 18px;cursor:pointer;}
`;