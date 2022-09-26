import './global.css';
import styles from './App.module.css';
import products from "./dummy-data/products";
import Product from './components/productList/Product';
import CartItem from './components/cart/CartItem';
import CartSummary from './components/cart/CartSummary';

function App() {

  return (
    <div className={styles.App}>
      <div className={styles.products}>
      <div>
        <h3 className={styles.title}>Products</h3>
        <div className={styles.productWrapper}>
        {
          products.map((item,index)=> <Product key={index} product={item}/>)
        }
        </div>
      </div>
      </div>
      <div className={styles.cart}>
        <h3 className={styles.cartTitle}>Cart 🛒</h3>
        {
          products.map((item,index)=> <CartItem key={index} product={item}/>)
        }
        <CartSummary/>
      </div>
    </div>
  );
}

export default App;
