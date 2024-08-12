import { createContext } from "react";

// cette variable contient un composant react dont ns aurons plus tard
// on peut aussi passer une valeur à createContext qui sera utilisé comme 
// une valeur initiale qui peut être fournie à plusieurs composants 
export const CartContext = createContext({
    // stock les articles de mon panier d'achat
    items: [],
    addItemToCart: () => {},
    updateCartItemQuantity: () => {}
})