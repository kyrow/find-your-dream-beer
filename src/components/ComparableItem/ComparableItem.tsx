import React from 'react'
import styles from './comparableItem.module.scss'

function ComparableItem() {
	return (
		<div className={styles.container}>
			<div className={styles.inputArea}>
				<input className={styles.input} placeholder='Lets find some beer'  type="text" />
			</div>
			
		</div>
	)
}

export default ComparableItem
