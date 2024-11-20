import type { Brand } from '~shared/lib/type-utils'

export type ProductId = Brand<number, 'ProductId'>

export type Product = {
  id: ProductId
  name: string
  image: string
  price: number
}
