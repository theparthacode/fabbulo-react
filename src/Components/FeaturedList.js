import styled from "styled-components"

const ftrData = [
    {
        src: '/images/cycle.svg',
        title: 'Easy Exchange'
    },
    {
        src: '/images/heart.svg',
        title: '100% Handpicked'
    },
    {
        src: '/images/quality.svg',
        title: 'Assured Quality'
    },
]
const FeaturedCard = styled.div`
    background: #fbfbfb;
    .wrapper{
        display: flex;
        justify-content:center;
        > div{
            width: 33.33%;
            text-align: center;
            &:nth-child(3) img{scale: 1.4;}
        }
    }
    h4{
        font-size: 20px;
        color: #383838;
        margin-top: 8px;
    }
`
export default function FeaturedList() {
    return (
        <>
            <FeaturedCard className="pt-50 pb-50">
                <div className="wrapper">
                    {ftrData.map((data, i) => {
                        return <div key={i}>
                            <div className="imgBox"><img src={data.src} alt={data.title} height="30px" /></div>
                            <h4>{data.title}</h4>
                        </div>
                    })}
                </div>
            </FeaturedCard>
        </>
    )
}
