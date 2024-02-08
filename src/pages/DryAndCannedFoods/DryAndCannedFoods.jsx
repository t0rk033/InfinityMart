import React, { useEffect, useState } from 'react'
import './DryAndCannedFoods.css'
import CardFoods from '../../components/CardFoods';
function DryAndCannedFoods() {
  const [dryAndCannedFoods, setDryAndCannedFoods] = useState([])
  const fetchData = () => {
    fetch('https://infinity-mart.vercel.app/api/drinks.json').then((res)=>res.json()).then((data)=>{
      const DryAndCannedFoods = data.DryAndCannedFoods;
  setDryAndCannedFoods(DryAndCannedFoods)
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
