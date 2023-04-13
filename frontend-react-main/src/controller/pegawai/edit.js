import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Axios from 'axios'

import EditPegawai from '../../page/admin/pegawai/edit'

const ControllerEditPegawai = () => {

    const pathname = useLocation().pathname
    // const pathname = window.location.pathname
    // const location = useLocation()
    const idPegawai = pathname.replace("/pegawai/edit/", '')
    const urldata = `${process.env.REACT_APP_URL_PEGAWAI}/${idPegawai}`

    const [show, setShow] = useState(false)
    const [id, setId] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState('password');
    const [ready, setReady] = useState(false)
    const [data, setData] = useState([])
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

    // console.log("url edit", urldata)

    const dataPegawai = async () => {
        setReady(false)
        await Axios.get(urldata).then(v => {
            // console.log("v", v.data.data)
            setData(v.data.data);
            setFormData(v.data.data)
            // console.log("data", data)
            setReady(true)
        }).catch(err => {
            (err.response.data) ? setErrorMessage(err.response.data.message) : setErrorMessage(err.message);
            // console.log("dataerr", data)
            // console.log("err", err);
            setReady(true)
            setShow(true)
        })
    }

    const roleChangehandler = (values) => {

    }

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

    const saveEdit = (urlapi, body) => {
        Axios.patch(urlapi, body).then(value => {
            // console.log(body)
            localStorage.setItem("message", "Data pegawai berhasil di edit!");
            localStorage.setItem("messageType", "success");
            // console.log("pesan", localStorage.message)
            history("/pegawai")
        }).catch(err => {
            console.log("err", err.response.data.data.data);
            // setErrForm(err);
            (err.response.data) ? setErrorMessage(err.response.data.message) : setErrorMessage(err.message);
            if (err.response.data.data.errorStatus == 400) {
                setErrorForm(err.response.data.data.data)
            }
            setReady(true)
            setShow(true)
        })
    }

    const setFormData = (value) => {
        setId(value._id)
        setName(value.name)
        setEmail(value.email)
        setNip(value.nip)
        setInstansi(value.instansi)
        setBidang(value.bidang)
        setJabatan(value.jabatan)
        setGolongan(value.golongan)
        setPangkat(value.pangkat)
    }

    React.useEffect(() => {
        dataPegawai()
    }, [])


    const changeShowPassword = () => {
        (showPassword == 'password') ? setShowPassword('text') : setShowPassword('password');
    }

    const history = useNavigate()

    const submitForm = (e) => {
        e.preventDefault();
        if (password == '') {
            const body = {
                _id: id,
                name: name.toLowerCase(),
                email: email,
                nip: nip,
                instansi: instansi,
                jabatan: jabatan,
                bidang: bidang,
                golongan: golongan,
                pangkat: pangkat,
                repeatPassword: repeatPassword,
                password: password,
                level: role
            }
            // console.log("body", body)
            const urlapi = `${process.env.REACT_APP_URL_PEGAWAI}/update/nonpass`
            // console.log("url", urlapi)
            saveEdit(urlapi, body)
        } else {
            const body = {
                _id: id,
                name: name.toLowerCase(),
                email: email,
                repeatPassword: repeatPassword,
                password: password,
                nip: nip,
                instansi: instansi,
                jabatan: jabatan,
                bidang: bidang,
                golongan: golongan,
                pangkat: pangkat,
                level: role
            }
            const urlapi = `${process.env.REACT_APP_URL_PEGAWAI}/update`
            // console.log("url", urlapi)

            saveEdit(urlapi, body)
            // console.log("body", body)
        }

    }

    return (
        <div>
            <EditPegawai
                show={show}
                setShow={setShow}
                errorMessage={errorMessage}
                submitForm={submitForm}
                name={name}
                email={email}
                repeatPassword={repeatPassword}
                password={password}
                nip={nip}
                instansi={instansi}
                jabatan={jabatan}
                bidang={bidang}
                golongan={golongan}
                pangkat={pangkat}
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
                roleChangehandler={roleChangehandler}
            />
        </div>
    )
}

export default ControllerEditPegawai