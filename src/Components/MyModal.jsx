import React, { useEffect } from 'react'
import './MyModal.css'

const MyModal = ({close}) => {

    useEffect(()=>{
        document.body.style.backdropFilter=blur("50px");
        document.body.style.overflowY="hidden";
        return ()=>{
        document.body.style.backdropFilter=blur("0px");
        document.body.style.overflowY="auto";
        }
    },[])

  return (
        <>
            <div onClick={close} className='my-modal-backdrop'></div>
            <div className='my-modal'>
            <p onClick={close} id='close-button'>✖️</p>
            <h2>My Modal</h2>
            <p>Hello This is a small Modal message!</p>  
            <button onClick={close}>OKAY</button>  

        </div>
        </>
  )
}

export default MyModal