import React from 'react'
import s from './CartItem.module.css'
import formatPrice from '../../utils/formatPrice'

const CartItem = ({ product, handleDecrement, onIncrement, currentCount, prices }) => {

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
        {(product.id === 1 && prices.priceOfDiscountedBread > 0) && (
          <span className={s.discount}>{formatPrice(prices.priceOfDiscountedBread)}</span>
        )}
        <span>{formatPrice(product.price * currentCount)}</span>
      </div>
    </div>
  )
}

export default CartItem