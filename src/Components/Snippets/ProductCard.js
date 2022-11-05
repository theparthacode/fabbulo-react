import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';

export default function ProductCard(props) {
    const { image, title, currentPrice, actualPrice, href } = props;
    const ProductCard = styled.div`
           position: relative;
           .productImg {
                border-radius: 10px;
                overflow: hidden;
                height: 355px;
                position: relative;
            }
            .productTitle::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                z-index: 1;
            }
            .productImg .quick_view_button {
                position: absolute;
                left: 0;
                right: 0;
                bottom: -36px;
                background: rgba(255, 255, 255, 0.5);
                backdrop-filter: blur(20px);
                font-size: 14px;
                text-transform: uppercase;
                font-weight: 700;
                padding: 10px 6px;
                cursor: pointer;
                transition: 300ms ease;
                z-index: 2;
            }
            &:hover .quick_view_button {
                bottom: 0;
            }
            .productTitle {
                color: #000;
                font-weight: 500;
                margin: 5px 0;
                display: inline-block;
                width: 100%;
            }
            .productPrice{
                font-weight: 500;
                color: #161616;
                display: flex;
            }
            .actual_price{
                text-decoration: line-through;
                color: #858585;
                margin-left: 5px;
            }
    `
    return (
        <>
            <ProductCard>
                <div className="productImg">
                    <img src={image} alt="" />
                    <button className="quick_view_button">Quick View</button>
                </div>
                <div className="productInfo">
                    <Link to={href} className="productTitle">{title}</Link>
                    <div className="productPrice">
                        <span className="price_div">&#8377;<NumericFormat value={currentPrice} thousandsGroupStyle="lakh" thousandSeparator="," displayType="text" renderText={(value) => <b>{value}</b>} /></span>
                        <div className="actual_price">&#8377;<span className="price_div"><NumericFormat value={actualPrice} thousandsGroupStyle="lakh" thousandSeparator="," displayType="text" renderText={(value) => <b>{value}</b>} /></span></div>
                    </div>
                </div>
            </ProductCard>
        </>
    )
}
