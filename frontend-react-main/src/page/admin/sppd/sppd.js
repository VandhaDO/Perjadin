import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Form, InputGroup, Modal, Row, Table, } from "react-bootstrap";
import { BsEye, BsPencil, BsPlus, BsSearch, BsSortUp, BsTrash, BsUpload, } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import moment from "moment-timezone";
import { LoaderCenter } from '../../_partials/loader';
import Pagination from 'react-js-pagination';

const Sppd = () => {
    const urlapi = process.env.REACT_APP_URL_SPPD;

    const [show, setShow] = useState(false);
    const [idDelete, setIdDelete] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [ready, setReady] = useState(true);
    const [data, setData] = useState([]);

    const [datacount, setDataCount] = useState(1);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);


    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')
    const isMessage = localStorage.message != null;
    const messagevariant = localStorage.messageType != null;

    const setAlert = () => {
        if (isMessage) {
            setMessage(isMessage)
            setMessageType(messagevariant)
            setShow(true)
            localStorage.removeItem("message")
            localStorage.removeItem("messageType")
        }
    }

    const loadData = async () => {
        setReady(false);
        await Axios.get(`${urlapi}?page=${page}&perPage=${perPage}`)
            .then((v) => {
                // console.log("value", v.data.data)
                setData(v.data.data);
                setReady(true);
            })
            .catch((err) => { catchErr(err) });
    };

    const catchErr = (err) => {
        // console.log(err)
        err.response.data ? setErrorMessage(err.response.data.message) : setErrorMessage(err.message);
        setReady(true);
        setShow(true);
    }

    const getDataCount = async () => {
        await Axios.get(`${urlapi}`)
            .then((v) => {
                setDataCount(v.data.data.length);
            })
            .catch((err) => { catchErr(err) });
    };

    const deleteProcess = (id) => {
        Axios.delete(`${process.env.REACT_APP_URL_SPPD}/${id}`).then(v => {
            handleCloseModal()
            loadData()
        }).catch(err => { catchErr(err) })
    }

    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setPage(pageNumber);
    };

    const handleCloseModal = () => {
        setIdDelete("");
        setShowModal(false);
    };
    const handleShowModal = (id) => {
        setIdDelete(id);
        setShowModal(true);
    };

    const deleteData = (id) => {
        Axios.delete(`${urlapi}/${id}`)
            .then((v) => {
                handleCloseModal();
                loadData();
            })
            .catch((err) => { catchErr(err) });
    };

    const handlerPerPage = (value) => {
        setPerPage(parseInt(value, 10));
        setPage(1);
    };

    const header = [
        "Nomor SPPD",
        "Perihal",
        "Lokasi",
        "Pegawai yang diperintahkan",
        "Tanggal Perjalanan",
        "Lama Perjalanan",
        "pdf",
    ];

    const history = useNavigate();

    React.useEffect(() => {
        loadData();
        getDataCount();
        setAlert()
    }, [page, perPage]);

    return (
        <div>
            <Container className='p-3'>
                <Row>
                    <Col className="p-3">
                        {!show ? ("") : (
                            <Alert variant="danger" onClose={() => setShow(false)} key="alert" dismissible >
                                <p>{errorMessage}</p>
                            </Alert>
                        )}
                        <h4><b>Halaman SPPD</b></h4>
                        <hr className="mt-3" />

                        <Row>
                            <Col xs="3" md="1">
                                <Form.Select aria-label="Default select example" onChange={(e) => { handlerPerPage(e.target.value); }} style={{ fontSize: "12px" }}  >
                                    <option value="10">10</option>
                                    <option value="1">1</option>
                                    <option value="5">5</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </Form.Select>
                            </Col>
                            <Col md={{ span: 5, offset: 6 }} xs="9">
                                <InputGroup className="mb-3">
                                    <Form.Control placeholder="Search Data" aria-label="Search Data" aria-describedby="basic-addon2" />
                                    <Button variant="outline-secondary" id="button-addon2">
                                        <BsSearch /> Search
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Table responsive="sm" striped bordered hover style={{ fontSize: "12px" }}>
                                    <thead>
                                        <tr>
                                            {/* <th>#</th> */}
                                            {header.map((v) => {
                                                return (
                                                    <th key={v}>
                                                        <center>
                                                            {" "} {v} <i className="float-end text-secondary">  <BsSortUp />   </i>{" "}
                                                        </center>
                                                    </th>
                                                );
                                            })}
                                            <th key="action"> <center> Action <i className="float-end text-secondary"> <BsSortUp /> </i></center></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {!ready ? (
                                            <tr>
                                                <td colSpan={11}>
                                                    <center>
                                                        <LoaderCenter text=" sedang memuat..." />
                                                    </center>
                                                </td>
                                            </tr>
                                        ) : (
                                            data.map((v, index) => {
                                                const berangkat = moment(v.tanggal_berangkat).tz("Asia/Jakarta").format("DD MMM YYYY");

                                                const pathname = process.env.REACT_APP_URL_SPPD
                                                const urlawal = pathname.replace("/v1/sppd", '')
                                                const urlpdf = `${urlawal}/pdf/sppd_${v.nomor_sppd}.pdf`
                                                return (
                                                    <tr key={index}>
                                                        <td key={`nomor_sppd${index}`}><center>{v.nomor_sppd}</center></td>
                                                        <td key={`perihal${index}`}>{v.perihal}</td>
                                                        <td key={`tempat_tujuan${index}`}>{v.tempat_tujuan}</td>
                                                        <td key={`pegawai${index}`}>{v.pegawai_yang_diperintahkan.map((v, i) => {
                                                            return (i > 0) ? `, ${v.name}` : v.name
                                                        })}</td>
                                                        <td key={`tanggal_berangkat${index}`}>{berangkat}</td>
                                                        <td key={`lama_perjalanan${index}`}>{v.lama_perjalanan} Hari</td>
                                                        <td key={`pdf${index}`}><a href={urlpdf} target="_blank">Lihat PDF</a></td>
                                                        <td key={`action${index}`} style={{ width: "18%", paddingLeft: 20, paddingRight: 20, }}  >
                                                            <Row>
                                                                <Col md="6" className="d-grid" style={{ padding: 0 }}>
                                                                    <Button variant="primary" size="sm" className="m-1" style={{ fontSize: "12px" }} onClick={() => { history(`/sppd/${v._id}`); }} aria-label="Detail" >
                                                                        <BsEye /> Detail
                                                                    </Button>
                                                                </Col>
                                                                <Col
                                                                    md="6"
                                                                    className="d-grid m-0"
                                                                    style={{ padding: 0 }}
                                                                >
                                                                    <Button variant="warning" size="sm" className="m-1" style={{ fontSize: "12px" }} aria-label="Edit" onClick={() => {
                                                                        history(`/sppd/edit/${v._id}`);
                                                                    }}
                                                                    >
                                                                        <BsPencil /> Edit
                                                                    </Button>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="6" className="d-grid" style={{ padding: 0 }} >
                                                                    <Button variant="danger" size="sm" className="m-1" style={{ fontSize: "12px" }} aria-label="Delete" onClick={() => handleShowModal(v._id)} >
                                                                        <BsTrash /> Delete
                                                                    </Button>
                                                                </Col>
                                                                <Col md="6" className="d-grid" style={{ padding: 0 }}>
                                                                    {/* <Button variant="success" size="sm" className="m-1" style={{ fontSize: "12px" }} aria-label="Upload"> <BsUpload /> Upload
                                                                    </Button> */}
                                                                </Col>
                                                            </Row>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        )}
                                    </tbody>
                                </Table>
                                <div className="float-end">
                                    <Pagination
                                        innerClass="pagination"
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        activePage={page}
                                        itemsCountPerPage={perPage}
                                        totalItemsCount={datacount}
                                        pageRangeDisplayed={5}
                                        onChange={(e) => {
                                            handlePageChange(e);
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>


            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Konfirmasi delete ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Apakah anda ingin Menghapus Data ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Batal
                    </Button>
                    <Button variant="primary" onClick={() => { deleteProcess(idDelete) }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Sppd
