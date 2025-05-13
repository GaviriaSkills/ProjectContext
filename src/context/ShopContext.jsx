import { createContext, useState } from 'react'

export const ShopContext = createContext();

import Iphone from "../assets/imagenes/Iphone.jpg";
import SamsungGalaxy from "../assets/imagenes/SamsungGalaxy.jpg";
import GooglePixel from "../assets/imagenes/GooglePixel.jpg";
import OnePlus from "../assets/imagenes/OnePlus.jpg";

export const ShopProvider = ({ children }) => {
    
    const [Products] = useState([
        { id: 1, productName: "iPhone", price: 999, productImage: Iphone },
        { id: 2, productName: "Samsung Galaxy", price: 899, productImage: SamsungGalaxy },
        { id: 3, productName: "Google Pixel", price: 799, productImage: GooglePixel },
        { id: 4, productName: "OnePlus", price: 699, productImage: OnePlus },
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