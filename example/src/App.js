import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal-package-npm'
import 'react-modal-package-npm/dist/index.css'
// import 'C:\dev\package-modal-npm\react-modal-package-npm\dist\index.css'

const App = () => {

  const [open, setOpen] = useState(true)

  const openModal = () => {
      setOpen(true)
  }

  return(
      <>
          {/* isOpen allows to toggle value of open */}
          <Modal content='Employee created !' handleChange={setOpen} value={open}/>
          <button onClick={openModal}>button</button>
          {/* <button onClick={openModal}>button</button> */}
      </> 

  )
}

export default App
