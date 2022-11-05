import ImageLinkList from './Snippets/ImageLinkList';
import HeaderTag from './Snippets/HeaderTag';
import styled from 'styled-components';
// import styled from 'styled-components';

export default function MoreBrands(props) {
    const brandData = [
        {
            href: '/',
            imgSrc: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/99a05311-2f73-4ea5-a25c-bdc40bbdb00b1657024220192-Libas_HP-Top-Tile.jpg',
        },
        {
            href: '/',
            imgSrc: 'https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/93c69d74-c456-49a2-a242-6711047330f21657024220200-Vishudh__HP-Top-Tile.jpg',
        },
        {
            href: '/',
            imgSrc: 'https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/ba04ecfe-6b75-46ed-9a02-87dad59d08071657010547010-TT-Top.jpg',
        },
        {
            href: '/',
            imgSrc: 'https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/0f2d7de3-5989-49e3-bc93-6de69dabf8221657028857324-Biotique-HP-Tile.jpg',
        },
        {
            href: '/',
            imgSrc: 'https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/8e27a543-cdab-428e-b3f4-a35f328ffa6b1657023441705-loreal-7th.jpg',
        },
        {
            href: '/',
            imgSrc: 'https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/4/7368c532-0aec-4159-8358-0ea985c9512e1656953708980-4.jpeg',
        },
    ]
    const BrandListing = styled.div`
        > div.box{
            width: 187px;
        }
    `
    return (
        <div className="brand-list gradiant pt-50 pb-50">
            <div className="wrapper">
                <HeaderTag Tag="h2" text="Discover More Brands" />
                <BrandListing className="category-list">
                    {brandData.map((imgData, index) => <ImageLinkList key={index} imgSrc={imgData.imgSrc} imageLink={imgData.href} />)}
                </BrandListing>
            </div>
        </div>
    )
}
