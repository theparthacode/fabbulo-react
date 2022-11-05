import styled from "styled-components";
import CategoryCard from "./Snippets/CategoryCard";
import HeaderTag from "./Snippets/HeaderTag";
const catlistdata = [
  {
    image: 'https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/3/e31caf76-2649-4ea8-a39d-3ebc5006217e1656832965147-Vero_Moda.png',
    href: '/'
  },
  {
    image: 'https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/6/3998444e-8885-4290-9510-29cbd1c0c4791657087975656-unnamed---2022-07-06T114249.227.jpg',
    href: '/'
  },
  {
    image: 'https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/3/e132e58a-c705-46fb-9305-c35d9097a6141656832965118-Forever21.png',
    href: '/'
  },
  {
    image: 'https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/23/d461bb3b-29ba-4f7f-b715-750b87ca5b1e1648015528067-biba.jpg',
    href: '/'
  },
  {
    image: 'https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/3/a8045925-aebb-4f49-b4a1-9bd114f21f551656832965126-H-M.png',
    href: '/'
  },
  {
    image: 'https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/23/1723322c-0d0d-4645-94a0-ae5a7c56f91f1648015566914-pantaloons.jpg',
    href: '/'
  },
]
const CategoryList = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    > div{
      width: 191px;
    }
  a{
    display: inline-block;
    border-radius: 11px;
    overflow: hidden;
    scale: 1;
    transition: scale 200ms ease;
    &:hover{
      scale: 1.01;
    }
  }
`

export default function CategoryListing() {
  return (
    <div className="category_section gradiant pt-50 pb-50">
      <div className="wrapper">
        <HeaderTag Tag="h2" text="Shop By Category" />
        <CategoryList>
          {catlistdata.map((data, i) => <CategoryCard key={i} image={data.image} href={data.href} />)}
        </CategoryList>
      </div>
    </div>
  )
}
