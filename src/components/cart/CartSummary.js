import React from 'react'
import s from './CartSummary.module.css'
import formatPrice from '../../utils/formatPrice'

const CartSummary = ({ prices }) => {
  return (
    <div className={s.summaryContainer}>
      <div className={s.item}>
        <h4>Subtotal</h4>
        <span>{formatPrice(prices.subtotal)}</span>
      </div>
      <div className={s.item}>
        <h4>Discount</h4>
        <span>{formatPrice(prices.totalDiscount)}</span>
      </div>
      <div className={s.item}>
        <h4>Total</h4>
        <span>{formatPrice(prices.subtotal + prices.totalDiscount)}</span>
      </div>
    </div>
  )
}

export default CartSummary