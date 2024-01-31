import React, { useEffect, useState } from 'react'
import CardFoods from '../../components/CardFoods'

function Drinks() {
  const [drinks, setDrinks] = useState([])
 const fetchData = ()=>{
  fetch('http://localhost:3000/api/drinks.json').then((res)=>res.json()).then((data)=>{
    setDrinks(data)
  }).catch((e)=> console.log(e.message))
 }
 useEffect(()=>{
  fetchData()
 })
  return (
    <div>
      <CardFoods setItem={drinks}/>
    </div>
  )
}

export default Drinks;
