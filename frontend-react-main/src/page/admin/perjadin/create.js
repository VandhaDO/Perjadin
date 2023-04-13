import React from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { BsCheckCircle, BsXCircle } from 'react-icons/bs'

const CreatePerjadin = props => {

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={{ span: 8, offset: 2 }} className='p-3'>
                        <h4>Tambah Perjalanan Dinas</h4>
                        <hr />
                        {(!props.show ? '' :
                            <Alert variant="danger" onClose={() => props.setShow(false)} dismissible>
                                <p>
                                    {props.errorMessage}
                                </p>
                            </Alert>
                        )}
                        <Form onSubmit={props.submitForm}>
                            <Row>
                                <Col md="6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Perihal</Form.Label>
                                        <Form.Control id="perihal" type="text" onChange={(e) => { props.setPerihal(e.target.value) }} placeholder="Enter Perihal" />
                                        {(!props.errorPerihal) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorPerihal}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Lokasi</Form.Label>
                                        <Form.Control id="lokasi" type="text" onChange={(e) => { props.setLokasi(e.target.value) }} placeholder="Enter Lokasi" />
                                        {(!props.errorLokasi) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorLokasi}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Alamat</Form.Label>
                                        <Form.Control id="alamat" type="text" onChange={(e) => { props.setAlamat(e.target.value) }} placeholder="Enter Alamat" />
                                        {(!props.errorAlamat) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorAlamat}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Jenis Perjalanan</Form.Label>
                                        <Form.Select aria-label="Jenis Perjalanan" onChange={(e) => { props.setJenisPerjalanan(e.target.value); }} >
                                            <option value="Dalam Kota">Dalam Kota</option>
                                            <option value="Luar Kota">Luar Kota</option>
                                        </Form.Select>
                                        {(!props.errorJenisPerjalanan) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorJenisPerjalanan}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Tanggal Berangkat</Form.Label>
                                        <Form.Control type="date" id="tanggalBerangkat" onChange={(e) => { props.settanggalBerangkat(e.target.value) }} placeholder="Enter Tanggal Berangakt" />
                                        {(!props.errorTanggalBerangkat) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorTanggalBerangkat}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Tanggal Kembali</Form.Label>
                                        <Form.Control type="date" id="tanggalKembali" onChange={(e) => { props.setTanggalKembali(e.target.value) }} placeholder="Enter Tanggal Kembali" />
                                        {(!props.errorTanggalKembali) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorTanggalKembali}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Tahun</Form.Label>
                                        <Form.Control type="number" value={props.tahun} onChange={(e) => { props.setTahun(e.target.value) }} placeholder="Enter Tahun" />
                                        {(!props.errorTahun) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorTahun}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Button type='submit' variant='success' className='float-end'><BsCheckCircle /> Simpan</Button>
                                    <Button variant='danger' className='float-end' style={{ marginRight: 5 }} onClick={() => { props.history("/perjadin") }}><BsXCircle />  Batal</Button>
                                </Col>
                            </Row>
                        </Form>
                        {/* <p> Halaman Create Perjadin</p> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CreatePerjadin