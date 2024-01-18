import React from 'react'
import './home.css'
import RowFruits from '../../components/RowFruits'
import MeatAdvertising from '../../components/MeatAdvertising'
function Home() {
  return (
    <main>
        <div className='home-section'>
          <h1>InfinityMart</h1>
          <p className='big-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio molestiae sunt possimus?</p>
          <p className='small-text'>eum eius facilis, mollitia laudantium corrupti voluptatibus.</p>
          <button className='buy-btn'>Compre já</button>
        </div>
        <div className="section-row">
            <h2>As melhores frutas do mercado</h2>
              <RowFruits />
        </div>
        <div className="hr-container">
            <hr />
        </div>
        <MeatAdvertising />
        
    </main>
  )
}

export default Home
