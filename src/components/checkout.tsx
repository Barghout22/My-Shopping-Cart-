import React from "react";
import { useState, useEffect } from "react";
interface itemCart {
  name: string;
  price: number;
  image: string;
  id: string;
  quantity: number;
}

const Checkout = ({
  itemsInCart,
  addToCart,
}: {
  itemsInCart: itemCart[] | undefined;
  addToCart: Function;
}) => {
  const [totalPrice, setTotalPrice] = useState<number | undefined>(0);
  useEffect(() => {
    let prices: number | undefined = 0;
    prices = itemsInCart?.reduce(
      (accumaltor, item) => accumaltor + item.price * item.quantity,
      0
    );
    setTotalPrice(prices);
  }, [itemsInCart]);

  return (
    <div className="cartBody">
      {itemsInCart?.map(
        (item) =>
          item.quantity > 0 && (
            <div key={item.id} className="cartItem">
              <img
                src={item.image.toString()}
                alt="gundam kit "
                className="cartImgs"
              ></img>
              <p className="itemNameCart">{item.name}</p>
              <p className="priceTag">x {item.quantity} units </p>
              <div className="btnContnr">
                <button
                  onClick={() => addToCart(Number(item.quantity) + 1, item.id)}
                  className="cartValueAdjustBtnPlus"
                >
                  +
                </button>
                <button
                  onClick={() => addToCart(Number(item.quantity) - 1, item.id)}
                  className="cartValueAdjustBtnMinus"
                >
                  -
                </button>
              </div>
            </div>
          )
      )}
      {totalPrice! > 0 && (
        <div className="totalContainer">
          <p className="totalPrice">Total: EGP {totalPrice}.00</p>
          <button className="paymentBtn">Proceed to pay</button>
        </div>
      )}
      {totalPrice === 0 && (
        <div className="emptyCart">
          <p>no Items in Cart</p>
          <p>go to the shop and add some stuff! </p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
