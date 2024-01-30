import React, { useEffect, useState } from 'react'
import './DryAndCannedFoods.css'
import CardFoods from '../../components/CardFoods';
function DryAndCannedFoods() {
  const [dryAndCannedFoods, setDryAndCannedFoods] = useState([])
  const fetchData = () => {
    fetch('http://localhost:3000/api/DryAndCannedFoods.json').then((res)=>res.json()).then((data)=>{
  setDryAndCannedFoods(data)
  }).catch((e)=> console.log(e.message));
  };
  useEffect(()=>{
    fetchData();
  }, []);

  return (
    <div className='DryandCannedFoodContainer'>
     <main>
       <CardFoods setItem={dryAndCannedFoods} />
     </main>
    </div>
  )
}

export default DryAndCannedFoods;
