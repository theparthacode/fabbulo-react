import { Link } from 'react-router-dom';

export default function ImageLinkList({ imageLink, imgSrc }) {
    return (
        <>
            <div className="box"><Link to={imageLink}><img src={`${imgSrc}`} alt="" /></Link></div>
        </>
    )
}
