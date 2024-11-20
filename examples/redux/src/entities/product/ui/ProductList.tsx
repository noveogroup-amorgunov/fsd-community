import { useEffect } from 'react'
import { addItem } from '~entities/cart/@x/product'
import { useAppDispatch, useAppSelector } from '~shared/store'
import { loadProducts } from '../model/actions'
import { productStore } from '../model/store'
import { ProductCard } from './ProductCard'
import { ProductCardStub } from './ProductCardStub'
import css from './ProductList.module.css'

export function ProductList() {
  const products = useAppSelector(productStore.selectors.products)
  const productsIsLoading = useAppSelector(productStore.selectors.isLoading)
  const dispatch = useAppDispatch()

  const isLoading = productsIsLoading && products.length === 0

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  if (isLoading) {
    return (
      <div data-fsd="entity/product/ui/product-list">
        <h2>Products</h2>
        <div className={css.list}>
          <ProductCardStub key="1" isLoading />
          <ProductCardStub key="2" isLoading />
        </div>
      </div>
    )
  }

  return (
    <div data-fsd="entity/product/ui/product-list">
      <h2>Products</h2>
      <div className={css.list}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={id => dispatch(addItem(id))} />
        ))}
      </div>
    </div>
  )
}
