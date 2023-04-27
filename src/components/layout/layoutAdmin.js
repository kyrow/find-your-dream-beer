import React from 'react'
import styles from './layoutAdmin.module.scss'
import AdminNav from '../adminNav/adminNav'

const LayoutAdmin = ({children}) => {
	return (
		<div className={styles.adminWrapper}>
		<div className={styles.container}>
	<AdminNav/>
	<div className={styles.content}>
	{children}
	</div>
	 </div>
	</div>
	)
}

export default LayoutAdmin
