
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="banner">
            <Slider {...settings}>
                <div>
                    <img src="/images/banner-1.png" alt="" />
                </div>
                <div>
                    <img src="/images/banner-2.png" alt="" />
                </div>
                <div>
                    <img src="/images/banner-3.png" alt="" />
                </div>
            </Slider>
        </div>
    )
}
