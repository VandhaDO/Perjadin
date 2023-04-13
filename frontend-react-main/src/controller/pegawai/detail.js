import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import DetailPegawai from '../../page/admin/pegawai/detail'

const ControllerDetailPegawai = () => {

    // const [idPegawai, setIdPegawai] = useSearchParams()
    const pathname = window.location.pathname;
    const idPegawai = pathname.replace("/pegawai/", "");
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [ready, setReady] = useState(false);
    const urldata = `${process.env.REACT_APP_URL_PEGAWAI}/${idPegawai}`;
    // console.log("url", urldata)

    const dataPegawai = async () => {
        setReady(false);
        Axios.get(urldata)
            .then((v) => {
                setData(v.data.data);
                // console.log("data", data)
                setReady(true);
            })
            .catch((err) => {
                err.response.data
                    ? setErrorMessage(err.response.data.message)
                    : setErrorMessage(err.message);
                setReady(true);
                setShow(true);
            });
    };

    const history = useNavigate();

    React.useEffect(() => {
        dataPegawai();
    }, []);
    return (
        <div>
            <DetailPegawai
                history={history}
                show={show}
                data={data}
                setShow={setShow}
                errorMessage={errorMessage}
                ready={ready}
            />
        </div>
    )
}

export default ControllerDetailPegawai