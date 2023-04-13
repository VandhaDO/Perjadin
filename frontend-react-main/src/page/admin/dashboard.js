import React, { useEffect, useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import Footr from '../_partials/footer'
import NavMenu from '../_partials/navbar'

const Dashboard = () => {
    const [show, setShow] = useState(false);
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

    useEffect(() => {
        setAlert()
        // setTimeout(() => {
        //     setShow(false)
        // }, 2000)
    })

    return (
        <div>
            <Container className='p-3'>
                <Row>
                    <Col>
                        {(!show ? '' :
                            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                                <p><b>Anda Berhasil Login!</b></p>
                            </Alert>
                        )}
                        <h4 ><b>Dashboard</b></h4>
                        <hr className="mt-3" />


                        {/* <h1 className="mt-4">Dashboard</h1> */}
                        {/* <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol> */}
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">Primary Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between" >
                                        <a className="small text-white stretched-link" href="#" > View Details</a >
                                        <div className="small text-white" > <i className="fas fa-angle-right" ></i ></div >
                                    </div >
                                </div >
                            </div >
                            <div className="col-xl-3 col-md-6" >
                                <div className="card bg-warning text-white mb-4" >
                                    <div className="card-body" > Warning Card</div >
                                    <div className="card-footer d-flex align-items-center justify-content-between" >
                                        <a className="small text-white stretched-link" href="#" > View Details</a >
                                        <div className="small text-white" > <i className="fas fa-angle-right" ></i ></div >
                                    </div >
                                </div >
                            </div >
                            <div className="col-xl-3 col-md-6" >
                                <div className="card bg-success text-white mb-4" >
                                    <div className="card-body" > Success Card</div >
                                    <div className="card-footer d-flex align-items-center justify-content-between" >
                                        <a className="small text-white stretched-link" href="#" > View Details</a >
                                        <div className="small text-white" > <i className="fas fa-angle-right" ></i ></div >
                                    </div >
                                </div >
                            </div >
                            <div className="col-xl-3 col-md-6" >
                                <div className="card bg-danger text-white mb-4" >
                                    <div className="card-body" > Danger Card</div >
                                    <div className="card-footer d-flex align-items-center justify-content-between" >
                                        <a className="small text-white stretched-link" href="#" > View Details</a >
                                        <div className="small text-white" > <i className="fas fa-angle-right" ></i ></div >
                                    </div >
                                </div >
                            </div >
                        </div>
                    </Col >
                </Row >
            </Container >
        </div >
    )
}

export default Dashboard
