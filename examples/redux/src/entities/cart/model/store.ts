import type { PayloadAction } from '@reduxjs/toolkit'
import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { ProductId } from '~entities/product/@x/cart'
import { selectProductMap } from '~entities/product/@x/cart'
import { rootReducer } from '~shared/store'
import type { CartItem, CartStore } from './types'

const initialState: CartStore = {
  items: {},
}

export const cartStore = createSlice({
  name: 'cartStore',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductId>) => {
      const item = state.items[action.payload]

      state.items[action.payload] = {
        productId: action.payload,
        quantity: item ? item.quantity + 1 : 1,
      }
    },
    removeItem: (state, action: PayloadAction<ProductId>) => {
      const item = state.items[action.payload]

      if (!item) {
        return
      }

      if (item.quantity > 1) {
        item.quantity -= 1
      }
      else {
        delete state.items[action.payload]
      }
    },
  },
  selectors: {
    cartProductIds: createSelector(
      state => state.items,
      items => Object.keys(items).map(Number) as ProductId[],
    ),
    cart: createSelector(
      state => state.items,
      items => Object.values(items) as CartItem[],
    ),
  },
})

// Example of using a external selector (selectProductMap)
export const selectCartProducts = createSelector(
  cartStore.selectors.cart,
  selectProductMap,
  (items, productsMap) => {
    return items.map((item) => {
      return {
        ...item,
        ...productsMap[item.productId],
      }
    }, [])
  },
)

export const selectTotalPrice = createSelector(
  cartStore.selectors.cart,
  selectProductMap,
  (products, productMap) => {
    return products.reduce((acc, product) => {
      acc += product.quantity * productMap[product.productId].price
      return acc
    }, 0)
  },
)

/**
 * 🔊 Example how you should inject local redux-slice to redux,
 * if you want use redux as modular state manager
 */
rootReducer.inject(cartStore)

export const { addItem, removeItem } = cartStore.actions
