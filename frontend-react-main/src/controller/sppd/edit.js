import Axios from "axios";
import moment from "moment-timezone";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreateSppd from "../../page/admin/sppd/create";
import EditSppd from "../../page/admin/sppd/edit";

const ControllerEditSppd = () => {
    const pathname = useLocation().pathname;
    const idSppd = pathname.replace("/sppd/edit/", "");
    // const urlPerjadin = `${process.env.REACT_APP_URL_PERJADIN}/${idSppd}`;
    // const urlCreate = `${process.env.REACT_APP_URL_SPPD}/insert`;
    const urldata = `${process.env.REACT_APP_URL_SPPD}/${idSppd}`;
    const urledit = `${process.env.REACT_APP_URL_PERJADIN}/update`
    const urlPegawai = `${process.env.REACT_APP_URL_PEGAWAI}`;
    const urlpdf = `${process.env.REACT_APP_URL_SPPD}/pdf/create`;

    const [dataPerjalanan, setDataPerlalanan] = useState("");

    const [urlPerjadin, setUrlPerjadin] = useState('')
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [ready, setReady] = useState(true);

    const [nomorSppd, setNomorSppd] = useState("");
    const [textPemberiPerintah, setTextPemberiPerintah] = useState("");
    const [pemberiPerintah, setPemberiPerintah] = useState([]);
    const [penerimaPerintah, setPenerimaPerintah] = useState([]);
    const [textPenerimaPerintah, setTextPenerimaPerintah] = useState("");
    const [perihal, setPerihal] = useState("");
    const [angkutan, setAngkutan] = useState("");
    const [tempatBernagkat, setTempatBerangkat] = useState("");
    const [tempatTujuan, setTempatTujuan] = useState("");
    const [lamaPerjalanan, setLamaPerjalanan] = useState("");
    const [tanggalBerangkat, setTanggalBerangkat] = useState("");
    const [tanggalKembali, setTanggalKembali] = useState("");
    const [instansi, setInstansi] = useState("");
    const [keteranganLain, setKeteranganLain] = useState("");
    const [dikeluarkanDi, setDikeluarkanDi] = useState("");
    const [kodeRekening, setKodeRekening] = useState("");
    const [tanggalSppd, setTanggalSppd] = useState("");
    const [tahun, setTahun] = useState("");
    const [dataPegawai, setDataPegawai] = useState([]);
    const [sugesstionPejabat, setSugesstionPejabat] = useState([]);
    const [sugesstionPegawai, setSugesstionPegawai] = useState([]);

    const [errorNomorSppd, setErrorNomorSppd] = useState("");
    const [errorPemberiPerintah, setErrorPemberiPerintah] = useState();
    const [errorPenerimaPerintah, setErrorPenerimaPerintah] = useState([]);
    const [errorPerihal, setErrorPerihal] = useState("");
    const [errorAnngkutan, setErrorAngkutan] = useState("");
    const [errorTempatBernagkat, setErrorTempatBerangkat] = useState("");
    const [errorTempatTujuan, setErrorTempatTujuan] = useState("");
    const [errorLamaPerjalanan, setErrorLamaPerjalanan] = useState("");
    const [errorTanggalBerangkat, setErrorTanggalBerangkat] = useState("");
    const [errorTanggalKembali, setErrorTanggalKembali] = useState("");
    const [errorInstansi, setErrorInstansi] = useState("");
    const [errorKeteranganLain, setErrorKeteranganLain] = useState("");
    const [errorDikeluarkanDi, setErrorDikeluarkanDi] = useState("");
    const [errorKodeRekening, setErrorKodeRekening] = useState("");
    const [errorTanggalSppd, setErrorTanggalSppd] = useState("");
    const [errorTahun, setErrorTahun] = useState("");

    const history = useNavigate();

    const getSppd = async () => {
        setReady(false)
        await Axios.get(urldata).then(v => {
            // console.log("v", v.data.data)
            setData(v.data.data);
            setUrlPerjadin(`${process.env.REACT_APP_URL_PERJADIN}/${v.data.data._id}`)
            // setFormData(v.data.data)
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

    const setErrorNotif = (err) => {
        err.map((v) => {
            if (v.param == "nomor_sppd") {
                setErrorNomorSppd(v.msg);
            } else if (v.param == "pegawai_yang_diperintahkan") {
                setErrorPenerimaPerintah(v.msg);
            } else if (v.param == "pejabat_yang_memberi_perintah") {
                setErrorPemberiPerintah(v.msg);
            } else if (v.param == "perihal") {
                setErrorPerihal(v.msg);
            } else if (v.param == "angkutan") {
                setErrorAngkutan(v.msg);
            } else if (v.param == "tempat_berangkat") {
                setErrorTempatBerangkat(v.msg);
            } else if (v.param == "tempat_tujuan") {
                setErrorTempatTujuan(v.msg);
            } else if (v.param == "lama_perjalanan") {
                setErrorLamaPerjalanan(v.msg);
            } else if (v.param == "tanggal_berangkat") {
                setErrorTanggalBerangkat(v.msg);
            } else if (v.param == "tanggal_kembali") {
                setErrorTanggalKembali(v.msg);
            } else if (v.param == "instansi") {
                setErrorInstansi(v.msg);
            } else if (v.param == "keterangan_lain") {
                setErrorKeteranganLain(v.msg);
            } else if (v.param == "dikeluarkan_di") {
                setErrorDikeluarkanDi(v.msg);
            } else if (v.param == "tanggal_sppd") {
                setErrorTanggalSppd(v.msg);
            } else if (v.param == "kode_rekening") {
                setErrorKodeRekening(v.msg);
            } else if (v.param == "tahun") {
                setErrorTahun(v.msg);
            } else {
                setErrorMessage(v.msg);
            }
        });
    };

    const setData = (val) => {
        setDataPerlalanan(val);
        setPerihal(val.perihal);
        setTahun(val.tahun);
        const tglBerangkat = moment(val.tanggal_berangkat);
        const tglKembali = moment(val.tanggal_kembali);
        const lama = tglKembali.diff(tglBerangkat);
        const duration = moment.duration(lama);
        const lamaPerjalanan = duration.days() + 1;
        setLamaPerjalanan(lamaPerjalanan);
        setTanggalBerangkat(tglBerangkat.tz("Asia/Jakarta").format("DD MMM YYYY"));
        setTanggalKembali(tglKembali.tz("Asia/Jakarta").format("DD MMM YYYY"));
        setTempatTujuan(val.tempat_tujuan);
        setNomorSppd(val.nomor_sppd)
        const pejabatPemberiPerintah = {
            name: val.pejabat_yang_memberi_perintah.name,
            jabatan: val.pejabat_yang_memberi_perintah.jabatan,
            pangkat: val.pejabat_yang_memberi_perintah.pangkat,
            nip: val.pejabat_yang_memberi_perintah.nip,
            golongan: val.pejabat_yang_memberi_perintah.golongan,
        }
        setTextPemberiPerintah(`${pejabatPemberiPerintah.name} - ${pejabatPemberiPerintah.jabatan}`);
        setPemberiPerintah(pejabatPemberiPerintah)
        setPenerimaPerintah({
            name: val.pegawai_yang_diperintahkan.name,
            jabatan: val.pegawai_yang_diperintahkan.jabatan,
            pangkat: val.pegawai_yang_diperintahkan.pangkat,
            nip: val.pegawai_yang_diperintahkan.nip,
            golongan: val.pegawai_yang_diperintahkan.golongan,
        });
        setTextPenerimaPerintah(`${penerimaPerintah.name} - ${penerimaPerintah.jabatan}`)
        setAngkutan(val.angkutan)
        setTempatBerangkat(val.tempat_berangkat)
        setInstansi(val.instansi)
        setDikeluarkanDi(val.dikeluarkan_di)
        setTanggalSppd(val.tanggal_sppd)
        setKodeRekening(val.kode_rekening)
        setKeteranganLain(val.keterangan_lain)
    };

    const loadData = () => {
        setReady(false);
        Axios.get(urlPerjadin)
            .then((value) => {
                setData(value.data.data);
                const berangkat = moment(value.tanggal_berangkat);
                const kembali = moment(value.tanggal_kembali);
                const lama = kembali.diff(berangkat);
                const duration = moment.duration(lama);
                const lamaPerjalanan = duration.days() + 1;
                setLamaPerjalanan(lamaPerjalanan);
                setReady(true);
            })
            .catch((err) => catchErr(err));
    };

    const loadPegawai = () => {
        Axios.get(urlPegawai)
            .then((v) => {
                setDataPegawai(v.data.data);
            })
            .catch((err) => catchErr(err));
    };

    const catchErr = (err) => {
        err.response.data
            ? setErrorMessage(err.response.data.message)
            : setErrorMessage(err.message);
        if (err.response.data.data.errorStatus == 400) {
            setErrorNotif(err.response.data.data.data);
        }
        setReady(true);
        setShow(true);
    };

    const submitForm = (e) => {
        e.preventDefault();
        const body = {
            nomor_sppd: nomorSppd,
            pejabat_yang_memberi_perintah: {
                name: pemberiPerintah.name,
                jabatan: pemberiPerintah.jabatan,
                pangkat: pemberiPerintah.pangkat,
                nip: pemberiPerintah.nip,
                golongan: pemberiPerintah.golongan,
            },
            pegawai_yang_diperintahkan: penerimaPerintah,
            id_perjadin: dataPerjalanan._id,
            perihal: perihal,
            angkutan: angkutan,
            tempat_berangkat: tempatBernagkat,
            tempat_tujuan: tempatTujuan,
            lama_perjalanan: lamaPerjalanan,
            tanggal_berangkat: tanggalBerangkat,
            tanggal_kembali: tanggalKembali,
            instansi: instansi,
            keterangan_lain: keteranganLain,
            dikeluarkan_di: dikeluarkanDi,
            tanggal_sppd: tanggalSppd,
            kode_rekening: kodeRekening,
            tahun: tahun,
        };

        const bodyPerjadin = {
            _id: idSppd,
            nomor_sppd: nomorSppd,
        }

        console.log("body", body);

        Axios.post(urlpdf, body)
            .then(
                Axios.post(urledit, body)
                    .then((v) => {
                        Axios.patch(urledit, bodyPerjadin).then(v => {
                            history("/sppd");
                        }).catch(err => catchErr(err))
                    })
                    .catch((err) => catchErr(err))
            )
            .catch((err) => catchErr(err));
        // console.log("body: ", body)
    };

    const sugesstPejabatHandler = (data) => {
        setTextPemberiPerintah(`${data.name} - ${data.jabatan}`);
        setPemberiPerintah(data);
        // console.log("sugesst", pemberiPerintah)
        setSugesstionPejabat("");
    };

    const sugesstPegawaiHandler = (data) => {
        setTextPenerimaPerintah(`${data.name} - ${data.jabatan}`);
        if (!penerimaPerintah) {
            setPenerimaPerintah({
                name: data.name,
                jabatan: data.jabatan,
                pangkat: data.pangkat,
                nip: data.nip,
                golongan: data.golongan,
            });
        } else {
            penerimaPerintah.push({
                name: data.name,
                jabatan: data.jabatan,
                pangkat: data.pangkat,
                nip: data.nip,
                golongan: data.golongan,
            });
            setPenerimaPerintah(penerimaPerintah);
        }
        // console.log("pgawai", penerimaPerintah)
        setSugesstionPegawai("");
    };

    const pegawaiOnChangeHandler = (text) => {
        setTextPenerimaPerintah(text);
        let matches = [];
        if (text.length > 0) {
            matches = dataPegawai.filter((pegawai) => {
                const regex = new RegExp(`${textPenerimaPerintah}`, "gi");
                return pegawai.name.match(regex);
            });
        }
        // setPenerimaPerintah('')
        setSugesstionPegawai(matches);
    };

    const pejabatOnChangeHandler = (text) => {
        // console.log("dataPerjalanan", dataPegawai)
        setTextPemberiPerintah(text);
        let matches = [];
        if (text.length > 0) {
            matches = dataPegawai.filter((pegawai) => {
                const regex = new RegExp(`${textPemberiPerintah}`, "gi");
                return pegawai.name.match(regex);
            });
        }
        setSugesstionPejabat(matches);
    };

    React.useEffect(() => {
        // cekSPPD()
        getSppd()
        // loadData();
        loadPegawai();
    }, []);

    return (
        <div>
            <EditSppd
                ready={ready}
                show={show}
                errorMessage={errorMessage}
                setShow={setShow}
                submitForm={submitForm}
                nomorSppd={nomorSppd}
                setNomorSppd={setNomorSppd}
                textPemberiPerintah={textPemberiPerintah}
                setTextPemberiPerintah={setTextPemberiPerintah}
                pemberiPerintah={pemberiPerintah}
                setPemberiPerintah={setPemberiPerintah}
                penerimaPerintah={penerimaPerintah}
                setPenerimaPerintah={setPenerimaPerintah}
                textPenerimaPerintah={textPenerimaPerintah}
                setTextPenerimaPerintah={setTextPenerimaPerintah}
                perihal={perihal}
                setPerihal={setPerihal}
                history={history}
                angkutan={angkutan}
                setAngkutan={setAngkutan}
                tempatBernagkat={tempatBernagkat}
                setTempatBerangkat={setTempatBerangkat}
                tempatTujuan={tempatTujuan}
                setTempatTujuan={setTempatTujuan}
                lamaPerjalanan={lamaPerjalanan}
                setLamaPerjalanan={setLamaPerjalanan}
                tanggalBerangkat={tanggalBerangkat}
                setTanggalBerangkat={setTanggalBerangkat}
                tanggalKembali={tanggalKembali}
                setTanggalKembali={setTanggalKembali}
                instansi={instansi}
                setInstansi={setInstansi}
                keteranganLain={keteranganLain}
                setKeteranganLain={setKeteranganLain}
                dikeluarkanDi={dikeluarkanDi}
                setDikeluarkanDi={setDikeluarkanDi}
                kodeRekening={kodeRekening}
                setKodeRekening={setKodeRekening}
                tanggalSppd={tanggalSppd}
                setTanggalSppd={setTanggalSppd}
                tahun={tahun}
                setTahun={setTahun}
                dataPegawai={dataPegawai}
                setDataPegawai={setDataPegawai}
                sugesstionPejabat={sugesstionPejabat}
                setSugesstionPejabat={setSugesstionPejabat}
                sugesstionPegawai={sugesstionPegawai}
                setSugesstionPegawai={setSugesstionPegawai}
                sugesstPegawaiHandler={sugesstPegawaiHandler}
                sugesstPejabatHandler={sugesstPejabatHandler}
                pejabatOnChangeHandler={pejabatOnChangeHandler}
                pegawaiOnChangeHandler={pegawaiOnChangeHandler}
                errorNomorSppd={errorNomorSppd}
                errorPemberiPerintah={errorPemberiPerintah}
                errorPenerimaPerintah={errorPenerimaPerintah}
                errorPerihal={errorPerihal}
                errorAnngkutan={errorAnngkutan}
                errorTempatBernagkat={errorTempatBernagkat}
                errorTempatTujuan={errorTempatTujuan}
                errorLamaPerjalanan={errorLamaPerjalanan}
                errorTanggalBerangkat={errorTanggalBerangkat}
                errorTanggalKembali={errorTanggalKembali}
                errorInstansi={errorInstansi}
                errorKeteranganLain={errorKeteranganLain}
                errorDikeluarkanDi={errorDikeluarkanDi}
                errorKodeRekening={errorKodeRekening}
                errorTanggalSppd={errorTanggalSppd}
                errorTahun={errorTahun}
            />
        </div>
    );
};

export default ControllerEditSppd;
