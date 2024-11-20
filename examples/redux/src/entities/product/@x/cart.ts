import { productStore } from '../model/store'

export { loadProducts } from '../model/actions'
export type { Product, ProductId } from '../model/types'

/**
 * Don't export full productStore to relative entity `cart`,
 * Export only necessary selectors and actions
 * to build a strict contract of communication between entities
 */
export const { productsMap: selectProductMap } = productStore.selectors
