import CartButton from '@/components/button/CartButton'
import ProductCard from './ProductCard'

const SingleButtonCard = ({ ...product }) => {
	return <ProductCard {...product} action={<CartButton />} />
}

export default SingleButtonCard
