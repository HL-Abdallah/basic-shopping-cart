import React from 'react'
import s from './CartItem.module.css'
import formatPrice from '../../utils/formatPrice'

const CartItem = ({product}) => {

  
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <img className={s.image} alt={product.name} src={product.image} />
      </div>
      <div className={s.nameAndQuantity}>
        <h4>{product.name}</h4>
        <div className={s.quantityControl}>
          <span>quantity</span>
          <button>-</button>
          <span>2</span>
          <button>+</button>
        </div>
      </div>
      <div className={s.priceSection}>
        { product.price === 1 && (
          <span className={s.discount}>{formatPrice(0.5)}</span>
        )}
        <span>{formatPrice(product.price * 3)}</span>
      </div>
    </div>
  )
}

export default CartItem