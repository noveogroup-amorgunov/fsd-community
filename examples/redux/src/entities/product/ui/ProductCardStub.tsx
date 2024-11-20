import cn from 'classnames'
import css from './ProductCardStub.module.css'

type Props = {
  isLoading?: boolean
}

export function ProductCardStub({ isLoading }: Props) {
  return (
    <div className={cn(css.root, { [css.root_pulsed]: isLoading })} data-fsd="entity/product/ui/product-card">
      <div style={{ width: '150px', height: '150px' }} />
      <div style={{ width: '70px', height: '41px' }} />
    </div>
  )
}
