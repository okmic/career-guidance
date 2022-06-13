import React, { memo, useContext } from "react";

import down from '../img/download.png'
import ModalDirectory from "./ModalDirectory";
import { urlApi } from "../config";

type PropsType = {
    setModalDir: (m: boolean) => void
    setModal: (m: boolean) => void
    modalDir: boolean
    modal: boolean
    children: React.ReactNode
    downloadUrl: "/download" | "/download-statement"
    title: "Профориентация" | "Заявления"
}

export default memo (function Header({modalDir, setModal, setModalDir, modal, downloadUrl = '/download', title = "Профориентация", children}: PropsType) {

    return  <main className="App-header">

<h1>{title}</h1>

    <div className="panel">
      <button onClick={() => setModalDir(!modal)}>Справочники</button>
      <button onClick={() => setModal(!modal)}>Новая запись</button>

      <button className='download'>
        <a href={urlApi + downloadUrl} target="_blank" rel="noreferrer">
          <h3>CSV</h3>
          <img src={down} alt="download" />
        </a>
      </button>

    </div>



    {modalDir && <ModalDirectory setModalDir={setModalDir} modalDir={modalDir} />}

    {children}
  </main>

})