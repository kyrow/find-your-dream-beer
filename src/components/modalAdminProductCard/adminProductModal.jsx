import React from 'react'
import styles from "./adminProdModal.module.scss"

function AdminProductCardModal(props) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.modalContainer}>
				<div className={styles.inputArea}>

					<div className={styles.inputBlock}>
						<label htmlFor="">name of brand</label>
						<input type="text" />
					</div>
					<div className={styles.inputBlock}>
						<label htmlFor="">percent</label>
						<input type="text" />
					</div>
					<div className={styles.inputBlock}>
						<label htmlFor="">snack</label>
						<input type="text" />
					</div>
					<div className={styles.inputBlock}>
						<label htmlFor="">type</label>
						<input type="text" />
					</div>
					<div className={styles.inputBlock}>
						<label htmlFor="">description</label>
						<input type="textarea" />
					</div>
					<div className={styles.inputBlock}>
						<label htmlFor="">image</label>
						<input type="text" />
					</div>

				</div>

				<button onClick={props.closeModal}>Добавить</button>
			</div>
		</div>
	)
}

export default AdminProductCardModal
