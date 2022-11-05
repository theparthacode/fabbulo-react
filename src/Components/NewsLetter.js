import styled from "styled-components"

const Newsletter = styled.section`
    background-color:hsla(0,0%,100%,1);
    background-image:radial-gradient(at 4% 10%,hsl(240deg 100% 92%) 0px,transparent 50%), radial-gradient(at 91% 87%,hsl(343deg 100% 91%) 0px,transparent 50%);
    display: flex;
    align-items: center;
    justify-content: left;
    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }
    h2{
        font-size: 34px;
        color: #1a1a1a;
    }
    p{
        font-size: 16px;
        line-height: 24px;
        color: #404040;
        font-weight: 500;
    }
    form{
        width: 580px;
        margin-top: 40px;
        gap: 15px;
        display: grid;
        grid-template-columns: 1fr 170px;
    }
    form input{
        width: 100%;
        padding: 18px 20px;
        font-family: poppins;
        font-size: 15px;
        border-radius: 10px;
        box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.22);
        &[type="submit"]{
            cursor: pointer;
            color: #fff;
            font-size: 17px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            filter: hue-rotate(0deg);
            transition: filter 200ms ease;
            &:hover{
                filter: hue-rotate(-30deg);
            }
        }
    }
`
export default function NewsLetter() {
    return (
        <Newsletter className="pt-50 pb-50">
            <div className="wrapper">
                <div className="text">
                    <h2>Get 10% off your first order</h2>
                    <p>Enjoy 10% off your first purchase, plus regular updates on your <br />favourite designers, new arrivals and exclusive offers.</p>
                    <form action="">
                        <input type="text" placeholder="Enter your email..." />
                        <input type="submit" value="Subscribe" className="gradiant_btn"/>
                    </form>
                </div>
                <div className="img"><img src="images/newsletter-illustration.png" alt="" /></div>
            </div>
        </Newsletter>
    )
}