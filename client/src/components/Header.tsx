import React, { memo, useContext } from "react";
import logo from '../img/logo.png'
import down from '../img/download.png'
import ModalDirectory from "./ModalDirectory";
import { DataContext } from "../context/dataContext";

type PropsType = {
    setModalDir: (m: boolean) => void
    setModal: (m: boolean) => void
    modalDir: boolean
    modal: boolean
    children: React.ReactNode
}

export default memo (function Header({modalDir, setModal, setModalDir, modal, children}: PropsType) {

    const { getData } = useContext(DataContext)

    return  <main className="App-header">
    <div className="panel">
      <button onClick={() => setModalDir(!modal)}>Справочники</button>
      <button onClick={() => setModal(!modal)}>Новая запись</button>
      <button className='download'>
        <a href="http://localhost:5000/download" target="_blank" rel="noreferrer">
          <h3>CSV</h3>
          <img src={down} alt="download" />
        </a>
      </button>
    </div>
    <img src={logo} className="logo" alt="logo" />

    <h3>Профориентация</h3>
    <button onClick={getData}>Сбросить фильтры</button>
    {modalDir && <ModalDirectory setModalDir={setModalDir} modalDir={modalDir} />}


    {children}
  </main>

})