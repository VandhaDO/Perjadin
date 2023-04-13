import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Axios from "axios";
import Perjadin from '../../page/admin/perjadin/perjadin'

const ControllerPerjadin = () => {
    const urlapi = process.env.REACT_APP_URL_PERJADIN;
    const urlsppd = process.env.REACT_APP_URL_SPPD;

    const [idDelete, setIdDelete] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [ready, setReady] = useState(true);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [sortval, setSortval] = useState('desc')

    const [datacount, setDataCount] = useState(1);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')
    const isMessage = localStorage.message != null;
    const messg = localStorage.message;
    const messgval = localStorage.messageType;

    const setAlert = () => {
        if (isMessage) {
            setMessage(messg)
            setMessageType(messgval)
            setShow(true)
            localStorage.removeItem("message")
            localStorage.removeItem("messageType")
        }
    }

    const urlload = `${urlapi}?page=${page}&perPage=${perPage}&sort=${sort}&sortval=${sortval}&search=${search}`

    const loadData = async () => {
        setReady(false);
        await Axios.get(urlload)
            .then((v) => {
                // console.log("value", v.data.data)
                setData(v.data.data);
                setReady(true);
            })
            .catch((err) => {
                // console.log(err)
                catchErr(err)
            });
    };

    const searchHandle = (val) => {
        setSearch(val.toLowerCase())
        if (data) {
            setShow(false)
        }
    }


    const catchErr = (err) => {
        err.response.data ? setErrorMessage(err.response.data.message) : setErrorMessage(err.message);
        setReady(true);
        setShow(true);
    }

    const getDataCount = async () => {
        await Axios.get(`${urlapi}?search=${search}`)
            .then((v) => {
                setDataCount(v.data.data.length);
            })
            .catch((err) => {
                catchErr(err)
            });
    };

    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setPage(pageNumber);
    };

    const handleCloseModal = () => {
        setIdDelete("");
        setShowModal(false);
    };
    const handleShowModal = (id) => {
        setIdDelete(id);
        setShowModal(true);
    };

    const deleteData = (id) => {
        Axios.delete(`${urlapi}/${id}`)
            .then((v) => {
                handleCloseModal();
                loadData();
            })
            .catch((err) => {
                catchErr(err)
            });
    };

    const getSPPD = (id) => {
        Axios.get(`${urlsppd}/${id}`).then(v => { return v }).catch(err => catchErr(err))
    }

    const handlerPerPage = (value) => {
        setPerPage(parseInt(value, 10));
        setPage(1);
    };

    const header = [
        "perihal",
        "lokasi",
        "berangkat",
        "lama perjalanan",
        "jenis perjalanan",
        "tahun",
        "SPPD",
        "SPT",
        "Kwitansi",
    ];

    const history = useNavigate();
    const path = window.location.pathname;
    const pathCreate = path + "/create";
    const title = "Perjalanan Dinas";

    const sortHandle = (v) => {
        if (sortval == "asc") {
            setSortval("desc")
            setSort(v)
        } else {
            setSortval("asc")
            setSort(v)
        }
    }


    React.useEffect(() => {
        loadData();
        getDataCount();
        setAlert()
    }, [page, perPage, search, sort, sortval, show]);

    return (
        <div>
            <Perjadin
                show={show}
                setShow={setShow}
                sortval={sortval}
                message={message}
                messageType={messageType}
                errorMessage={errorMessage}
                history={history}
                title={title}
                handlerPerPage={handlerPerPage}
                header={header}
                search={search}
                searchHandle={searchHandle}
                sortHandle={sortHandle}
                sort={sort}
                data={data}
                ready={ready}
                page={page}
                perPage={perPage}
                datacount={datacount}
                handlePageChange={handlePageChange}
                handleShowModal={handleShowModal}
                pathCreate={pathCreate}
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                deleteData={deleteData}
                idDelete={idDelete}

            />
        </div>
    )
}

export default ControllerPerjadin