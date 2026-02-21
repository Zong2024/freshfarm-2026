import { clsx } from 'clsx'
import styles from './SearchBar.module.scss'
const SearchBar = ({ keyword, setKeyword, onSearch, isHome = false }) => {
	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			onSearch()
		}
	}
	return (
		<div className={clsx(styles.searchBox, isHome && styles.home)}>
			<div className={clsx(styles.customSearchBar)}>
				<input
					type="search"
					className={clsx(styles.searchInput)}
					placeholder="請輸入商品名稱…"
					value={keyword}
					onChange={e => setKeyword(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button type="button" className={clsx(styles.searchBtn)} onClick={onSearch}>
					<span className={clsx('material-icons text-primary', styles.searchBtnIcon)}>search</span>
				</button>
			</div>
		</div>
	)
}

export default SearchBar
