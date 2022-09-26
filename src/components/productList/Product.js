import s from "./Product.module.css";
import formatPrice from '../../utils/formatPrice'

const Product = ({ product }) => {

  const itemPrice = formatPrice(product.price);

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
        <button className={s.addBtn} onClick={() => alert("product : "+product.name)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
