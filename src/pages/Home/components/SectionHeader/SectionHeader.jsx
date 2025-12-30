import styles from './SectionHeader.module.scss'

const SectionHeader = ({ badge, title, subtitle }) => {
	return (
		<div className={styles.titleDecorated}>
			<div className="ps-4 ps-lg-6">
				<span className="badge rounded-pill bg-primary-300 px-2 py-1">{badge}</span>
				<h4 className="my-2 fs-lg-1">{title}</h4>
				<p className="fs-lg-5 text-gray-400">{subtitle}</p>
			</div>
		</div>
	)
}

export default SectionHeader
