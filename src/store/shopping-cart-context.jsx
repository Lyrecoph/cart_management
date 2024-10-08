import { createContext, useState } from "react";
import { DUMMY_PRODUCTS } from '../dummy-products.js';

// cette variable contient un composant react dont ns aurons plus tard
// on peut aussi passer une valeur à createContext qui sera utilisé comme 
// une valeur initiale qui peut être fournie à plusieurs composants 
export const CartContext = createContext({
    // stock les articles de mon panier d'achat
    items: [],
    addItemToCart: () => {},
    updateCartItemQuantity: () => {}
})

// Gestion de l'ensemble de la logique de l'état
export default function CartContextProvider({children}){
     // gère l'état du panier d'achat
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  // MAJ de l'état pour MAJ la quantité d'articles dans le panier 
  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  // permet de stocker les produits et la fonction qui permet 
  // d'ajouter un produit dans le panier qui peut être ensuite
  // utiliser par tout les autres composants
  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity
  }

  return (
    <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>
  )

}