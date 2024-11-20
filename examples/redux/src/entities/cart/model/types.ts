import type { ProductId } from '~entities/product/@x/cart'

export type CartItem = {
  productId: ProductId
  quantity: number
}

export type CartStore = {
  items: Record<ProductId, CartItem>
}
