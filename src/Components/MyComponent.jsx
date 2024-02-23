import React, { useState } from 'react'
import { createPortal } from "react-dom";
import MyModal from './MyModal';

const MyComponent = () => {

    const [showModal,setShowModal]=useState(false);

    const closeModal=()=>{
        setShowModal(false);
    }

  return (
    <div className='my-component'>
        <h2>Main Component</h2>
        <button onClick={()=>setShowModal(true)}>Show Modal</button>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reiciendis doloremque quae maxime sapiente aliquam itaque magnam reprehenderit quo architecto repellendus atque, rerum dignissimos dolorum optio eligendi blanditiis. Consequatur, doloribus placeat pariatur aperiam quos sunt amet, cupiditate perspiciatis illo odio et tempore est officia, sit ullam minus beatae voluptatibus deleniti odit quis accusantium laboriosam. Exercitationem temporibus alias in debitis vitae recusandae totam mollitia ducimus, voluptates, corporis magnam! Voluptatum sunt est laudantium totam beatae laboriosam fugiat quae mollitia accusantium accusamus optio, numquam quasi culpa veniam incidunt autem amet quis! Consectetur minus accusantium corrupti aliquid magnam! Deserunt architecto optio quod exercitationem provident.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reiciendis doloremque quae maxime sapiente aliquam itaque magnam reprehenderit quo architecto repellendus atque, rerum dignissimos dolorum optio eligendi blanditiis. Consequatur, doloribus placeat pariatur aperiam quos sunt amet, cupiditate perspiciatis illo odio et tempore est officia, sit ullam minus beatae voluptatibus deleniti odit quis accusantium laboriosam. Exercitationem temporibus alias in debitis vitae recusandae totam mollitia ducimus, voluptates, corporis magnam! Voluptatum sunt est laudantium totam beatae laboriosam fugiat quae mollitia accusantium accusamus optio, numquam quasi culpa veniam incidunt autem amet quis! Consectetur minus accusantium corrupti aliquid magnam! Deserunt architecto optio quod exercitationem provident.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reiciendis doloremque quae maxime sapiente aliquam itaque magnam reprehenderit quo architecto repellendus atque, rerum dignissimos dolorum optio eligendi blanditiis. Consequatur, doloribus placeat pariatur aperiam quos sunt amet, cupiditate perspiciatis illo odio et tempore est officia, sit ullam minus beatae voluptatibus deleniti odit quis accusantium laboriosam. Exercitationem temporibus alias in debitis vitae recusandae totam mollitia ducimus, voluptates, corporis magnam! Voluptatum sunt est laudantium totam beatae laboriosam fugiat quae mollitia accusantium accusamus optio, numquam quasi culpa veniam incidunt autem amet quis! Consectetur minus accusantium corrupti aliquid magnam! Deserunt architecto optio quod exercitationem provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reiciendis doloremque quae maxime sapiente aliquam itaque magnam reprehenderit quo architecto repellendus atque, rerum dignissimos dolorum optio eligendi blanditiis. Consequatur, doloribus placeat pariatur aperiam quos sunt amet, cupiditate perspiciatis illo odio et tempore est officia, sit ullam minus beatae voluptatibus deleniti odit quis accusantium laboriosam. Exercitationem temporibus alias in debitis vitae recusandae totam mollitia ducimus, voluptates, corporis magnam! Voluptatum sunt est laudantium totam beatae laboriosam fugiat quae mollitia accusantium accusamus optio, numquam quasi culpa veniam incidunt autem amet quis! Consectetur minus accusantium corrupti aliquid magnam! Deserunt architecto optio quod exercitationem provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reiciendis doloremque quae maxime sapiente aliquam itaque magnam reprehenderit quo architecto repellendus atque, rerum dignissimos dolorum optio eligendi blanditiis. Consequatur, doloribus placeat pariatur aperiam quos sunt amet, cupiditate perspiciatis illo odio et tempore est officia, sit ullam minus beatae voluptatibus deleniti odit quis accusantium laboriosam. Exercitationem temporibus alias in debitis vitae recusandae totam mollitia ducimus, voluptates, corporis magnam! Voluptatum sunt est laudantium totam beatae laboriosam fugiat quae mollitia accusantium accusamus optio, numquam quasi culpa veniam incidunt autem amet quis! Consectetur minus accusantium corrupti aliquid magnam! Deserunt architecto optio quod exercitationem provident.</p>

        {showModal && createPortal(
               <MyModal close={closeModal}/>,
               document.getElementById('myPortal')
        )}

    </div>
  )
}

export default MyComponent