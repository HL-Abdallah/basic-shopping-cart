import s from "./Product.module.css";
import formatPrice from '../../utils/formatPrice'
import { useState, useEffect } from 'react'

const Product = ({ product, items, onAdd }) => {

  const itemPrice = formatPrice(product.price);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  useEffect(() => {
    const exist = items.filter(item => item.productID === product.id);
    if (exist.length !== 0) {
      setAlreadyAdded(true)
    } else {
      setAlreadyAdded(false)
    }
  }, [items, product.id])

  const addToCart = () => {
    if (!alreadyAdded) {
      onAdd(product.id);
    }
  }

  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <img className={s.image} alt={product.name} src={product.image} />
      </div>
      <div className={s.rightSide}>
        <div className={s.data}>
          <div className={s.left}>
            <h4>{product.name}</h4>
            <p className={s.description}>{product.description}</p>
          </div>
          <div className={s.right}>
            <span>⭐⭐⭐⭐⭐</span>
            <span className={s.price}>{itemPrice}</span>
          </div>
        </div>
        <button
          disabled={alreadyAdded}
          className={alreadyAdded ? s.disabledAddBtn : s.addBtn}
          onClick={() => addToCart()}
        >
          {!alreadyAdded ? "Add to cart" : "In Cart ✔"}
        </button>
      </div>
    </div>
  );
};

export default Product;
