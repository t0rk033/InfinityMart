import React, { useEffect, useState } from "react";
import "./cardFoods.css";
import Cart from "./Cart";

function CardFoods({ setItem }) {
  //barra de pesquisa
  const [search, setSearch] = useState("");
  const searchLowerCase = search.toLowerCase();
  const searchFruits = setItem.filter((SearchFood) =>
    SearchFood.name.toLowerCase().includes(searchLowerCase)
  );
  //paginação
  const [itemsPerPage, setItemsPerPage] = useState([10]);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(setItem.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = searchFruits.slice(startIndex, endIndex);
  //função de clicar no carrinho a abri-lo
  const [cart, setCart] = useState("");
  const changeClass = () => {
    setCart((changeClass) => (changeClass === "" ? "active" : ""));
  };
  //adicionar item ao carrinho
  const [shoppingCart, setShoppingCart] = useState([]);

  const addCart = (food) => {
    const itemInCart = shoppingCart.find((item) => item.id === food.id);
    if (itemInCart) {
      const newCart = shoppingCart.map((item) =>
        item.id === food.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
      setShoppingCart(newCart);
    } else {
      setShoppingCart([...shoppingCart, { ...food, quantidade: 1 }]);
    }
    calculateTotal();
  };
  //remover item do carrinho
  const removeCart = (foodId) => {
    const newCart = shoppingCart.filter((item) => item.id !== foodId);
    setShoppingCart(newCart);
    calculateTotal();
  };
  //calcular itens no carrinho
  const calculateTotal = () => {
    return shoppingCart.reduce(
      (acc, item) => acc + item.price * item.quantidade,
      0
    );
  };
  //______________________________________________________

  const userId = "thiago@gmail.com";

  const addToCart = (food) => {
    if (food) {
      const updatedCart = [...shoppingCart, food];
      updateLocalStorage(updatedCart);
      setShoppingCart(updatedCart);
      addCart(food)
    }
  };

  const removeFromLocalStorage = (updatedCart) => {
    updateLocalStorage(updatedCart);
  };

  const removeToCart = (foodId) => {
    const newCart = shoppingCart.filter((item) => item.id !== foodId);
    removeFromLocalStorage(newCart);
    setShoppingCart(newCart);
    calculateTotal();
  };

  const updateLocalStorage = (updatedCart) => {
    try {
      localStorage.setItem(userId, JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error updating localStorage:", error);
    }
  };

  useEffect(() => {
    const fetchCartData = () => {
      try {
        const storedCart = localStorage.getItem(userId);
        if (storedCart) {
          setShoppingCart(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error('Error fetching localStorage:', error.message);
      }
    };
  
    fetchCartData();
  }, [userId, setShoppingCart]);

  //_______________________________________________

  return (
    <div className="cardContainer">
      <Cart
        cart={cart}
        shoppingCart={shoppingCart}
        removeCart={removeCart}
        calculateTotal={calculateTotal}
        setShoppingCart={setShoppingCart}
        addToCart={addToCart}
        removeToCart={removeToCart}
      />

      <div className="cart">
        <button className="cartBtn" onClick={changeClass}>
          <i className="bx bx-cart-alt"></i>
        </button>
      </div>
      <div className="searchContainer">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Digite o produto desejado"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="cardFoods">
        {currentItems.map((food) => (
          <div key={food.id} className="foodCardContainer">
            <img src={food.img} alt={food.name} />
            <div className="info-food">
              <h3 className="foodName">{food.name}</h3>
              <span className="price">{`$${food.price.toFixed(2)}`}</span>
              <button
                className="foodsBuyBtn"
                onClick={() => {
                  addToCart(food);
                }}
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from(Array(pages), (setItem, index) => {
          return (
            <button
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CardFoods;
