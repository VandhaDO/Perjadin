import React, { useState } from 'react'
import Axios from "axios";
import { useNavigate } from 'react-router-dom'
import Pegawai from '../../page/admin/pegawai/pegawai';

const ControllerPegawai = () => {
  const [data, setData] = useState([]);
  const [idDelete, setIdDelete] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showModalUpload, setShowModalUpload] = useState(false)
  const [show, setShow] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const [ready, setReady] = useState(true);
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [sortval, setSortval] = useState('desc')

  const [datacount, setDataCount] = useState(1)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

  const [fileExcel, setFileExcel] = useState('')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const isMessage = localStorage.message != null;
  const messg = localStorage.message;
  const messgval = localStorage.messageType;

  const setAlert = () => {
    if (isMessage) {
      setMessage(messg)
      // console.log("is message", message)
      setMessageType(messgval)
      setShow(true)
      localStorage.removeItem("message")
      localStorage.removeItem("messageType")
    }
  }

  const urlload = `${process.env.REACT_APP_URL_PEGAWAI}?page=${page}&perPage=${perPage}&sort=${sort}&sortval=${sortval}&search=${search}`

  const searchHandle = (val) => {
    setSearch(val.toLowerCase())
    if (data) {
      setShow(false)
    }
  }

  const dataPegawai = async () => {
    setReady(false)
    await Axios.get(urlload).then(v => {
      setData(v.data.data);
      // setShow(false)
      setReady(true)
      // console.log(urlload)
    }).catch(err => {
      catchErr(err)
    })
  }

  const catchErr = (err) => {
    (err.response.data) ? setErrorMessage(err.response.data.message) : setErrorMessage(err.message);
    setData([])
    setDataCount(0)
    setReady(true)
    setShow(true)
    setMessageType("danger")
  }

  const getDataCount = async () => {
    await Axios.get(`${process.env.REACT_APP_URL_PEGAWAI}?search=${search}`).then(v => {
      setDataCount(v.data.data.length)
    }).catch(err => {
      catchErr(err)
    })
  }

  const handlePageChange = (pageNumber) => {
    // console.log(`active page is ${pageNumber}`);
    setPage(pageNumber)
  }

  const handleCloseModal = () => {
    setIdDelete('')
    setShowModal(false)
    setShowModalUpload(false)
  };
  const handleShowModal = (id) => {
    setIdDelete(id)
    setShowModal(true);
  }

  const handleShowModalUpload = (id) => {
    setShowModalUpload(true);
  }


  const deletePegawai = (id) => {
    // console.log("id", id)
    Axios.delete(`${process.env.REACT_APP_URL_PEGAWAI}/${id}`).then(v => {
      handleCloseModal()
      dataPegawai()
    }).catch(err => {
      catchErr(err)
    })
  }

  const handlerPerPage = (value) => {
    setPerPage(parseInt(value, 10));
    setPage(1)

  }

  const header = ['name', 'instansi', 'bidang', 'jabatan', 'golongan']
  const title = "Pegawai"
  const path = window.location.pathname
  const pathCreate = path + "/create"
  const history = useNavigate();

  const sortHandle = (v) => {
    if (sortval == "asc") {
      setSortval("desc")
      setSort(v)
    } else {
      setSortval("asc")
      setSort(v)
    }
  }

  const importHandle = (e) => {
    e.preventDefault();
    const fileexcels = fileExcel.files[0]
    const urlpath = URL.createObjectURL(fileexcels)
    let data = new FormData();
    data.append('excel', fileexcels)

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    Axios.post(`${process.env.REACT_APP_URL_PEGAWAI}/excel/import`, data, config).then(val => {
      console.log("val:", val)
      setShowModalUpload(false)
    }).catch(err => console.log("error: ", err))
  }

  React.useEffect(() => {
    dataPegawai()
    getDataCount()
    setAlert()
  }, [page, perPage, search, sort, sortval, show])


  return (
    <div>
      <Pegawai
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
        deletePegawai={deletePegawai}
        idDelete={idDelete}
        showModalUpload={showModalUpload}
        handleShowModalUpload={handleShowModalUpload}
        importHandle={importHandle}
        setFileExcel={setFileExcel}
      />

    </div>
  )
}

export default ControllerPegawai