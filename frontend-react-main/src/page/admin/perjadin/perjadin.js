import React from "react";

import { Alert, Button, Col, Container, Form, InputGroup, Modal, Row, Table, } from "react-bootstrap";
import { BsEye, BsPencil, BsPlus, BsSearch, BsSortDown, BsSortUp, BsTrash, BsUpload, } from "react-icons/bs";
import Pagination from 'react-js-pagination'
import { LoaderCenter } from "../../_partials/loader";
import moment from "moment-timezone";

const Perjadin = props => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="p-3">
            {!props.show ? ("") : (
              <Alert variant="danger" onClose={() => props.setShow(false)} key="alert" dismissible >
                <p>{props.errorMessage}</p>
              </Alert>
            )}
            <Button size="sm" className="float-end btn btn-primary" onClick={() => { props.history(props.pathCreate); }}>
              {" "} <BsPlus /> Tambah {props.title}
            </Button>
            <h4><b>Halaman {props.title}</b></h4>
            <hr className="mt-3" />
            <Row>
              <Col xs="3" md="1">
                <Form.Select aria-label="Default select example" onChange={(e) => { props.handlerPerPage(e.target.value); }} style={{ fontSize: "12px" }}  >
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
                    aria-describedby="basic-addon2" />
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
                      {props.header.map(v => {
                        return <th key={v} style={{ textTransform: "capitalize" }}><center> {v}<i className='float-end text-secondary'>{(props.sortval == "asc") ? <BsSortUp className={(v == props.sort) ? "text-black" : ''} onClick={() => props.sortHandle(v)} /> : <BsSortDown className={(v == props.sort) ? "text-black" : ''} onClick={() => props.sortHandle(v)} />}</i> </center></th>
                      })}
                      <th><center>Action</center></th>
                    </tr>
                  </thead>
                  <tbody>
                    {!props.ready ? (
                      <tr>
                        <td colSpan={11}>
                          <center>
                            <LoaderCenter text=" sedang memuat..." />
                          </center>
                        </td>
                      </tr>
                    ) : (
                      props.data.map((v, index) => {
                        const berangkat = moment(v.tanggal_berangkat);
                        const kembali = moment(v.tanggal_kembali);
                        const lama = kembali.diff(berangkat);
                        const duration = moment.duration(lama);
                        const lamaPerjalanan = duration.days();
                        const tglBerangkat = moment(v.tanggal_berangkat);

                        const perihalKey = `perihal${index}`;
                        const lokasiKey = `lokasi${index}`;
                        const tanggal_berangkatKey = `tanggal_berangkat${index}`;
                        const lamaKey = `lama${index}`;
                        const jenis_perjadinKey = `jenis_perjadin${index}`;
                        const tahunKey = `tahun${index}`;
                        const actionKey = `action${index}`;
                        const sptLinkKey = `linkSpt${index}`;
                        const ssppdLinkKey = `linkSppd${index}`;
                        const imageLinkKey = `linkImage${index}`;

                        return (
                          <tr key={index}>
                            <td key={perihalKey}>{v.perihal}</td>
                            <td key={lokasiKey}>{v.lokasi}</td>
                            <td key={tanggal_berangkatKey}>
                              {tglBerangkat.tz("Asia/Jakarta").format("DD MMM YYYY")}
                            </td>
                            <td key={lamaKey}>
                              <center>{lamaPerjalanan + 1} Hari</center>
                            </td>
                            <td key={jenis_perjadinKey}>{v.jenis_perjadin}</td>
                            <td key={tahunKey}>{v.tahun}</td>
                            <td key={ssppdLinkKey} style={{ width: "6%" }}><a style={{ cursor: 'pointer', color: 'blue' }} onClick={() => props.history(`/sppd/create/${v._id}`)}><BsPlus />Buat </a></td>
                            <td key={sptLinkKey} style={{ width: "6%" }}><a style={{ cursor: 'pointer', color: 'blue' }} onClick={() => props.history(`/spt/create/${v._id}`)}><BsPlus />Buat </a></td>
                            <td key={imageLinkKey} style={{ width: "10%" }}><a style={{ cursor: 'pointer', color: 'blue' }} onClick={() => props.history(`/kwitansi/create/${v._id}`)}><BsPlus />Buat </a></td>
                            <td key={actionKey} style={{ width: "18%", paddingLeft: 20, paddingRight: 20, }}  >
                              <Row>
                                <Col md="6" className="d-grid" style={{ padding: 0 }}>
                                  <Button variant="primary" size="sm" className="m-1" style={{ fontSize: "12px" }} onClick={() => { props.history(`/perjadin/${v._id}`); }} aria-label="Detail" >
                                    <BsEye /> Detail
                                  </Button>
                                </Col>
                                <Col
                                  md="6"
                                  className="d-grid m-0"
                                  style={{ padding: 0 }}
                                >
                                  <Button variant="warning" size="sm" className="m-1" style={{ fontSize: "12px" }} aria-label="Edit" onClick={() => {
                                    props.history(`/perjadin/edit/${v._id}`);
                                  }}
                                  >
                                    <BsPencil /> Edit
                                  </Button>
                                </Col>
                              </Row>
                              <Row>
                                <Col md="6" className="d-grid" style={{ padding: 0 }} >
                                  <Button variant="danger" size="sm" className="m-1" style={{ fontSize: "12px" }} aria-label="Delete" onClick={() => props.handleShowModal(v._id)} >
                                    <BsTrash /> Delete
                                  </Button>
                                </Col>
                                <Col md="6" className="d-grid" style={{ padding: 0 }}>
                                  <Button variant="success" size="sm" className="m-1" style={{ fontSize: "12px" }} aria-label="Upload"> <BsUpload /> Upload
                                  </Button>
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
                    activePage={props.page}
                    itemsCountPerPage={props.perPage}
                    totalItemsCount={props.datacount}
                    pageRangeDisplayed={5}
                    onChange={(e) => {
                      props.handlePageChange(e);
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Modal show={props.showModal} onHide={props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi delete ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah anda ingin Menghapus Data Pegawai ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseModal}>
            Batal
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.deleteData(props.idDelete);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Perjadin;
