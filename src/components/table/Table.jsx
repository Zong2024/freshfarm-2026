import { clsx } from 'clsx'
import styles from './Table.module.scss'

const Table = ({ columns, data, renderRow, emptyMessage, bordered = false }) => {
	return (
		<>
			{/* 電腦版 */}
			<div className={clsx('d-none d-lg-block', styles.bg)}>
				<table
					className={clsx('table-borderless', styles.table, {
						[styles.bordered]: bordered,
					})}
				>
					<thead>
						<tr>
							{columns.map(col => (
								<th key={col.key} scope="col" style={{ width: col.width }}>
									{col.title}
								</th>
							))}
						</tr>
					</thead>

					{data.length > 0 ? (
						<tbody>{data.map(item => renderRow(item))}</tbody>
					) : (
						<tbody>
							<tr>
								<td colSpan={columns.length} className="text-gray-300 py-10 text-center">
									{emptyMessage || '沒有資料'}
								</td>
							</tr>
						</tbody>
					)}
				</table>
			</div>

			{/* 手機版 */}
			<div className="d-lg-none">
				{data.length > 0 ? (
					data.map(item => renderRow(item, true))
				) : (
					<div className={styles.bg}>
						<div className="text-gray-300 py-10 text-center">{emptyMessage || '沒有資料'}</div>
					</div>
				)}
			</div>
		</>
	)
}

export default Table
