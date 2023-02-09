import { useRef, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartDrawer from '../Components/CartDrawer';
import Logo from '../Assets/logo.png';
import Bag from '../Assets/bag.svg';
import Heart from '../Assets/heart.svg';
import Profile from '../Assets/profile.svg';
import { CartContext } from '../context/cart_context.js';

export default function Header() {
    const { cartValue } = useContext(CartContext);

    const cartBtn = useRef(null);
    function bgChange() {
        cartBtn.current.classList.add('active');
        document.querySelector('body').classList.add('overflowHidden');
    }
    return (
        <>
            <div className="header_section">
                <div className="wrapper flex align-items-center space-between">
                    <div className="logo"><Link to="/"><img src={Logo} alt="" width="130" /></Link></div>
                    <nav>
                        <ul className="nav">
                            <li><NavLink to="/shop">Shop</NavLink></li>
                            <li><NavLink to="/men">Men</NavLink></li>
                            <li><NavLink to="/women">Women</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                    <div className="search_bar">
                        <form action="">
                            <input type="search" placeholder="Search..." />
                        </form>
                    </div>
                    <div className="right_sec">
                        <ul className="dynamic_nav">
                            <li className="profile_icon">
                                <span><img src={Profile} alt="" width="19px" />Profile</span>
                                <div className="submenu">
                                    <div className="login_sec">
                                        <p><strong>Welcome</strong><br />
                                            To access account and manage orders</p>
                                        <Link to="/login" className="gradiant_btn">Login/Signup</Link>
                                    </div>
                                    <ul>
                                        <li><Link to="/orders">Order</Link></li>
                                        <li><Link to="/wishlist">Wishlist</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                        <li><Link to="/giftcards">Gift Cards</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="/wishlist"><img src={Heart} alt="" width="18px" />Wishlist</Link></li>
                            <li>
                                <Link onClick={() => { bgChange() }}><img src={Bag} alt="" width="17px" />Bag {cartValue.totalItems !== 0 && <sup className="itemCount">{cartValue.totalItems}</sup>}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <CartDrawer ref={cartBtn} />
        </>
    );
}