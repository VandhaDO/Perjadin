import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ImportPegawai = props => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={{ span: 10, offset: 1 }} className='p-3'>
                        <h4><b>Halaman Import Data Pegawai</b></h4>
                        <hr className='mt-3' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ImportPegawai