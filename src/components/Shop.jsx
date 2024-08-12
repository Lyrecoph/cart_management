import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';

// Composant shop utilisé la fonction de maj du panier qui est transmit
// au composant produit qui sont édités dans une liste
export default function Shop({ onAddItemToCart }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
}
