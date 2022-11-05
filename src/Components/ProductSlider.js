import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderTag from "./Snippets/HeaderTag";
import ProductCard from "./Snippets/ProductCard";

export default function ProductSlider() {
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
            img: 'https://assets.ajio.com/medias/sys_master/root/20220927/xxgF/6332223ef997dd1f8d1fa1b0/vishal_prints_pink_stone_work_chiffon_zari_border_saree_with_.jpg',
            title: 'Stone Work Chiffon Zari Border Saree',
            current_price: '2633',
            actual_price: '3633',
            href: '/'
        },
        {
            img: 'https://assets.ajio.com/medias/sys_master/root/20221011/Z22T/63450480aeb269659c39c503/gorgone_grey__mysore_silk_ethnic_motifs_saree_.jpg',
            title: 'Mysore Silk Ethnic Motifs Saree',
            current_price: '338',
            actual_price: '998',
            href: '/'
        },
        {
            img: 'https://assets.ajio.com/medias/sys_master/root/20220519/8qal/6285be23aeb26921afa53475/zikaraa_blue_traditional_saree_with_blouse_piece.jpg',
            title: 'Traditional Saree with Blouse',
            current_price: '1200',
            actual_price: '2999',
            href: '/'
        },
        {
            img: 'https://assets.ajio.com/medias/sys_master/root/20220815/JduG/62f9fd64aeb26921aff03cf3/pratham_blue_purple_ombre-dyed_saree_with_tassels.jpg',
            title: 'Ombre-Dyed Saree with Tassels',
            current_price: '800',
            actual_price: '3999',
            href: '/'
        },
        {
            img: 'https://assets.ajio.com/medias/sys_master/root/20220309/n3YJ/6227bdd7f997dd03e20816fc/shree_silk_mills_gold_traditional_saree_with_contrast_border.jpg',
            title: 'Traditional Saree with Contrast Border',
            current_price: '1344',
            actual_price: '2799',
            href: '/'
        },
    ]
    return (
        <>
            <div className="product_slider pt-50 pb-50">
                <div className="wrapper">
                    <HeaderTag Tag="h2" text="Featured Products" />
                    <Slider {...settings}>
                        {cardData.map((data, i) => <ProductCard image={data.img} title={data.title} currentPrice={data.current_price} actualPrice={data.actual_price} href={data.href} />)}
                    </Slider>
                </div>
            </div>
        </>
    )
}
