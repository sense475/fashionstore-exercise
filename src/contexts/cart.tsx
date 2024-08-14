import react, { createContext, useContext, useState } from "react";

const CartContext = createContext({
    itemsCount: 0,
    addNumberOfItems: (_: number) => {},
  });

type CartProviderProps = {
children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
const [itemsCount, setNumberOfItems] = useState(0);

const addNumberOfItems = (amount: number) => {
    console.log("Adding", amount, "items to the cart");
    setNumberOfItems(itemsCount + amount);
};
return (
    <CartContext.Provider
    value={{
        itemsCount,
        addNumberOfItems,
    }}
    >
    {children}
    </CartContext.Provider>
);
};

export const useCart = () => {
return useContext(CartContext);
};