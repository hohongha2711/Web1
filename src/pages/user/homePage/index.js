 import {memo} from "react"
 import logo from "../../../assets/images/Logo-The-Gioi-Di-Dong-MWG-B-H.webp"

const HomePage = () => { 
    return (
        <> 
            <div className="content"> 
                <img src={logo} alt="Logo"></img>
                <img src={logo} alt="Logo"></img>
                <img src={logo} alt="Logo"></img>
                <img src={logo} alt="Logo"></img>
                <img src={logo} alt="Logo"></img>
                <img src={logo} alt="Logo"></img>
            </div>
        </>
    );
};

export default memo(HomePage);