import React from 'react'
import styles from './productCard.module.scss'

function ProductCard() {
	return (
		<div className={styles.productContainer}>
			<div className={styles.image}>image</div>
			<div className={styles.description}>
				<span>Name of brand</span>
				<span>reviews</span>
			</div>
		</div>
	)
}

export default ProductCard
