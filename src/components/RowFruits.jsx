import React, { useEffect, useState } from "react";
import "./rowFruits.css"
function RowFruits() {
  const [rowFruits, setRowFruits] = useState([]);

  const fetchData = () => {
    fetch("https://infinity-mart.vercel.app/api/fruitsData.json")
      .then((res) => res.json())
      .then((data) => {
        const sixItems = data.slice(0, 6);
        setRowFruits(sixItems);
      })
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <main className="row-fruitProducts">
        <div className="rowFruits">
          {rowFruits.map((fruit) => (
            <div key={fruit.id} className="fruit-card">
              <img src={fruit.img} alt={fruit.name} className="fruit-img" />
              <p className="info-fruits">{fruit.name}</p>
              <span className="price">{`$${fruit.price.toFixed(2)}`}</span>
              <button className="buyFruit-btn">Comprar</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default RowFruits;
