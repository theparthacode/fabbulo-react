import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="footer_section pt-50 pb-50">
                <div className="wrapper">
                    <div className="flex space-between">
                        <div className="footer_col">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/men">Men</Link></li>
                                <li><Link to="/women">Women</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/giftcards">Giftcards</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer_col">
                            <h3>Collection</h3>
                            <ul>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/men">Men</Link></li>
                                <li><Link to="/women">Women</Link></li>
                            </ul>
                        </div>
                        <div className="footer_col">
                            <h3>Contact Us</h3>
                            <ul className="address">
                                <li>Plot no.- 3653, Barapada,<br />
                                    Godiputmatiapada, Delang,<br />
                                    Puri, Odisha 752050</li>
                                <li><Link to="mailto:support@fabbulo.com">support@fabbulo.com</Link></li>
                                <li><Link to="tel:917008665182">+91 7008665182</Link></li>
                            </ul>
                        </div>
                        <div className="footer_col">
                            <ul className="certifications">
                                <li><img src="images/originals-100.png" alt="" />
                                    <strong>100% ORIGINAL</strong> guarantee <br />
                                    for all products at myntra.com</li>
                                <li><img src="images/30day-return.png" alt="" />
                                    <strong>Return within 30days</strong> of <br />
                                    receiving your order</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="wrapper">
                    <p>Copyright &copy; 2022 <Link to="/">fabbulo</Link >.All rights reserved.</p>
                </div>
            </div>
        </>
    )
}
