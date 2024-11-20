import type { PayloadAction } from '@reduxjs/toolkit'
import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit'
import { rootReducer } from '~shared/store'
import { loadProducts } from './actions'
import type { Product, ProductId } from './types'

const productsAdapter = createEntityAdapter<Product>()

const productsAdapterSelectors = productsAdapter.getSelectors()

export const productStore = createSlice({
  name: 'productStore',
  initialState: {
    entities: productsAdapter.getInitialState(),
    loading: false,
  },
  reducers: {
    productAdded(state, action: PayloadAction<Product>) {
      productsAdapter.addOne(state.entities, action)
    },
    productReceived(state, action: PayloadAction<Product[]>) {
      productsAdapter.setAll(state.entities, action.payload)
    },
  },
  selectors: {
    isLoading: state => state.loading,
    productsMap: state => productsAdapterSelectors.selectEntities(state.entities),
    products: state => productsAdapterSelectors.selectAll(state.entities),
    productsByIds: createSelector(
      state => productsAdapterSelectors.selectEntities(state.entities),
      (_, productIds: ProductId[]) => productIds,
      (productsMap: Record<ProductId, Product>, productIds: ProductId[]) => {
        const res: Record<ProductId, Product> = {}
        productIds.forEach((id) => {
          res[id] = productsMap[id]
        })
        return res
      },
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(loadProducts.rejected, (state) => {
        state.loading = false
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loading = false
        productsAdapter.setAll(state.entities, action.payload)
      })
  },
})

rootReducer.inject(productStore)
