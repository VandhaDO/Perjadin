import React from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import imgProfile from "../../../image/user.png";
import { BsArrowBarLeft, BsPencil } from "react-icons/bs";
import { LoaderCenter } from "../../_partials/loader";

const DetailPegawai = props => {

  return (
    <div>
      <Container>
        <Row>
          <Col>
            {(!props.ready) ? <center><LoaderCenter text=" sedang memuat..." /></center> :
              !props.show ? (
                ""
              ) : (
                <Alert
                  variant="danger"
                  onClose={() => props.setShow(false)}
                  dismissible
                >
                  <p>{props.errorMessage}</p>
                </Alert>
              )}
            <h4 style={{ marginTop: "10px" }}>Detail Pegawai</h4>
            <hr />
            <Row>
              <Col md="4">
                <Image src={imgProfile} thumbnail={true} />
              </Col>
              <Col md="8">
                <Table responsive="sm" striped bordered>
                  <tr>
                    <th>Nama</th>
                    <td colSpan={2}>{props.data.name}</td>
                  </tr>
                  <tr>
                    <th>NIP</th>
                    <td colSpan={2}>{props.data.nip}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td colSpan={2}>{props.data.email}</td>
                  </tr>
                  <tr>
                    <th>Instansi</th>
                    <td colSpan={2}>{props.data.instansi}</td>
                  </tr>
                  <tr>
                    <th>Bidang</th>
                    <td colSpan={2}>{props.data.bidang}</td>
                  </tr>
                  <tr>
                    <th>Jabatan</th>
                    <td colSpan={2}>{props.data.jabatan}</td>
                  </tr>
                  <tr>
                    <th>Pangkat</th>
                    <td colSpan={2}>{props.data.pangkat}</td>
                  </tr>
                  <tr>
                    <th>Golongan</th>
                    <td colSpan={2}>{props.data.golongan}</td>
                  </tr>
                </Table>
                <Button variant="success" className="float-end" onClick={() => props.history(`/pegawai/edit/${props.data._id}`)} >
                  <BsPencil /> Edit
                </Button>
                <Button
                  variant="secondary"
                  className="float-end"
                  style={{ marginRight: 5 }}
                  onClick={() => {
                    props.history("/pegawai");
                  }}
                >
                  <BsArrowBarLeft /> Kembali

                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    </div >
  );
};

export default DetailPegawai;
