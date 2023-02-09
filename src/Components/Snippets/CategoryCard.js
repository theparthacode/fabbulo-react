import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryCardComponent = styled.div`
    position: relative;
`
export default function CategoryCard(props) {
    const { image, href } = props;
    return (
        <>
            <CategoryCardComponent><Link to={href} className="imgBox"><img src={image} alt="" /></Link></CategoryCardComponent>
        </>
    )
}
