import React, { useState } from 'react'

import Moment from "moment-timezone"

import { Button, Col, Container, Form, InputGroup, ListGroup, Pagination, Row, Table } from 'react-bootstrap'
import { BsEye, BsPencil, BsPlus, BsSearch, BsSortUp, BsTrash, BsUpload } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Tables = props => {
    const [ready, setReady] = useState(true);

    // const dataPegawai = () => {
    //     // console.log("data peg: ", data)
    //     // console.log("data path: ", path)
    //     setReady(false)
    //     return (

    //     )
    //     setReady(true)
    // }

    const history = useNavigate();
    const data = props.data
    const path = window.location.pathname
    const pathCreate = path + "/create"
    // console.log('path: ', pathCreate)
    return (
        <div>
            <Row>
                <Col md={{ span: 10, offset: 1 }} className='p-3'>
                    <Button size="sm" className='float-end btn btn-primary' onClick={() => { history(pathCreate) }}> <BsPlus /> Tambah {props.title}</Button>
                    <h4><b>Halaman {props.title}</b></h4>
                    <hr className='mt-3' />
                    <Row>
                        <Col xs="3" md="2" >
                            <Form.Select aria-label="Default select example">
                                <option>10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </Form.Select>
                        </Col>
                        <Col md={{ span: 5, offset: 5 }} xs="9">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Search Data"
                                    aria-label="Search Data"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    <BsSearch /> Search
                                </Button>
                            </InputGroup>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table responsive="sm" striped bordered hover>
                                <thead>
                                    <tr>
                                        {/* <th>#</th> */}
                                        {props.header.map(v => {
                                            return <th><center> {v}<i className='float-end text-secondary'><BsSortUp /></i> </center></th>
                                        })}
                                        <th><center>Action<i className='float-end text-secondary'><BsSortUp /></i></center></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map(v => {
                                            const tglBerangkat = Moment(v.tanggal_berangkat)
                                            const tglKembali = Moment(v.tanggal_kembali)
                                            return (
                                                <tr>
                                                    {/* <td>1</td> */}
                                                    <td key="perihal">{v.perihal}</td>
                                                    <td key="lokasi">{v.lokasi}</td>
                                                    <td key="alamat">{v.alamat}</td>
                                                    <td key="tanggal_berangkat">{tglBerangkat.tz('Asia/Jakarta').format('DD MMM YYYY')}</td>
                                                    <td key="tanggal_kembali">{tglKembali.tz('Asia/Jakarta').format('DD MMM YYYY')}</td>
                                                    <td key="jenis_perjadin">{v.jenis_perjadin}</td>
                                                    <td key="tahun">{v.tahun}</td>
                                                    <td key="action" style={{ width: "20%", paddingLeft: 20, paddingRight: 20 }}>
                                                        <Row>
                                                            <Col md="6" className='d-grid' style={{ padding: 0 }}>
                                                                <Button variant='primary' size='sm' className='m-1' aria-label='Detail'><BsEye /> Detail</Button>
                                                            </Col>
                                                            <Col md="6" className='d-grid m-0' style={{ padding: 0 }}>
                                                                <Button variant='warning' size='sm' className='m-1' aria-label='Edit'><BsPencil /> Edit</Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="6" className='d-grid' style={{ padding: 0 }}>

                                                                <Button variant='danger' size='sm' className='m-1' aria-label='Delete'><BsTrash /> Delete</Button>
                                                            </Col>
                                                            <Col md="6" className='d-grid' style={{ padding: 0 }}>
                                                                <Button variant='success' size='sm' className='m-1' aria-label='Upload'><BsUpload /> Upload</Button>

                                                            </Col>
                                                        </Row>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                </tbody>
                            </Table>
                            <Pagination className='float-end'>
                                <Pagination.First />
                                <Pagination.Prev />
                                {/* <Pagination.Item>{1}</Pagination.Item> */}
                                {/* <Pagination.Ellipsis /> */}

                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                {/* <Pagination.Item disabled>{14}</Pagination.Item> */}

                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Tables