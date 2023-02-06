import React from "react";
import { useState, useEffect } from "react";
interface itemCart {
  name: string;
  price: number;
  image: string;
  id: string;
  quantity: number;
}

const Checkout = ({ itemsInCart }: { itemsInCart: itemCart[] | undefined }) => {
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
                ${item.price} * {item.quantity} units
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
    </div>
  );
};

export default Checkout;
