import { productStore } from './model/store'

export { loadProducts } from './model/actions'
export type { Product, ProductId } from './model/types'
export { ProductList } from './ui/ProductList'

export const { productsMap: selectProductMap } = productStore.selectors
