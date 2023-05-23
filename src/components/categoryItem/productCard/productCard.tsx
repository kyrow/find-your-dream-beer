import React from 'react'
import styles from './productCard.module.scss'

function CategoryProductCard() {
	return (
		<div className={styles.container}>
			<div className={styles.textArea}>

				<span className={styles.title}>title</span>

				<div className={styles.description}>
					<span>
						Alcohol
					</span>
					<span>
						0.3%
					</span>
				</div>

			</div>
			<div className={styles.image}>
			image must be here
			</div>
		</div>
	)
}

export default CategoryProductCard
