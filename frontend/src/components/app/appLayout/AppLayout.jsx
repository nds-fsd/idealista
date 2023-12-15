import AppNav from "../appnav/AppNav";
import { Outlet } from "react-router-dom";
import AppFooter from "../appFooter/AppFooter";

function AppLayout () {

    return (
        <>
            <AppNav />
            <Outlet/>
            <AppFooter/>
            
    
        </>
    )
}

export default AppLayout;