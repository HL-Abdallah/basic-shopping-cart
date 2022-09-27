import "./global.css";
import styles from "./App.module.css";
import products, { getItemByID } from "./dummy-data/products";
import Product from "./components/productList/Product";
import CartItem from "./components/cart/CartItem";
import CartSummary from "./components/cart/CartSummary";
import { useState, useEffect } from "react";

function App() {

  const [items, setItems] = useState([]);
  const [prices, setPrices] = useState({
    subtotal: 0,
    totalDiscount: 0,
    freeMilks: 0,
    halfPriceBreads: 0,
  });

  useEffect(() => {
    let totalPrice = 0;
    // counting subtotal
    items.forEach(obj => {
      totalPrice += Number(getItemByID(obj.productID).price * obj.count);
    });
    // applying discounts:
    // counting milk jugs
    const breadObj = items.filter(item => item.productID === 1)[0];
    const milkCountObj = items.filter(item => item.productID === 2)[0];
    let milkCount = 0;
    if (milkCountObj) { milkCount = milkCountObj.count ?? 0; }

    // workaround to remove fractional part of number without rounding it
    const freeMilks = Number((milkCount / 4).toFixed(1).toString().split(".")[0]);
    // counting butter
    const butterCountObj = items.filter(item => item.productID === 3)[0];
    let butterCount = 0;
    if (butterCountObj) { butterCount = butterCountObj.count ?? 0 }
    const halfPriceBreads = Number((butterCount / 2).toFixed(1).toString().split(".")[0]);
    let totalDiscount = 0;
    let breadTotalDiscount = 0;
    if (breadObj) {
      if (breadObj.price * (halfPriceBreads * 0.5) > (breadObj.price * breadObj.count)) {
        breadTotalDiscount = (breadObj.price * breadObj.count) - (breadObj.price * (halfPriceBreads * 0.5))
      } else {
        breadTotalDiscount = (breadObj.price * (halfPriceBreads * 0.5))
      }
    };
    if (breadTotalDiscount) totalDiscount += breadTotalDiscount;
    if (milkCountObj && freeMilks) totalDiscount += milkCountObj.price * freeMilks;
    setPrices(p => {
      return {
        ...p,
        subtotal: totalPrice ?? 0,
        freeMilks: freeMilks ?? 0,
        halfPriceBreads: halfPriceBreads ?? 0,
        totalDiscount: totalDiscount ?? 0
      }
    });
  }, [items])

  const handleAdd = (id) => {
    const obj = {
      productID: id,
      count: 1,
    };
    setItems([obj, ...items]);
  };

  const handleIncrement = (id) => {
    setItems(
      items.map((item) => {
        if (item.productID === id) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      })
    );
  };
  const handleDecrement = (id) => {
    if (items.filter((item) => item.productID === id)[0].count === 1) {
      setItems(items.filter((item) => item.productID !== id));
    } else {
      setItems(
        items.map((item) => {
          if (item.productID === id) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        })
      )
    }
  };

  return (
    <div className={styles.App}>
      <div className={styles.products}>
        <div>
          <h3 className={styles.title}>Products</h3>
          <div className={styles.productWrapper}>
            {products.map((item, index) => (
              <Product
                key={index}
                onAdd={handleAdd}
                product={item}
                items={items}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cart}>
        <h3 className={styles.cartTitle}>Cart 🛒</h3>
        {items.map((item, index) => (
          <CartItem
            key={index}
            currentCount={item.count}
            product={getItemByID(item.productID)}
            handleDecrement={handleDecrement}
            onIncrement={handleIncrement}
            prices={prices}
          />
        ))}
        <CartSummary
          prices={prices}
        />
      </div>
    </div>
  );
}

export default App;
