import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { BsCheckCircle, BsXCircle } from 'react-icons/bs'
import Axios from 'axios'
import CreatePegawai from '../../page/admin/pegawai/create'

const ControllerCreatePegawai = () => {

    const [showPassword, setShowPassword] = useState('password');

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [password, setPassword] = useState('')
    const [nip, setNip] = useState('')
    const [instansi, setInstansi] = useState('')
    const [jabatan, setJabatan] = useState('')
    const [bidang, setBidang] = useState('')
    const [golongan, setGolongan] = useState('')
    const [pangkat, setPangkat] = useState('')
    const roleUser = {
        id: 1,
        level: "admin"
    };
    const [role, setRole] = useState(roleUser)

    const [errorname, setErrorName] = useState('')
    const [erroremail, setErrorEmail] = useState('')
    const [errorrepeatPassword, setErrorRepeatPassword] = useState('')
    const [errorpassword, setErrorPassword] = useState('')
    const [errornip, setErrorNip] = useState('')
    const [errorinstansi, setErrorInstansi] = useState('')
    const [errorjabatan, setErrorJabatan] = useState('')
    const [errorbidang, setErrorBidang] = useState('')
    const [errorgolongan, setErrorGolongan] = useState('')
    const [errorPangkat, setErrorPangkat] = useState('')
    // const [errForm, setErrForm] = useState([])
    const [ready, setReady] = useState(false)
    const [show, setShow] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');


    const changeShowPassword = () => {
        (showPassword == 'password') ? setShowPassword('text') : setShowPassword('password');
    }

    const history = useNavigate()

    const setErrorForm = (err) => {
        err.map(v => {
            // console.log("val err", v)
            if (v.param == "name") {
                setErrorName(v.msg)
            } else if (v.param == "email") {
                setErrorEmail(v.msg)
            } else if (v.param == "password") {
                setErrorPassword(v.msg)
            } else if (v.param == "repeatPassword") {
                setErrorRepeatPassword(v.msg)
            } else if (v.param == "nip") {
                setErrorNip(v.msg)
            } else if (v.param == "instansi") {
                setErrorInstansi(v.msg)
            } else if (v.param == "bidang") {
                setErrorBidang(v.msg)
            } else if (v.param == "jabatan") {
                setErrorJabatan(v.msg)
            } else if (v.param == "golongan") {
                setErrorGolongan(v.msg)
            } else if (v.param == "pangkat") {
                setErrorPangkat(v.msg)
            } else {
                setErrorMessage(v.msg)
            }
        })
    }

    const submitForm = (e) => {

        e.preventDefault();
        const body = {
            name: name.toLowerCase(),
            email: email,
            repeatPassword: repeatPassword,
            nip: nip,
            instansi: instansi,
            jabatan: jabatan,
            bidang: bidang,
            golongan: golongan,
            pangkat: pangkat,
            password: password,
            level: role
        }

        const urlapi = `${process.env.REACT_APP_URL_PEGAWAI}/insert`;

        Axios.post(urlapi, body).then(value => {
            console.log(body)
            localStorage.setItem("message", "Pegawai Berhasil ditambah!");
            localStorage.setItem("messageType", "success");
            history("/pegawai")
        }).catch(err => {
            // console.log("err", err.response.data.data.data);
            // setErrForm(err);
            (err.response.data) ? setErrorMessage(err.response.data.message) : setErrorMessage(err.message);
            if (err.response.data.data.errorStatus == 400) {
                setErrorForm(err.response.data.data.data)
            }
            setReady(true)
            setShow(true)
        })

        console.log("body", body)

    }

    return (
        <div>
            <CreatePegawai
                show={show}
                setShow={setShow}
                errorMessage={errorMessage}
                submitForm={submitForm}
                errorname={errorname}
                erroremail={erroremail}
                errorrepeatPassword={errorrepeatPassword}
                errorpassword={errorpassword}
                errornip={errornip}
                errorinstansi={errorinstansi}
                errorjabatan={errorjabatan}
                errorbidang={errorbidang}
                errorgolongan={errorgolongan}
                errorPangkat={errorPangkat}
                ready={ready}
                history={history}
                setName={setName}
                setEmail={setEmail}
                setRepeatPassword={setRepeatPassword}
                setPangkat={setPangkat}
                setNip={setNip}
                setInstansi={setInstansi}
                setJabatan={setJabatan}
                setBidang={setBidang}
                setGolongan={setGolongan}
                setPassword={setPassword}
                showPassword={showPassword}
                changeShowPassword={changeShowPassword}
            />
        </div>
    )
}

export default ControllerCreatePegawai