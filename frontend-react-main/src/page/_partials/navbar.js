import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.scss';
import { Button, Container, Modal, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const NavMenu = props => {

    const [showModal, setShowModal] = useState(false);
    const [isLogout, setLogout] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const clearLocalStorage = () => {
        localStorage.clear();
        handleCloseModal();
        setLogout(true);
    }
    const navigate = useNavigate();

    const newLocal = 'active';
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className="sticky-top">
                <Container>
                    <Navbar.Brand href="/"><b>E-PERJADIN</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav defaultActiveKey={props.activeKey}>
                            <Nav.Link className="navbar-atas" onClick={() => navigate("/")} active={props.activeKey == "/"}>Dashboard</Nav.Link>
                            <Nav.Link className="navbar-atas" onClick={() => navigate("/perjadin")} active={props.activeKey == "/perjadin"}>Perjalanan Dinas</Nav.Link>
                            <Nav.Link className="navbar-atas" onClick={() => navigate("/spt")} active={props.activeKey == "/spt"}>SPT</Nav.Link>
                            <Nav.Link className="navbar-atas" onClick={() => navigate("/sppd")} active={props.activeKey == "/sppd"}>SPPD</Nav.Link>
                            {/* <Nav.Link className="navbar-atas" onClick={() => navigate("/laporan")} active={props.activeKey == "/laporan"}>Laporan</Nav.Link> */}
                            <Nav.Link className="navbar-atas" onClick={() => navigate("/kwitansi")} active={props.activeKey == "/kwitansi"}>Kwitansi</Nav.Link>
                            <Nav.Link className="navbar-atas" onClick={() => navigate("/pegawai")} active={props.activeKey == "/pegawai"}>Pegawai</Nav.Link>

                            <Nav.Link onClick={handleShowModal}><Button variant="outline-light" size="sm">Logout!</Button> </Nav.Link>
                            {/* <NavDropdown title="About Me" id="collasible-nav-dropdown" variant="dark">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Konfirmasi Logout ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Apakah anda ingin logout dari akun ini ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Batal
                    </Button>
                    <Button variant="primary" onClick={clearLocalStorage}>
                        Keluar
                    </Button>
                </Modal.Footer>
            </Modal>

            {isLogout && <Navigate to="/login" />}
        </div>

    )
}

export default NavMenu