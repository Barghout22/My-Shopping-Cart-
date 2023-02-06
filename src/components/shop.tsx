import React from "react";

interface itemCart {
  name: string;
  price: number;
  image: string;
  id: string;
  quantity: number;
}

const Shop = ({
  addToCart,
  shopItems,
}: {
  addToCart: Function;
  shopItems: itemCart[];
}) => {
  const adjustCart = (e: any, id: string) => {
    e.target.value < 0 ? addToCart(0, id) : addToCart(e.target.value, id);
  };

  return (
    <div className="shopBody">
      {shopItems.map((item: itemCart) => (
        <div key={item.id} className="shopItem">
          <div>{item.image}</div>
          <div>{item.name}</div>
          <div>${item.price}</div>
          <div>
            <input
              type="number"
              min={0}
              onChange={(e) => adjustCart(e, item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
