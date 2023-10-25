import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobal, } from './context'
// import { useGlobal } from './context'
const Modal = () => {
  const{isModalOpen,closeModal}=useGlobal();

  console.log("isModalOpen", isModalOpen)
  
  return <>
  <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}
  // {`${
    // isModalOpen? 'modal-overlay show-modal':'modal-overlay'}`}
  >
    <div className='modal-container'>
      <h3>Modal Content</h3>
      <button className='close-modal-btn' onClick={closeModal}><FaTimes/></button>
    </div>
  </div>
  </>
}

export default Modal
