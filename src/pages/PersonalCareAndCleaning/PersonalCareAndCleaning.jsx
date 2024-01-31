import React, { useEffect, useState } from 'react'
import CardFoods from '../../components/CardFoods';

function PersonalCareAndCleaning() {
  const [personalCare, setPersonalCare] = useState([])

  const fetchData = ()=>{
    fetch('http://localhost:3000/api/personalCareAndCleaning.json').then((res)=>res.json()).then((data)=>{
      setPersonalCare(data);
    }).catch((e)=> console.log(e.message))
  }
useEffect(()=>{
  fetchData()
}, [])
  return (
    <div>
      <CardFoods setItem={personalCare} />
    </div>
  )
}

export default PersonalCareAndCleaning
