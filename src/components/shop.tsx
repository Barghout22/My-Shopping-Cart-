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
          <img
            src={item.image.toString()}
            alt="gundam kit"
            className="shopImage"
          />
          <div className="itemName">{item.name}</div>
          <div className="priceTag">EGP {item.price}.00</div>
          <div>
            <label className="inputLabel">
              add to Cart
              <input
                type="number"
                min={0}
                defaultValue={item.quantity}
                onChange={(e) => adjustCart(e, item.id)}
              />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
