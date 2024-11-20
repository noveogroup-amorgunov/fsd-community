import { Cart } from '~entities/cart'
import { ProductList } from '~entities/product'

export function HomePage() {
  return (
    <main>
      <h1>examples/redux</h1>
      <p>
        This is example how you can work with FSD and Redux. Read more information
        {' '}
        <a href="https://fsd-community.netlify.app/posts/redux" target="_blank" rel="noreferrer noopener">on documentation</a>
        .
      </p>
      <Cart />
      <ProductList />
    </main>
  )
}
