import { clsx } from 'clsx'
import styles from './SearchBar.module.scss'
const SearchBar = () => {
	return (
		<div className={clsx(styles.searchBox)}>
			<div className={clsx(styles.customSearchBar)}>
				<input type="text" className={clsx(styles.searchInput)} placeholder="請輸入商品名稱…" />
				<button type="button" className={clsx(styles.searchBtn)}>
					<span className={clsx('material-icons text-primary', styles.searchBtnIcon)}>search</span>
				</button>
			</div>
		</div>
	)
}

export default SearchBar
