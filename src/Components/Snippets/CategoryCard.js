import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function CategoryCard(props) {
    const { image, href } = props;
    const CategoryCard = styled.div`
        position: relative;
    `
    return (
        <>
            <CategoryCard><Link to={href} className="imgBox"><img src={image} alt="" /></Link></CategoryCard>
        </>
    )
}
