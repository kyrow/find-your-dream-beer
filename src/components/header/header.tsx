import React, { useState } from 'react'
import styles from "./header.module.scss"
import { Josefin_Sans } from 'next/font/google';
import LoginModal from '../logInModal/login';


const josefinSans = Josefin_Sans({ subsets: ['latin'] })

function Header() {

	const [modalOpen, setModalOpen] = useState(false)

	
	const closeModal = () => {
		setModalOpen(false);
		console.log('close modal')
	}

	return (
		<header className={josefinSans.className}>
			{modalOpen && <LoginModal modalOff={closeModal} />}
			<div className={styles.headerBg}>
				<div className={styles.container}>
					<ul className={styles.navbar}>
						<li>Logo</li>
						<li>About</li>
						<li onClick={() => { setModalOpen(true) }}>Log in</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
