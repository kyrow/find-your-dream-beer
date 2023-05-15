import React, { useState } from 'react'
import styles from "./header.module.scss"
import { Josefin_Sans } from 'next/font/google';
import LoginModal from '../logInModal/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faBeerMugEmpty,faCircleUser,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import BurgerMenu from '../burgerMenu/burgerMenu';


const josefinSans = Josefin_Sans({ subsets: ['latin'] })

function Header() {

	const [modalOpen, setModalOpen] = useState(false)
	const [openInput, setInputOpen] = useState(false)
	const [isMenuActive,setMenuActive] = useState(false)
	
	const closeModal = () => {
		setModalOpen(false);
	}

	return (  
		<header className={josefinSans.className}>
			{modalOpen && <LoginModal modalOff={closeModal} />}
		<BurgerMenu active={isMenuActive} setActive={setMenuActive}/>
			<div className={styles.headerBg}>
			
			
				<div className={styles.container}>
					<ul className={styles.navbar}>
						<li className={styles.iconLi} onClick={()=>{setMenuActive(!isMenuActive)}}>
						<FontAwesomeIcon className={styles.icon} icon={faBars} />
						<span>menu</span></li>

						<li><FontAwesomeIcon className={styles.icon} icon={faBeerMugEmpty} /></li>
						

						<div className={styles.userBlock}>
							<li>
								<div className={styles.input}>
								{openInput &&	<input type="text" />}
								<FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} onClick={()=>{setInputOpen(true)}} />
								</div>
							</li>
							<li className={styles.iconLi} onClick={() => { setModalOpen(true) }}>
								<FontAwesomeIcon icon={faCircleUser} className={styles.icon} />
							</li>
						</div>

					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
