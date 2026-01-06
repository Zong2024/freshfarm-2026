import SectionHeader from '../SectionHeader/SectionHeader'
import storyImg from './assets/story.jpg'
import styles from './StorySection.module.scss'

const StorySection = () => {
	return (
		<div className={styles.bg}>
			<section className="container py-8 py-lg-11">
				<SectionHeader
					badge="小農專訪"
					title="探尋台灣風土的真摯感動"
					subtitle="聆聽小農心聲，故事與新鮮同行"
				/>
				<div className={styles.introContainer}>
					<div className={styles.introImg}>
						<img src={storyImg} className="rounded-2" alt="故事圖片" />
					</div>
					<div className={styles.textContent}>
						<h6 className="fs-lg-4 mb-1 mb-lg-2 text-primary-400">海港的堅持</h6>
						<h5 className="fs-lg-2 mb-3 mb-lg-6">阿海的現撈野生軟絲</h5>
						<p className="fs-lg-5">
							清晨四點，天色微亮，阿海哥的漁船已經破浪而出。身為一名資深漁民，他深知大海的脾氣與慷慨。阿海哥堅持以一支釣或定置網等友善漁法捕撈，不過度捕撈，只為維護海洋生態的永續。他說：「我們只捕當季、當令的魚貨，當天捕上岸的野生軟絲，眼睛清澈、肉質Q彈，那才是真正的鮮。」當他將一箱箱閃著銀光的現撈漁獲送上岸，你就能感受到那份來自大海，最新鮮、最有活力的生命力。
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default StorySection
