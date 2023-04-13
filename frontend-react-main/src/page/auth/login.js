import React, { useState } from 'react';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import LogoBjn from '../../image/Logo_Kabupaten_Bojonegoro.png'

import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import "../style/login.scss"


const Login = props => {
    const [show, setShow] = useState(false);
    const [showPass, setShowPassword] = useState('password');
    const navigate = useNavigate()

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorMessage, setError] = React.useState('');

    const [ready, setReady] = React.useState(true);

    const changeShowPassword = () => {
        (showPass == 'password') ? setShowPassword('text') : setShowPassword('password');
    }

    const testLogin = (e) => {
        setReady(false)
        e.preventDefault();
        console.log("login cuy!")
        console.log("email: ", email)
        console.log("password: ", password)
        const body = {
            "email": email,
            "password": password
        };
        Axios.post('http://localhost:4000/v1/auth/login', body)
            .then(result => {
                const responseAPI = result.data;
                const isLogin = localStorage.setItem("isLogin", true);
                localStorage.setItem("user", responseAPI.data.email);
                localStorage.setItem("role", responseAPI.data.level.level);
                localStorage.setItem("message", "Anda Berhasil Login");
                localStorage.setItem("messageType", "success");
                navigate("/")
                setReady(true)
            })
            .catch(err => {
                // setError(err.response.data.message);

                console.log("err: ", err);
                (err.response.data) ? setError(err.response.data.message) : setError(err.message);

                console.log("err: ", errorMessage);
                setShow(true);
                setReady(true)

            })

        console.log("login");
    }

    return <div> {
        <Container>
            <Row style={{ margin: 0, position: "absolute", top: "20%" }}>
                <Col md={{ span: 8, offset: 2 }}>

                    <Container fluid>
                        <MDBCard>
                            <MDBRow className='g-0 d-flex align-items-center p-3'>

                                <MDBCol md='4' style={{ padding: 40 }}>
                                    <MDBCardImage src={LogoBjn} alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
                                </MDBCol>

                                <MDBCol md='8'>
                                    <MDBCardBody className="paddingLogin">
                                        <Form onSubmit={testLogin}>
                                            {(!show ? '' :
                                                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                                    <p>
                                                        {errorMessage}
                                                    </p>
                                                </Alert>
                                            )}
                                            <center><h6 className='mb-3'>Login Form</h6></center>
                                            <MDBInput wrapperClass='mb-3 mt-6' placeholder='Email address' id='form1' type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                                            <MDBInput wrapperClass='mb-3' placeholder='Password' id='form2' type={showPass} value={password} onChange={(e) => { setPassword(e.target.value) }} required />

                                            <div className="d-flex justify-content-between">
                                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Show Password' onChange={() => {
                                                    changeShowPassword();
                                                }} />
                                                <a href="!#">Forgot password?</a>
                                            </div>
                                            <Button type='submit' className="mb-4 w-100 mt-3" >{(!ready) ? <Spinner animation="border" role="login" size="sm" /> : ''} Sign in</Button>
                                        </Form>
                                    </MDBCardBody>

                                </MDBCol>

                            </MDBRow>

                        </MDBCard>
                    </Container>
                </Col>
            </Row>
        </Container>
    }</div>
}

export default Login
