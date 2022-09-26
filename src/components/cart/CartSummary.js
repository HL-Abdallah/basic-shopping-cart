import React from 'react'
import s from './CartSummary.module.css'

const CartSummary = () => {
  return (
    <div className={s.summaryContainer}>
        <div className={s.item}>
            <h4>Subtotal</h4>
            <span>£6.05</span>
        </div>
        <div className={s.item}>
            <h4>Discount</h4>
            <span>£0.5</span>
        </div>
        <div className={s.item}>
            <h4>Total</h4>
            <span>£6.00</span>
        </div>
    </div>
  )
}

export default CartSummary