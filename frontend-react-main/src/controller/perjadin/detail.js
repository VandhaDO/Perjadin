import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailPerjadin from "../../page/admin/perjadin/detail";

const ControllerDetailPerjadin = () => {
    const urlapi = process.env.REACT_APP_URL_PERJADIN;
    const pathname = window.location.pathname;
    const idPegawai = pathname.replace("/perjadin/", "");
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [ready, setReady] = useState(false);
    const urldata = `${urlapi}/${idPegawai}`;

    const loadData = () => {
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
        loadData();
    }, []);

    // console.log("url", urldata)


    return (
        <div>
            <DetailPerjadin
                data={data}
                show={show}
                history={history}
                setShow={setShow}
                errorMessage={errorMessage}
                ready={ready}
            />
        </div>
    )
}

export default ControllerDetailPerjadin