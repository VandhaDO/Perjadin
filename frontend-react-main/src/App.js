import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import Login from "./page/auth/login";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import NotFound from "./page/Notfound";
import { Spinner } from "react-bootstrap";
// import { AOS } from 'aos';

// mongggo db
import DefaultRoute from "./DefaultRoute";
import Dashboard from "./page/admin/dashboard";
import Perjadin from "./page/admin/perjadin/perjadin";
import Spt from "./page/admin/spt/spt";
import Sppd from "./page/admin/sppd/sppd";
import Laporan from "./page/admin/laporan/laporan";
import Kwitansi from "./page/admin/kwitansi/kwitansi";
import CreatePerjadin from "./page/admin/perjadin/create";
import Pegawai from "./page/admin/pegawai/pegawai";
import CreatePegawai from "./page/admin/pegawai/create";
import DetailPegawai from "./page/admin/pegawai/detail";
import DetailPerjadin from "./page/admin/perjadin/detail";
import EditPegawai from "./page/admin/pegawai/edit";
import EditPerjadin from "./page/admin/perjadin/edit";
import CreateSpt from "./page/admin/spt/create";
import DetailSpt from "./page/admin/spt/detail";
import EditSpt from "./page/admin/spt/edit";
import CreateSppd from "./page/admin/sppd/create";
import DetailSppd from "./page/admin/sppd/detail";
import EditSppd from "./page/admin/sppd/edit";
import CreateLaporan from "./page/admin/laporan/create";
import DetailLaporan from "./page/admin/laporan/detail";
import EditLaporan from "./page/admin/laporan/edit";
import CreateKwitansi from "./page/admin/kwitansi/create";
import DetailKwitansi from "./page/admin/kwitansi/detail";
import EditKwitansi from "./page/admin/kwitansi/edit";
import ControllerPegawai from "./controller/pegawai";
import ControllerPerjadin from "./controller/perjadin";
import ControllerCreatePegawai from "./controller/pegawai/create";
import ControllerDetailPegawai from "./controller/pegawai/detail";
import ControllerEditPegawai from "./controller/pegawai/edit";
import ControllerDetailPerjadin from "./controller/perjadin/detail";
import ControllerCreatePerjadin from "./controller/perjadin/create";
import ControllerEditPerjadin from "./controller/perjadin/edit";
import ControllerImportPegawai from "./controller/pegawai/import";
import ControllerCreateSppd from "./controller/sppd/create";
import ControllerEditSppd from "./controller/sppd/edit";
// import Dbcon from './utilities/db';
// import Porto from './model/porto';

function App() {
  // Dbcon();

  const [ready, setReady] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 200);
  });
  return (
    <React.Fragment>
      {!ready ? (
        <center>
          <Spinner style={{ marginTop: "20%" }} animation="border" />{" "}
        </center>
      ) : (
        <Router>
          <Switch>
            <Route path="/" exact element={<DefaultRoute />}>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/perjadin" exact element={<ControllerPerjadin />} />
              <Route path="/perjadin/create" exact element={<ControllerCreatePerjadin />} />
              <Route path="/perjadin/:idPerjadin" exact element={<ControllerDetailPerjadin />} />
              <Route path="/perjadin/edit/:idPerjadin" exact element={<ControllerEditPerjadin />} />
              <Route path="/spt" exact element={<Spt />} />
              <Route path="/spt/create/:idPerjadin" exact element={<CreateSpt />} />
              <Route path="/spt/:idSpt" exact element={<DetailSpt />} />
              <Route path="/spt/edit/:idSpt" exact element={<EditSpt />} />
              <Route path="/sppd" exact element={<Sppd />} />
              <Route path="/sppd/create/:idPerjadin" exact element={<ControllerCreateSppd />} />
              <Route path="/sppd/:idSppd" exact element={<DetailSppd />} />
              <Route path="/sppd/edit/:idSppd" exact element={<ControllerEditSppd />} />
              <Route path="/laporan" exact element={<Laporan />} />
              <Route path="/laporan/create/:idPerjadin" exact element={<CreateLaporan />} />
              <Route path="/laporan/:idLaporan" exact element={<DetailLaporan />} />
              <Route path="/laporan/edit/:idLaporan" exact element={<EditLaporan />} />
              <Route path="/kwitansi" exact element={<Kwitansi />} />
              <Route path="/laporan/create/:idPerjadin" exact element={<CreateKwitansi />} />
              <Route path="/laporan/:idPegawai" exact element={<DetailKwitansi />} />
              <Route path="/laporan/edit/:idPegawai" exact element={<EditKwitansi />} />
              <Route path="/pegawai" exact element={<ControllerPegawai />} />
              <Route path="/pegawai/create" exact element={<ControllerCreatePegawai />} />
              <Route path="/pegawai/import" exact element={<ControllerImportPegawai />} />
              <Route path="/pegawai/:idPegawai" exact element={<ControllerDetailPegawai />} />
              <Route path="/pegawai/edit/:idPegawai" exact element={<ControllerEditPegawai />} />
            </Route>

            <Route path="/login" exact element={<Login />} />
            <Route path="*" exact={true} element={<NotFound />} />
          </Switch>
        </Router>
      )}
    </React.Fragment>
  );
  setReady(true);
}

export default App;
