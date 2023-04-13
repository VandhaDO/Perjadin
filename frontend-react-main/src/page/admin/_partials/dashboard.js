import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-light bg-white text-black" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                <a className="nav-link" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                                </a>
                                <div className="sb-sidenav-menu-heading">Menu</div>
                                <a className="nav-link" onClick={() => navigate("/perjadin")} style={{ cursor: "pointer" }}>
                                    <div className="sb-nav-link-icon"><i className="fa fa-suitcase"></i></div>
                                    Perjalanan Dinas
                                </a>
                                <a className="nav-link" onClick={() => navigate("/spt")} style={{ cursor: "pointer" }}>
                                    <div className="sb-nav-link-icon"><i className="fa fa-file-text"></i></div>
                                    SPT
                                </a>
                                <a className="nav-link" onClick={() => navigate("/sppd")} style={{ cursor: "pointer" }}>
                                    <div className="sb-nav-link-icon"><i className="fa fa-file"></i></div>
                                    SPPD
                                </a>
                                {/* <a className="nav-link" onClick={() => navigate("/laporan")} style={{ cursor: "pointer" }}>
                                    <div className="sb-nav-link-icon"><i className="fas fa-flag"></i></div>
                                    Laporan
                                </a> */}
                                <a className="nav-link" onClick={() => navigate("/kwitansi")} style={{ cursor: "pointer" }}>
                                    <div className="sb-nav-link-icon"><i className="fa fa-sticky-note"></i></div>
                                    Kwiitansi
                                </a>
                                <a className="nav-link" onClick={() => navigate("/pegawai")} style={{ cursor: "pointer" }}>
                                    <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                                    Pegawai
                                </a>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Admin
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content" style={{ backgroundColor: "#ebf8f1", padding: "5px 20px" }}>
                    <main>
                        <Outlet />
                    </main>
                    <footer className="py-3 bg-white mt-auto" >
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Pemkab Bojonegoro 2022</div>
                                <div>
                                    <a href="#" style={{ color: "gray", textDecoration: "none" }}>Privacy Policy</a>
                                    &middot;
                                    <a href="#" style={{ color: "gray", textDecoration: "none" }}>Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Dashboard