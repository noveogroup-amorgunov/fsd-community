import type { Product, ProductId } from '~entities/product/@x/cart'
import type { CartItem } from '../model/types'
import css from './CartItemProduct.module.css'

type Props = {
  item: CartItem & Product
  onAdd: (id: ProductId) => void
  onRemove: (id: ProductId) => void
}

export function CartItemProduct({ item, onAdd, onRemove }: Props) {
  return (
    <div className={css.root} data-fsd="entity/cart/ui/cart-product-item">
      <img src={item.image} width="70" height="70" />
      <div>
        {item.name}
        :
        {item.price}
        $
        <br />
        quantity:
        {' '}
        {item.quantity}
        <br />
        <button type="button" onClick={() => onAdd(item.productId)}>add more</button>
        <button type="button" onClick={() => onRemove(item.productId)}>remove one</button>
        <br />
        <br />
      </div>
    </div>
  )
}
