import CartButton from '@/components/button/CartButton'
import ProductCard from './ProductCard'

const SingleButtonCard = ({ ...productInfo }) => {
	return <ProductCard {...productInfo} action={<CartButton />} page="home"/>
}

export default SingleButtonCard
