import {memo} from "react"
import "../../../style/style.css" 
import logo from "../../../assets/images/Logo-The-Gioi-Di-Dong-MWG-B-H.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping, faMobilePhone, faLaptop, faTablet} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <> 
            <header className="header"> 
                <div className="header-top"> 
                    <img className="logo-img" src={logo} alt="Logo"></img>
                        <div className="form-search-boder">
                            <form className="form-search" > 
                                <input type="text" name="search" id="search" value="Bạn tìm gì..." className="search-border"></input>
                                <button type="submit" className="search-border"><FontAwesomeIcon icon={faSearch}/></button>
                            </form>
                        </div>

                        <a className="taikhoan" href="#">Tài khoản & đơn hàng</a>

                        <a className="cart" href="#">
                            <div> 
                            <FontAwesomeIcon className = "cart-icon" icon={faCartShopping}/>
                            </div>
                            <span className="span-cart">Giỏ hàng</span>
                        </a>
                                
                            
                </div>

                <div className="header-menu"> 
                    <div>
                        <ul className="ul-menu"> 
                            <li className="li-menu">
                                <a className="menu"> 
                                    <div>   
                                        <FontAwesomeIcon icon={faMobilePhone} className="icon-menu"/>
                                    </div> 
                                    <span className="span-menu">Điện thoại</span>
                                </a>
                            </li>

                            <li className="li-menu">
                                <a className="menu"> 
                                    <div>   
                                        <FontAwesomeIcon icon={faLaptop} className="icon-menu"/>
                                    </div> 
                                    <span className="span-menu">Laptop</span>
                                </a>
                            </li>

                            <li className="li-menu">
                                <a className="menu">
                                    <div>   
                                    <FontAwesomeIcon icon={faTablet} className="icon-menu"/>
                                    </div> 
                                    <span className="span-menu">Tablet</span>
                                </a>
                            </li>
                        </ul>

                    </div>                
                </div>

            </header>
        </>
    );
  };
  
  export default memo(Header);