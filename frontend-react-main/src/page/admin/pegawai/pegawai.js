import React from 'react'
import { Alert, Button, Col, Container, Form, InputGroup, Modal, Row, Table } from 'react-bootstrap'
import { BsDownload, BsEye, BsPencil, BsPlus, BsSearch, BsSortDown, BsSortUp, BsTrash, BsUpload } from 'react-icons/bs'
import { LoaderCenter } from '../../_partials/loader'
import Pagination from 'react-js-pagination'

const Pegawai = props => {
    const pathname = process.env.REACT_APP_URL_PEGAWAI
    const urlexcel = pathname.replace("/v1/pegawai", '')
    // console.log("url", urlexcel)

    return (
        <div>
            {/* {console.log("data", props.data)} */}
            <Container fluid>
                <Row>
                    <Col className='p-3'>
                        {(!props.show ? '' :
                            <Alert variant={props.messageType} onClose={() => props.setShow(false)} dismissible>
                                <p>
                                    {(props.message) ? props.message : props.errorMessage}
                                </p>
                            </Alert>
                        )}
                        <Button size="sm" className='float-end btn btn-primary' style={{ marginRight: "5px" }} onClick={() => { props.history(props.pathCreate) }}> <BsPlus /> Tambah {props.title}</Button>
                        <Button size="sm" className='float-end btn btn-success' style={{ marginRight: "5px" }} onClick={() => { props.handleShowModalUpload() }}> <BsUpload /> Import {props.title}</Button>
                        <Button size="sm" className='float-end btn btn-danger' style={{ marginRight: "5px" }}><a target="_blank" href={`${urlexcel}/excel/base_data_pegawai.xlsx`} style={{ color: "white", textDecoration: "none" }}><BsDownload /> Download Template {props.title}</a></Button>
                        <h4><b>Halaman {props.title}</b></h4>
                        <hr className='mt-3' />
                        <Row>
                            <Col xs="3" md="1" >
                                <Form.Select aria-label="Default select example" onChange={(e) => { props.handlerPerPage(e.target.value) }} style={{ fontSize: "12px" }}>
                                    <option value="10">10</option>
                                    <option value="1">1</option>
                                    <option value="5">5</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </Form.Select>
                            </Col>
                            <Col md={{ span: 5, offset: 6 }} xs="9">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        style={{ fontSize: "12px" }}
                                        value={props.search}
                                        onChange={(e) => { props.searchHandle(e.target.value) }}
                                        placeholder="Search Data"
                                        aria-label="Search Data"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-secondary" id="button-addon2" style={{ fontSize: "12px" }}>
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
                                            {props.header.map(v => {
                                                return <th key={v} style={{ textTransform: "capitalize" }}><center> {v}<i className='float-end text-secondary'>{(props.sortval == "asc") ? <BsSortUp className={(v == props.sort) ? "text-black" : ''} onClick={() => props.sortHandle(v)} /> : <BsSortDown className={(v == props.sort) ? "text-black" : ''} onClick={() => props.sortHandle(v)} />}</i> </center></th>
                                            })}
                                            <th><center>Action</center></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            (!props.ready) ? <tr><td colSpan={8} ><center><LoaderCenter text=" sedang memuat..." /></center></td></tr> :
                                                props.data.map((v, index) => {
                                                    const nameKey = `name${index}`;
                                                    const instansiKey = `instansi${index}`;
                                                    const bidangKey = `bidang${index}`;
                                                    const jabatanKey = `jabatan${index}`;
                                                    const golonganKey = `golongan${index}`;
                                                    const actionKey = `action${index}`;
                                                    return (
                                                        <tr key={index}>
                                                            <td style={{ textTransform: "capitalize" }} key={nameKey}>{v.name}</td>
                                                            <td style={{ textTransform: "capitalize" }} key={instansiKey}>{v.instansi}</td>
                                                            <td style={{ textTransform: "capitalize" }} key={bidangKey}>{v.bidang}</td>
                                                            <td style={{ textTransform: "capitalize" }} key={jabatanKey}>{v.jabatan}</td>
                                                            <td style={{ textTransform: "capitalize" }} key={golonganKey}>{v.golongan}</td>
                                                            <td key={actionKey} style={{ width: "30%", paddingLeft: 20, paddingRight: 20 }}>
                                                                <Button style={{ fontSize: "12px" }} variant='primary' size='sm' className='m-1' onClick={() => { props.history(`/pegawai/${v._id}`) }} aria-label='Detail'><BsEye /> Detail</Button>
                                                                <Button style={{ fontSize: "12px" }} variant='warning' size='sm' className='m-1' aria-label='Edit' onClick={() => { props.history(`/pegawai/edit/${v._id}`) }} ><BsPencil /> Edit</Button>
                                                                <Button style={{ fontSize: "12px" }} variant='danger' size='sm' className='m-1' aria-label='Delete' onClick={() => props.handleShowModal(v._id)}><BsTrash /> Delete</Button>
                                                                {/* <Button style={{ fontSize: "12px" }} variant='success' size='sm' className='m-1' aria-label='Upload'><BsUpload /> Upload</Button> */}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                        }

                                    </tbody>
                                </Table>
                                <div className='float-end' >
                                    <Pagination
                                        innerClass='pagination'
                                        itemClass='page-item'
                                        linkClass='page-link'
                                        activePage={props.page}
                                        itemsCountPerPage={props.perPage}
                                        totalItemsCount={props.datacount}
                                        pageRangeDisplayed={5}
                                        onChange={(e) => {
                                            props.handlePageChange(e)
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >

            <Modal show={props.showModalUpload} onHide={props.handleCloseModal}>
                <Form onSubmit={props.importHandle}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Data Pegawai</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form.Group className="mb-1">
                            <Form.Label>Import Pegawai</Form.Label>
                            <Form.Control style={{ fontSize: "13px" }} name="excel" id="excel" type="file" onChange={(e) => { props.setFileExcel(e.target) }} placeholder="Enter name" />
                            {(!props.errorname) ? '' :
                                <Form.Text className="text-danger">
                                    {props.errorname}
                                </Form.Text>
                            }
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleCloseModal}>
                            Batal
                        </Button>
                        <Button variant="primary" type='submit'>
                            Import
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <Modal show={props.showModal} onHide={props.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Konfirmasi delete ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Apakah anda ingin Menghapus Data Pegawai ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleCloseModal}>
                        Batal
                    </Button>
                    <Button variant="primary" onClick={() => { props.deletePegawai(props.idDelete) }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </div >
    )
}

export default Pegawai
