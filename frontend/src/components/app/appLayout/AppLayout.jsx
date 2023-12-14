import AppNav from "../appnav/AppNav";
import { Outlet } from "react-router-dom";

function AppLayout () {

    return (
        <>
            <AppNav />
            <Outlet/>
        </>
    )
}

export default AppLayout;