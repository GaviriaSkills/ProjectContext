import React from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

export const App = () => {
  return (
    <div>
        <h1>Tienda React</h1>
        <ProductList />
        <Cart />
    </div>
  )
}

export default App;