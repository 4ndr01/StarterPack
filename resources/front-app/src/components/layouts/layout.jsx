import {useLocation} from "react-router-dom";
import {Outlet} from "react-router-dom";
import HomePage from "../../routes/homePage";
import Nav from "./nav";
import Footer from "./footer";

export default function Layout() {
    const {pathname} = useLocation();
    return (
        <>
            <div>
                <Nav/>
                {pathname === '/' ?
                    (<>
                            <div className="pageFormat">
                                <HomePage/>
                            </div>
                        </>
                    ) : (
                        <div className="pageFormat">
                            <Outlet/>
                        </div>
                    )
                }
                <Footer/>
            </div>
        </>
    );
}