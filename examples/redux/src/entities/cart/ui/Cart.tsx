import { useAppDispatch, useAppSelector } from '~shared/store'
import { cartStore, selectCartProducts, selectTotalPrice } from '../model/store'
import { CartItemProduct } from './CartItemProduct'
import css from './Cart.module.css'

export function Cart() {
  const cartProducts = useAppSelector(selectCartProducts)
  const cartTotalPrice = useAppSelector(selectTotalPrice)
  const dispatch = useAppDispatch()

  return (
    <div data-fsd="entity/cart/ui/cart">
      <h2>Cart</h2>
      <h3>
        Total price:
        {' '}
        {cartTotalPrice}
        $
      </h3>
      {cartProducts.length === 0 && <div>cart is empty</div>}
      <div className={css.list}>
        {cartProducts.map((item) => {
          return (
            <CartItemProduct
              key={item.productId}
              item={item}
              onAdd={id => dispatch(cartStore.actions.addItem(id))}
              onRemove={id => dispatch(cartStore.actions.removeItem(id))}
            />
          )
        })}
      </div>
    </div>
  )
}
