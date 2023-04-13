import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footr from '../../_partials/footer'
import NavMenu from '../../_partials/navbar'

const Laporan = () => {
    const [show, setShow] = useState(false)
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

    return (
        <div>
            <Container className='p-3'>
                <Row>
                    <Col>
                        <p>halaman Laporan</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Laporan
