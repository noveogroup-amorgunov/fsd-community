import { cartStore } from '../model/store'

/**
 * Don't export full cartStore to relative entity `product`,
 * Export only necessary selectors and actions
 * to build a strict contract of communication between entities
 */
export const { addItem } = cartStore.actions
