import React from 'react'
import styles from "./header.module.scss"

function Header() {
	return (
		<div className={styles.headerBg}>
			<div className={styles.container}>
				<ul className={styles.navbar}>
					<li>Logo</li>
					<li>About</li>
					<li>Log in</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
