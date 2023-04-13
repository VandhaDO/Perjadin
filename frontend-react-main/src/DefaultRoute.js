import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom';
import Dashboard from './page/admin/_partials/dashboard';
import NavbarAdmin from './page/admin/_partials/navbar';
import Footr from './page/_partials/footer';
import { LoaderCenter } from './page/_partials/loader';
import NavMenu from './page/_partials/navbar';

const DefaultRoute = props => {
    const isLogin = localStorage.isLogin != null;
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(document.readyState == 'complete')
        // console.log("ready : ", ready)
    }, [])

    // const path = window.location.pathname

    return isLogin ? !ready ? <LoaderCenter size="lg" /> : <div>
        <NavMenu />

        {/* <div id="wrapper"> */}
        <div style={{ marginBottom: "40px" }} className="bg-light" >
            {/* <NavbarAdmin /> */}
            <Dashboard>
                <Outlet />
            </Dashboard>
            {/* </div> */}
        </div> </div> : <Navigate to="/login" />;
}

export default DefaultRoute