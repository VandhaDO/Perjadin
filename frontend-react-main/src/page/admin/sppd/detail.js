import Axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

const DetailSppd = () => {

  const pathname = process.env.REACT_APP_URL_SPPD
  const location = window.location.pathname;
  const urlawal = pathname.replace("/v1/sppd", '')
  const urlsppd = location.replace("/sppd/", "");
  const urlapi = `${pathname}/${urlsppd}`
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [ready, setReady] = useState(false);

  // const urlapi = `${pathname}/${idSppd}`
  const loadData = () => {
    setReady(false);
    // console.log(urlpdf)
    Axios.get(urlapi).then(v => {
      setData(v.data.data)

      // console.log("urlpdf2 ", urlpdf)
      setReady(true);
    }).catch(err => {
      err.response.data
        ? setErrorMessage(err.response.data.message)
        : setErrorMessage(err.message);
      setReady(true);
      setShow(true);
    })
  }

  React.useEffect(() => {
    loadData()
  }, [])
  const pegawai = "";
  return <div>
    {/* {pegawai = data.pegawai_yang_diperintahkan} */}

    <h4 style={{ marginTop: "10px" }}>Detail SPPD</h4>
    <hr />
    <Container>
      <Row>
        <Col md="6">
          {/* {console.log(pegawai)} */}
          <Table responsive="sm" striped bordered>
            <tr>
              <th>Nomor Sppd</th>
              <td colSpan={2}>{data.nomor_sppd}</td>
            </tr>
            <tr>
              <th>Perihal</th>
              <td colSpan={2}>{data.perihal}</td>
            </tr>
            <tr>
              <th>Pejabat yang memberi perintah</th>
              <td colSpan={2}>{data.pejabat_yang_memberi_perintah?.name}</td>
            </tr>
            <tr>
              <th>Pegawai yang diperintahkan</th>
              <td colSpan={2}>{data.pegawai_yang_diperintahkan?.map(v => v.name)}</td>
            </tr>
            <tr>
              <th>Tempat Berangkat</th>
              <td colSpan={2}>{data.tempat_berangkat}</td>
            </tr>
            <tr>
              <th>Tempat Tujuan</th>
              <td colSpan={2}>{data.tempat_tujuan}</td>
            </tr>
            <tr>
              <th>Tanggal Berangkat</th>
              <td colSpan={2}>{data.tanggal_berangkat}</td>
            </tr>
            <tr>
              <th>Tanggal Kembali</th>
              <td colSpan={2}>{data.tanggal_kembali}</td>
            </tr>
            <tr>
              <th>Instansi</th>
              <td colSpan={2}>{data.instansi}</td>
            </tr>
            <tr>
              <th>Tahun</th>
              <td colSpan={2}>{data.tahun}</td>
            </tr>
            <tr>
              <th>Kode Rekening</th>
              <td colSpan={2}>{data.kode_rekening}</td>
            </tr>
            <tr>
              <th>Keterangan</th>
              <td colSpan={2}>{data.keterangan_lain}</td>
            </tr>
          </Table>
        </Col>
        <Col md="6">
          <iframe src={`${urlawal}/pdf/sppd_${data.nomor_sppd}.pdf`} style={{ overflow: "hidden" }} height="100%" width="100%"></iframe>
        </Col>
      </Row>
    </Container>
  </div>;
};

export default DetailSppd;
