import React from 'react'
import { ShopContext } from '../context/ShopContext';

export const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(ShopContext);

    return (
        <div>
            <h2>Carrito</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacio</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price}
                                <button onClick={() => removeFromCart(item.id)}>Quitar</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart}>Vaciar carrito</button>
                </>
            )}
        </div>
    )
}

export default Cart;