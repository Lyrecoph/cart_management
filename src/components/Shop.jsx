

// Composant shop utilisé la fonction de maj du panier qui est transmit
// au composant produit qui sont édités dans une liste
export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {children}
      </ul>
    </section>
  );
}
