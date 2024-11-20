import type { Product, ProductId } from '../model/types'
import css from './ProductCart.module.css'

type Props = {
  product: Product
  onAddToCart: (id: ProductId) => void
}

export function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className={css.root} data-fsd="entity/product/ui/product-card">
      <img src={product.image} width="150" />
      <div>
        <div className={css.name}>{product.name}</div>
        <button type="button" onClick={() => onAddToCart(product.id)}>
          add to cart (
          {product.price}
          {' '}
          $)
        </button>
      </div>
    </div>
  )
}
