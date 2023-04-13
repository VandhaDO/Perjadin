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
import imgPerjadin from "../../../image/404.jpg";
import { BsArrowBarLeft, BsPencil } from "react-icons/bs";
import { LoaderCenter } from "../../_partials/loader";
import moment from "moment-timezone";

const DetailPerjadin = props => {
  const berangkat = moment(props.data.tanggal_berangkat).tz("Asia/Jakarta").format("DD MMM YYYY")
  const kembali = moment(props.data.tanggal_kembali).tz("Asia/Jakarta").format("DD MMM YYYY")
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
            <h4 style={{ marginTop: "10px" }}>Detail Perjalanan Dinas</h4>
            <hr />
            <Row>
              <Col md="4">
                <Image src={imgPerjadin} thumbnail={true} />
              </Col>
              <Col md="8">
                <Table responsive="sm" striped bordered>
                  <tr>
                    <th>Perihal</th>
                    <td colSpan={2}>{props.data.perihal}</td>
                  </tr>
                  <tr>
                    <th>Lokasi</th>
                    <td colSpan={2}>{props.data.lokasi}</td>
                  </tr>
                  <tr>
                    <th>Alamat</th>
                    <td colSpan={2}>{props.data.alamat}</td>
                  </tr>
                  <tr>
                    <th>Jenis Perjalanan</th>
                    <td colSpan={2}>{props.data.jenis_perjadin}</td>
                  </tr>
                  {/* <tr>
                    <th>Nomor SPT</th>
                    <td colSpan={2}>{props.data.bidang}</td>
                  </tr> */}
                  <tr>
                    <th>Tanggal Berangkat</th>
                    <td colSpan={2}>{berangkat}</td>
                  </tr>
                  <tr>
                    <th>Tanggal Kembali</th>
                    <td colSpan={2}>{kembali}</td>
                  </tr>
                  <tr>
                    <th>Tahun</th>
                    <td colSpan={2}>{props.data.tahun}</td>
                  </tr>
                </Table>
                <Button variant="success" className="float-end" onClick={() => props.history(`/perjadin/edit/${props.data._id}`)} >
                  <BsPencil /> Edit
                </Button>
                <Button
                  variant="secondary"
                  className="float-end"
                  style={{ marginRight: 5 }}
                  onClick={() => {
                    props.history("/perjadin");
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

export default DetailPerjadin;
