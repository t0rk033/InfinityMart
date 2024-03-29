import React, { useEffect, useState } from 'react'
import CardFoods from '../../components/CardFoods';

function HomeAndOthers() {
  const [homeAndOthers, setHomeAndOthers] = useState([]);

  const fetchData = () =>{
    fetch('https://infinity-mart.vercel.app/api/homeAndOthers.json').then((res)=>res.json()).then((data)=>{
    setHomeAndOthers(data)
    }).catch ((e)=> console.log(e.message))
  }
  useEffect(()=>{
    fetchData()
  })
  return (
    <div>
      <CardFoods setItem={homeAndOthers}/>
    </div>
  )
}

export default HomeAndOthers;
