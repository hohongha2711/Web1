import { Routes, Route } from "react-router-dom";
import HomePage from './pages/user/homePage';
import ROUTERS from "./utils/router";
import Layouts from "./pages/user/Layouts";

const renderUserRouter = () => { 
    const userRouter = [ 
        { 
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        }
    ]

    return ( 
        <Layouts>
        <Routes> 
            { 
                userRouter.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />))
            }

        </Routes>
        </Layouts>
    )
};

const RouterCustom = () => { 
     return renderUserRouter();
};

export default RouterCustom;