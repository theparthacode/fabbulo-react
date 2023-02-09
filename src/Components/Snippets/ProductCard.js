import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';
import QuickViewModal from './QuickViewModal';
import { useState } from 'react';
import HeaderTag from './HeaderTag';
import ProductsVariantData from './ProductsVariantData';
// import ProductsVariantData from './ProductsVariantData';

export default function ProductCard(props) {

    const { data, productID, image, brand, title, currentPrice, actualPrice, descriptions } = props;
    
    let pageURL = title.toLowerCase().split(' ').join('-');
    let pageID = productID;
    const [open, setOpen] = useState(false);
    function openModal() { setOpen(true); document.body.classList.add('overflowHidden'); }
    function setModal() { setOpen(false); document.body.classList.remove('overflowHidden'); }
    function removeBodyClass() { document.body.classList.remove('overflowHidden'); }

    return (
        <>
            <ProductCardComponent>
                <div className="productImg">
                    <img src={image[0]} alt="" />
                    <button className="quick_view_button" onClick={() => openModal()} product-id={productID}>Quick View</button>
                </div>
                <div className="productInfo">
                    <Link to={`/product/${pageURL}/id=${pageID}`} className="productTitle">{title}</Link>
                    <div className="productPrice">
                        <span className="price_div">&#8377;<NumericFormat value={currentPrice} thousandsGroupStyle="lakh" thousandSeparator="," displayType="text" renderText={(value) => <b>{value}</b>} /></span>
                        <div className="actual_price">&#8377;<span className="price_div"><NumericFormat value={actualPrice} thousandsGroupStyle="lakh" thousandSeparator="," displayType="text" renderText={(value) => <b>{value}</b>} /></span></div>
                        <div className="discount">{Math.ceil(currentPrice * 100 / actualPrice)}% OFF</div>
                    </div>
                </div>
            </ProductCardComponent>

            <QuickViewModal modalStatus={open} onClose={() => setModal()}>
                <ModalContainer>
                    <div className="modalGallery"> {<img src={image[0]} alt="" />} </div>
                    <div className="modalContent">
                        <span className="brandName">{brand}</span>
                        <HeaderTag Tag="h2" text={title} />
                        <div className="productPrice">
                            <span className="price_div">&#8377;<NumericFormat value={currentPrice} thousandsGroupStyle="lakh" thousandSeparator="," displayType="text" renderText={(value) => <b>{value}</b>} /></span>
                            <div className="actual_price">&#8377;<span className="price_div"><NumericFormat value={actualPrice} thousandsGroupStyle="lakh" thousandSeparator="," displayType="text" renderText={(value) => <b style={{ fontWeight: "400" }}>{value}</b>} /></span></div>
                            <div className="discount">{Math.ceil(currentPrice * 100 / actualPrice)}% OFF</div>
                        </div>
                        <ProductsVariantData product={data} />
                        <div className="descriptions">
                            <p>{descriptions ? descriptions.substr(0, 360) : 'No Description'}...</p>
                            <Link to={`/product/${pageURL}/id=${pageID}`} onClick={removeBodyClass}>Read Full Details &rarr;</Link>
                        </div>
                    </div>
                </ModalContainer>
            </QuickViewModal>
        </>
    )
}
const ProductCardComponent = styled.div`
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
        background: rgba(255, 255, 255, 0.8);
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
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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
    .discount{color: #fff;font-size: 13px;font-weight: bold;align-self: center;border-radius: 20px;padding: 3px 8px;margin-left: 10px;background: linear-gradient(-90deg,rgb(142,45,226),rgb(74,0,224) 100%);}
`
const ModalContainer = styled.div`
    display: flex;
    gap: 20px;
    padding-right: 15px;
    > div{
        flex: 1;
    }
    .modalGallery{display: flex;flex-wrap: wrap;gap: 5px;}
    .modalGallery .thumb:not(:first-child){width: 100px;}
    .modalGallery img{border-radius: 8px;}
    h2{font-size: 26px;}
    .btnList{display:flex;gap:8px;margin: 20px 0;}
    .btnList button{
        cursor: pointer;scale:1;border-radius: 6px;color: #fff;padding: 12px 15px;font-size: 15px;font-weight: 600;transition: 200ms ease;background: linear-gradient(-90deg, rgb(142, 45, 226), rgb(74, 0, 224) 100%);
        &.add-to-wishlist{background:#2c2c2c;}
        &:hover{scale:1.015;}
    }
    .btnList img{filter: invert(1);margin-right: 2px;}
    .brandName{display: inline-block;width: 100%;font-size: 14px;font-weight: 500;color: #a7a7a7;margin-bottom: 5px;}
    p{font-size: 15px;line-height: 22px;color: #1a1a1a;text-align: justify;}
    .descriptions a{
        font-size: 15px;font-weight: 600;margin-top: 12px;display: inline-block;
        &:hover{text-decoration: underline;}
    }
`
