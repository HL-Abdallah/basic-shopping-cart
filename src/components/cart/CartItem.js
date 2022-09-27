import React from 'react'
import s from './CartItem.module.css'
import formatPrice from '../../utils/formatPrice'

const CartItem = ({ product, handleDecrement, onIncrement, currentCount, prices }) => {

  let breadDiscount = 0;
  if (currentCount && prices && product) breadDiscount = (product.price * (prices.halfPriceBreads * 0.5) > (product.price * currentCount) ?
    (product.price * currentCount) - (product.price * (prices.halfPriceBreads * 0.5)) :
    (product.price * (prices.halfPriceBreads * 0.5))
  );

  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <img className={s.image} alt={product.name} src={product.image} />
      </div>
      <div className={s.nameAndQuantity}>
        <h4>{product.name}</h4>
        <div className={s.quantityControl}>
          <span>quantity</span>
          <button onClick={() => handleDecrement(product.id)}>-</button>
          <span>{currentCount}</span>
          <button onClick={() => onIncrement(product.id)}>+</button>
        </div>
      </div>
      <div className={s.priceSection}>
        {(product.id === 2 && prices.freeMilks > 0) && (
          <span className={s.discount}>{formatPrice(prices.freeMilks * product.price)}</span>
        )}
        {(product.id === 1 && prices.halfPriceBreads > 0) && (
          <span className={s.discount}>{formatPrice(breadDiscount)}</span>
        )}
        <span>{formatPrice(product.price * currentCount)}</span>
      </div>
    </div>
  )
}

export default CartItem