import React, { useEffect, useState } from 'react'
import CardFoods from '../../components/CardFoods';

function FrozenProducts() {
  const [frozenProducts, setFrozenProducts] = useState([])
  const fetchData = () =>{
    fetch("https://infinity-mart.vercel.app/api/frozenProducts.json").then((res)=>res.json()).then((data)=>{
      setFrozenProducts(data);
    }).catch((e)=> console.log(e.message))
  }
  useEffect(()=>{
    fetchData();
  })
  return (
    <div>
      <CardFoods setItem={frozenProducts}/>
    </div>
  )
}

export default FrozenProducts;
