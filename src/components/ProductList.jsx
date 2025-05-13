import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

export const ProductList = () => {
    const { products, addToCar} = useContext(ShopContext);

  return (
    <div>
        <h2>Productos</h2>
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.productImage} alt={product.productName} />
                    <h3>{product.productName}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => addToCar(product)}>Agregar al Carrito</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductList;
