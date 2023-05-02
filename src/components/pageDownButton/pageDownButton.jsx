import React from 'react'
import styles from './pageDownButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'


function PageDown() {
	return (
		<div className={styles.buttonContainer}>
			<Link to="versusPage" className={styles.icon} scroll={true} smooth={true} offset={50}
				duration={100} >
				<FontAwesomeIcon icon={faArrowDown} />
			</Link>
		</div>
	)
}

export default PageDown
