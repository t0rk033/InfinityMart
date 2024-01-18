import React from 'react'
import './meatAdvertising.css'
import meatImg from '../images/meatsImages/meat.avif'
import fishImg from '../images/meatsImages/fish.avif'
function MeatAdvertising() {
  return (
    <div>
       
      <div className="ads-container">
        <div className="meat-ads">
            <h2>As Melhores carnes</h2>
            <div className="meats">
                <img src={meatImg} alt="Carne" className='meat-img'/>
                <img src={fishImg} alt="" />
            </div>
        </div>
        <div className="text-ads">
        <h2>Saiba de onde vem nossas carnes</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi maxime soluta voluptates sint reprehenderit non, eaque at sapiente earum rerum porro amet? Quas expedita, laboriosam quisquam eligendi consequuntur tempore!</p>
        </div>
      </div>
    </div>
  )
}

export default MeatAdvertising
