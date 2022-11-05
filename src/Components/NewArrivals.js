import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderTag from "./Snippets/HeaderTag";
import ProductCard from "./Snippets/ProductCard";

export default function NewArrivals() {
    let settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    const cardData = [
        {
            img: 'https://assets.ajio.com/medias/sys_master/root/20220920/Jdcn/6328fce1aeb269dbb396db7d/gorgone_black_paisley_print_mysore_silk_patola_saree.jpg',
            title: 'Paisley Print Mysore Silk Patola Saree',
            current_price: '338',
            actual_price: '1991',
            href: '/'
        },
        {
            img: 'https://assets.ajio.com/medias/sys_master/root/20221021/UEwY/63528ab7aeb269659c54dd32/gorgone_red_floral_traditional_saree_with_blouse_piece.jpg',
            title: 'Floral Traditional Saree with Blouse Piece',
            current_price: '338',
            actual_price: '1991',
            href: '/'
        },
        {
            img: 'https://assets.ajio.com/medias/sys_master/root/20220817/klY6/62fc2ac6aeb26917617aa093/grubstaker_maroon_vichitra_silk_embroidered_sarees_with_blouse_piece.jpg',
            title: 'Vichitra Silk Embroidered Sarees with Blouse Piece',
            current_price: '650',
            actual_price: '1299',
            href: '/'
        },
        {
            img: 'https://assets.ajio.com/medias/sys_master/root/20220316/F49n/62310e30aeb26921afdc5311/satrani_black_striped_regular__saree.jpg',
            title: 'Striped Regular Saree',
            current_price: '706',
            actual_price: '2016',
            href: '/'
        },
        {
            img: 'https://assets.ajio.com/medias/sys_master/root/20220208/T351/62025d22f997dd03e2c605cf/zikaraa_navy_blue_zari_woven_traditional_saree_.jpg',
            title: 'Zari Woven Traditional Saree',
            current_price: '900',
            actual_price: '1999',
            href: '/'
        },
    ]
    return (
        <>
            <div className="product_slider pt-50 pb-50">
                <div className="wrapper">
                    <HeaderTag Tag="h2" text="New Arrivals" />
                    <Slider {...settings}>
                        {cardData.map((data, i) => <ProductCard image={data.img} title={data.title} currentPrice={data.current_price} actualPrice={data.actual_price} href={data.href} />)}
                    </Slider>
                </div>
            </div>
        </>
    )
}
