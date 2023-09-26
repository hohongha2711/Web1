import {memo} from "react"
import "../../../style/style.css" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareFacebook, faYoutube, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <> 
        <footer> 
            <section className="section_footer"> 
                <div className="footer_col"> 
                    <ul className="list_footer"> 
                        <li>Về chúng tôi</li>
                        <li>Phản hồi</li>
                    </ul>
                </div>

                <div className="footer_col"> 
                    <ul className="list_footer"> 
                        <li>SĐT: 0123456789</li>
                        <li>Email: <a href="mailto: abc@gmail.com">abc@gmail.com</a>    
                        </li>
                    </ul>
                </div>

                <div className="footer_col">Thông tin liên hệ khác:
                    <div className="social-icon">
                        <a href="https://www.facebook.com/profile.php?id=100049668621859">
                            <FontAwesomeIcon icon={faSquareFacebook} className="facebook-icon" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100049668621859">
                            <FontAwesomeIcon icon={faTwitter} className="instagram-icon"/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100049668621859">
                            <FontAwesomeIcon icon={faYoutube} className="youtube-icon" />
                        </a>
                    </div>                    
                </div>
            </section>
            <div className="copyright"> 
                <p>Copyright of abc</p>
                </div>           
        </footer>
            
        </>
        );
    
  };
  
  export default memo(Footer);