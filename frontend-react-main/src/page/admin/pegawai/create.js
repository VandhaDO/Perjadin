import React from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'

import { BsCheckCircle, BsXCircle } from 'react-icons/bs'

const CreatePegawai = props => {

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={{ span: 10, offset: 1 }} className='p-3' style={{ fontSize: "13px" }}>
                        <h4>Tambah Pegawai</h4>
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
                                <Col md="7">
                                    <Form.Group className="mb-1" controlId="name">
                                        <Form.Label>Nama</Form.Label>
                                        <Form.Control style={{ fontSize: "13px" }} id="name" type="text" onChange={(e) => { props.setName(e.target.value) }} placeholder="Enter name" />
                                        {(!props.errorname) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorname}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="email">
                                        <Form.Label>Alamat Email</Form.Label>
                                        <Form.Control style={{ fontSize: "13px" }} id="email" type="email" onChange={(e) => { props.setEmail(e.target.value) }} placeholder="Enter email" />
                                        {(!props.erroremail) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.erroremail}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="email">
                                        <Form.Label>NIP</Form.Label>
                                        <Form.Control style={{ fontSize: "13px" }} id="nip" type="text" onChange={(e) => { props.setNip(e.target.value) }} placeholder="Enter NIP" />
                                        {(!props.errornip) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errornip}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Instansi</Form.Label>
                                        <Form.Control style={{ fontSize: "13px" }} type="text" onChange={(e) => { props.setInstansi(e.target.value) }} placeholder="Enter Instansi" />
                                        {(!props.errorinstansi) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorinstansi}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Row>
                                        <Col md="6">
                                            <Form.Group className="mb-1" controlId="passwod">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control style={{ fontSize: "13px" }} type={props.showPassword} onChange={(e) => { props.setPassword(e.target.value) }} placeholder="Enter password" />
                                                <Form.Check type='checkbox' label="Show Password" onChange={(e) => { props.changeShowPassword() }} checked={(props.showPassword == "text") ? true : false} />
                                                {(!props.errorpassword) ? '' :
                                                    <Form.Text className="text-danger">
                                                        {props.errorpassword}
                                                    </Form.Text>
                                                }
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                                <Form.Label>Ulangi Password</Form.Label>
                                                <Form.Control style={{ fontSize: "13px" }} type={props.showPassword} onChange={(e) => { props.setRepeatPassword(e.target.value) }} placeholder="Repeat Password" />
                                                <Form.Check type='checkbox' label="Show Password" onChange={(e) => { props.changeShowPassword() }} checked={(props.showPassword == "text") ? true : false} />
                                                {(!props.errorrepeatPassword) ? '' :
                                                    <Form.Text className="text-danger">
                                                        {props.errorrepeatPassword}
                                                    </Form.Text>
                                                }
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="5">
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Jabatan</Form.Label>
                                        <Form.Control style={{ fontSize: "13px" }} type="text" onChange={(e) => { props.setJabatan(e.target.value) }} placeholder="Enter Jabatan" />
                                        {(!props.errorjabatan) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorjabatan}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Bidang</Form.Label>
                                        <Form.Control style={{ fontSize: "13px" }} type="text" onChange={(e) => { props.setBidang(e.target.value) }} placeholder="Enter Bidang" />
                                        {(!props.errorbidang) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorbidang}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Golongan</Form.Label>
                                        <Form.Control style={{ fontSize: "13px" }} type="text" onChange={(e) => { props.setGolongan(e.target.value) }} placeholder="Enter Golongan" />
                                        {(!props.errorgolongan) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorgolongan}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="email">
                                        <Form.Label>Pangkat</Form.Label>
                                        <Form.Control style={{ fontSize: "13px" }} id="nip" type="text" onChange={(e) => { props.setPangkat(e.target.value) }} placeholder="Enter Pangkat" />
                                        {(!props.errorPangkat) ? '' :
                                            <Form.Text className="text-danger">
                                                {props.errorPangkat}
                                            </Form.Text>
                                        }
                                    </Form.Group>
                                    <Button type='submit' variant='success' className='float-end'><BsCheckCircle /> Simpan</Button>
                                    <Button variant='danger' className='float-end' style={{ marginRight: 5 }} onClick={() => { props.history("/pegawai") }}><BsXCircle />  Batal</Button>
                                </Col>
                            </Row>
                        </Form>
                    </ Col>
                </Row>
            </Container>
        </div >
    )
}

export default CreatePegawai