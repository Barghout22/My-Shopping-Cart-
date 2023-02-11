import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./components/homepage";
import Shop from "./components/shop";
import Checkout from "./components/checkout";
import Gundam1 from "./resources/1.jpg";
import Gundam2 from "./resources/2.jpg";
import Gundam3 from "./resources/3.jpg";
import Gundam4 from "./resources/4.jpg";
import Gundam5 from "./resources/5.jpg";
import Gundam6 from "./resources/6.jpg";
import Gundam7 from "./resources/7.jpg";
import Gundam8 from "./resources/8.jpg";
import Gundam9 from "./resources/9.jpg";

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
      name: "Bandai New Mobile Report Gundam W XXXG-00W0 Wing Gundam Zero EW 1/144 Scale Color-coded plastic model",
      price: 1206,
      image: Gundam1,
      id: uniqid(),
      quantity: 0,
    },
    {
      name: "Bandai PG Gundam Exia Clear Color Body 1/60",
      price: 8978,
      image: Gundam2,
      id: uniqid(),
      quantity: 0,
    },
    {
      name: "Bandai SD Gundam BB Warrior No.290 Destiny Gundam Plastic Model",
      price: 589,
      image: Gundam3,
      id: uniqid(),
      quantity: 0,
    },
    {
      name: "Bandai SD Gundam BB Warrior No.373 LEGEND BB Musha Gundam Plastic Model",
      price: 723,
      image: Gundam4,
      id: uniqid(),
      quantity: 0,
    },
    {
      name: "Bandai GUNDAM FIX FIGURATION METAL COMPOSITE RX-0 Unicorn Gundam Unit 2 Banshee",
      price: 9514,
      image: Gundam5,
      id: uniqid(),
      quantity: 0,
    },
    {
      name: "Bandai UC Mobile Suit Gundam 0083 Gundam GP02A (MLRS specification1/144 scale Color-coded plastic model",
      price: 1018,
      image: Gundam6,
      id: uniqid(),
      quantity: 0,
    },
    {
      name: "Bandai MG Mobile Fighter G Gundam Master Gundam 1/100 Scale Color Coded Plastic Model",
      price: 1393,
      image: Gundam7,
      id: uniqid(),
      quantity: 0,
    },
    {
      name: "Bandai MG Mobile Suit Gundam 08th MS Squadron MS-07B-3 Gouf Custom 1/100 Scale Color-coded Plastic Model",
      price: 1608,
      image: Gundam8,
      id: uniqid(),
      quantity: 0,
    },
    {
      name: "Bandai 1/144 GAT-X105A Yale Strike Gundam (Mobile Suit Gundam SEED)",
      price: 670,
      image: Gundam9,
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
