import Axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreatePerjadin from '../../page/admin/perjadin/create'

const ControllerCreatePerjadin = () => {

    const urlapi = `${process.env.REACT_APP_URL_PERJADIN}/insert`

    const d = new Date();
    let year = d.getFullYear();
    const [perihal, setPerihal] = useState('')
    const [lokasi, setLokasi] = useState('')
    const [alamat, setAlamat] = useState('')
    const [tanggalBerangkat, settanggalBerangkat] = useState('')
    const [tanggalKembali, setTanggalKembali] = useState('')
    const [tahun, setTahun] = useState(year)
    const [jenisPerjalanan, setJenisPerjalanan] = useState('Dalam Kota')

    const [errorPerihal, setErrorPerihal] = useState('')
    const [errorLokasi, setErrorLokasi] = useState('')
    const [errorAlamat, setErrorAlamat] = useState('')
    const [errorTanggalBerangkat, setErrorTanggalBerangkat] = useState('')
    const [errorTanggalKembali, setErrorTanggalKembali] = useState('')
    const [errorTahun, setErrorTahun] = useState('')
    const [errorJenisPerjalanan, setErrorJenisPerjalanan] = useState('')

    // const [errForm, setErrForm] = useState([])
    const [ready, setReady] = useState(false)
    const [show, setShow] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    const history = useNavigate()

    const setErrorForm = (err) => {
        err.map(v => {
            // console.log("val err", v)
            if (v.param == "perihal") {
                setErrorPerihal(v.msg)
            } else if (v.param == "lokasi") {
                setErrorLokasi(v.msg)
            } else if (v.param == "alamat") {
                setErrorAlamat(v.msg)
            } else if (v.param == "tanggalBerangkat") {
                setErrorTanggalBerangkat(v.msg)
            } else if (v.param == "tanggalKembali") {
                setErrorTanggalKembali(v.msg)
            } else if (v.param == "tahun") {
                setErrorTahun(v.msg)
            } else if (v.param == "jenisPerjalanan") {
                setErrorJenisPerjalanan(v.msg)
            } else {
                setErrorMessage(v.msg)
            }
        })
    }


    const submitForm = (e) => {
        e.preventDefault();
        const body = {
            perihal: perihal,
            lokasi: lokasi,
            alamat: alamat,
            tanggal_berangkat: tanggalBerangkat,
            tanggal_kembali: tanggalKembali,
            tahun: tahun,
            jenis_perjadin: jenisPerjalanan
        }
        Axios.post(urlapi, body).then(v => {
            history("/perjadin")
        }).catch(err => {
            (err.response.data) ? setErrorMessage(err.response.data.message) : setErrorMessage(err.message);
            if (err.response.data.data.errorStatus == 400) {
                setErrorForm(err.response.data.data.data)
            }
            setReady(true)
            setShow(true)
        })
        // console.log("body", body);
    }
    return (
        <div>
            <CreatePerjadin
                show={show}
                history={history}
                setshow={setShow}
                errorMessage={errorMessage}
                submitForm={submitForm}
                perihal={perihal}
                setPerihal={setPerihal}
                lokasi={lokasi}
                setLokasi={setLokasi}
                alamat={alamat}
                setAlamat={setAlamat}
                tanggalBerangkat={tanggalBerangkat}
                settanggalBerangkat={settanggalBerangkat}
                tanggalKembali={tanggalKembali}
                setTanggalKembali={setTanggalKembali}
                tahun={tahun}
                setTahun={setTahun}
                jenisPerjalanan={jenisPerjalanan}
                setJenisPerjalanan={setJenisPerjalanan}
                ready={ready}
                errorPerihal={errorPerihal}
                errorLokasi={errorLokasi}
                errorAlamat={errorAlamat}
                errorTanggalBerangkat={errorTanggalBerangkat}
                errorTanggalKembali={errorTanggalKembali}
                errorTahun={errorTahun}
                errorJenisPerjalanan={errorJenisPerjalanan}
            />
        </div>
    )
}

export default ControllerCreatePerjadin