import {memo} from "react"
import Header from "../Header"
import Footer from "../Footer";
import "../../../style/style.css"

const Layouts = ({children, ...props }) => { 
    return ( 
        <div {...props}>
                <Header />
                {children}
                <Footer />
           
        </div>
    );
  
};

export default memo(Layouts);