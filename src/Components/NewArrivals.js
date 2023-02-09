import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderTag from "./Snippets/HeaderTag";
import ProductCard from "./Snippets/ProductCard";
import productData from "../Api/products.json";

export default function NewArrivals() {
    let settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };
    const cardData = productData;
    return (
        <>
            <div className="product_slider pt-50 pb-50">
                <div className="wrapper">
                    <HeaderTag Tag="h2" text="New Arrivals" />
                    <Slider {...settings}>
                        {cardData.slice(0,8).map((data, i) => <ProductCard key={data.product_id} productID={data.product_id} brand={data.brand} image={data.product_images} title={data.product_title} currentPrice={data.sale_price} actualPrice={data.original_price} href={data.href} descriptions={data.descriptions} />)}
                    </Slider>
                </div>
            </div>
        </>
    )
}
