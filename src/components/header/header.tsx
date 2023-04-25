import React from 'react'
import styles from "./header.module.scss"
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({ subsets: ['latin'] })

function Header() {
	return (
		<header className={josefinSans.className}>
		<div className={styles.headerBg}>
			<div className={styles.container}>
				<ul className={styles.navbar}>
					<li>Logo</li>
					<li>About</li>
					<li>Log in</li>
				</ul>
			</div>
		</div>
		</header>
	)
}

export default Header
