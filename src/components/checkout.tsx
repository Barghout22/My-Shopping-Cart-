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
    <div>
      {itemsInCart?.map(
        (item) =>
          item.quantity > 0 && (
            <div key={item.id} className="shopItem">
              <div>{item.image}</div>
              <div>{item.name}</div>
              <div>
                ${item.price} * {item.quantity} units{" "}
                <button
                  onClick={() => addToCart(Number(item.quantity) - 1, item.id)}
                >
                  -
                </button>
                <button
                  onClick={() => addToCart(Number(item.quantity) + 1, item.id)}
                >
                  +
                </button>
              </div>
              {/* <div>
            <input
              type="number"
              min={0}
              onChange={(e) => adjustCart(e, item.id)}
            />
          </div> */}
            </div>
          )
      )}
      {totalPrice! > 0 && <div>total price : $ {totalPrice}</div>}
      {totalPrice === 0 && (
        <div>
          <div>no Items in Cart</div>
          <div>go to the shop and add some stuff!</div>{" "}
        </div>
      )}
    </div>
  );
};

export default Checkout;
