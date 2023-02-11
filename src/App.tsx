import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./components/homepage";
import Shop from "./components/shop";
import Checkout from "./components/checkout";
import { useState } from "react";
const uniqid = require("uniqid");

function App() {
  interface itemCart {
    name: string;
    price: number;
    image: string;
    id: string;
    quantity: number;
  }
  const [cartContent, setCartContent] = useState<number>(0);
  const [allShopItems, setAllShopItems] = useState<itemCart[]>([
    {
      name: "item1",
      price: 10,
      image: "imageItem1",
      id: uniqid(),
      quantity: 0,
    },
    {
      name: "item2",
      price: 20,
      image: "imageItem1",
      id: uniqid(),
      quantity: 0,
    },
    {
      name: "item3",
      price: 30,
      image: "imageItem1",
      id: uniqid(),
      quantity: 0,
    },
  ]);
  const [itemsInCart, setItemsInCart] = useState<itemCart[] | undefined>([]);

  const adjustCartContents = (value: number, id: string) => {
    //const totalCartItems = itemsInCart;
    const totalCartItems = allShopItems;
    let itemsAdjusted = totalCartItems.find((item) => item.id === id);
    totalCartItems[totalCartItems.indexOf(itemsAdjusted!)].quantity = value;
    let addedItems = totalCartItems.filter((item) => item.quantity > 0);

    const numberOfItems =
      totalCartItems?.reduce(
        (accumulator, currentValue) =>
          accumulator + Number(currentValue.quantity),
        0
      ) || 0;
    setAllShopItems(totalCartItems);
    setItemsInCart(addedItems);
    setCartContent(numberOfItems);
    //console.log(totalCartItems);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header cartContent={cartContent} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/shop"
            element={
              <Shop addToCart={adjustCartContents} shopItems={allShopItems} />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                itemsInCart={itemsInCart}
                addToCart={adjustCartContents}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
