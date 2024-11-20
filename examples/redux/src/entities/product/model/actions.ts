import { createAppAsyncThunk } from '~shared/store'
import type { Product, ProductId } from './types'

// Mock product
async function fetchProducts(): Promise<Product[]> {
  return [
    {
      id: 1 as ProductId,
      name: 'beer',
      price: 12,
      image: '/product-beer.jpg',
    },
    {
      id: 2 as ProductId,
      name: 'milk',
      price: 9,
      image: '/product-milk.jpg',
    },
  ]
}

// Example of using redux-thunk
export const loadProducts = createAppAsyncThunk(
  'product/loadProducts',
  async (_ /* { getState } */) => {
    // Example how you can get access to external state using selectors
    // ❌ const cartProducts = getState().cartSlice.items
    // ✅ const cartProducts = selectCartProducts(getState())

    // Wait 1sec loading data
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Emulate request
    const data = await fetchProducts()

    return data
  },
)
