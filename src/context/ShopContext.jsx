import { createContext, useState } from 'react'

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    
    const [Products] = useState([
        { id: 1, productName: "iPhone", price: 999, productImage: "" },
        { id: 2, productName: "Samsung Galaxy", price: 899, productImage: "" },
        { id: 3, productName: "Google Pixel", price: 799, productImage: "" },
        { id: 4, productName: "OnePlus", price: 699, productImage: "" },
    ]);

    const [car, setCar] = useState([]);

    const addToCar = (product) => {
        setCar((prev) => [...prev, product]);
}
    const removeFromCar= (productId) => {
        setCar((prev) => prev.filter((item) => item.id !== productId));
    };

    const clearCar = () => {
        setCar([]);
    }

    return (
        <ShopContext.Provider value={{ Products, car, addToCar, removeFromCar, clearCar }}>
            {children}
        </ShopContext.Provider>
    )
}