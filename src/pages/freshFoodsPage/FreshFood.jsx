import React, { useEffect, useState } from "react";
import "./freshFood.css";
import CardFoods from "../../components/CardFoods";
function FreshFood() {
  const [freshFoods, setFreshFoods] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3000/api/freshFoods.json")
      .then((res) => res.json())
      .then((data) => {
        setFreshFoods(data);
      })
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="freshFoodsContainer">
      <main className="freshFoods">
        <CardFoods setItem={freshFoods} />
      </main>
    </div>
  );
}

export default FreshFood;
