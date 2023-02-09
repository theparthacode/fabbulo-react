import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import productData from "../Api/products.json";
import ProductsVariantData from "../Components/Snippets/ProductsVariantData";

export default function ProductDetails() {
    const ProductParam = useParams();
    const data = productData.filter(res => res.product_id === ProductParam.id);
    console.log(data);
    const [mainimg, setMainimg] = useState(data[0].product_images[0]);

    let thumb = document.querySelectorAll('.gallery-thumbnails .thumb');
    function imageChange(el, i) {
        setMainimg(el);
        thumb.forEach(el => el.classList.remove('active'));
        thumb[i].classList.add('active');
    }

    return (
        <ProductDetailComponent className="pt-50 pb-50">
            <div className="wrapper">
                <div className="flex">
                    <div className="product-gallery">
                        <div className="gallery-thumbnails">
                            {data[0].product_images.map((el, i) => <div className="thumb" key={i} onClick={() => imageChange(el, i)}><img src={el} alt="" /></div>)}
                        </div>
                        <div className="main-image"> <img src={mainimg} alt="" /> </div>
                    </div>
                    <div className="product-details">
                        <span className="brandName">{data[0].brand}</span>
                        <h1>{data[0].product_title}</h1>
                        <div className="productPrice">
                            <span className="price_div">&#8377;<NumericFormat value={data[0].sale_price} thousandsGroupStyle="lakh" thousandSeparator="," displayType="text" renderText={(value) => <b>{value}</b>} /></span>
                            <div className="actual_price">&#8377;<span className="price_div"><NumericFormat value={data[0].original_price} thousandsGroupStyle="lakh" thousandSeparator="," displayType="text" renderText={(value) => <b style={{ fontWeight: "400" }}>{value}</b>} /></span></div>
                            <div className="discount">{Math.ceil(data[0].sale_price * 100 / data[0].original_price)}% OFF</div>
                        </div>
                        <ProductsVariantData product={data[0]} />
                        <div className="descriptions">
                            <p>{data[0].descriptions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </ProductDetailComponent>
    )
}
const ProductDetailComponent = styled.section`
    .flex{display: flex; gap: 20px; padding-right: 15px;}
    .flex > div{flex: 1;}
    .product-gallery{
        display: flex;gap: 10px;
        .main-image{flex: 1;border-radius: 5px;overflow:hidden;}
        .gallery-thumbnails{
            flex-basis: 100px;
            .thumb{
                margin-bottom: 10px;cursor:pointer;padding: 2px;border-radius: 5px;overflow:hidden;
                &.active{border: solid 2px #5d0ce1;}
            }
            img{width: 100px;height: 100px;object-fit: cover;object-position: top center;border-radius: 2px;}
        }
    }
    h1{ font-size: 28px; margin-bottom: 20px;}
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
    .productPrice{
        font-weight: 500;
        color: #161616;
        display: flex;
        font-size: 22px;
    }
    .actual_price{
        text-decoration: line-through;
        color: #858585;
        margin-left: 10px;
    }
    .discount{color: #fff;font-size: 13px;font-weight: bold;align-self: center;border-radius: 20px;padding: 3px 8px;margin-left: 10px;background: linear-gradient(-90deg,rgb(142,45,226),rgb(74,0,224) 100%);}
`;