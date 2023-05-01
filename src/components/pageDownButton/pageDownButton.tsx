import React from 'react'
import styles from './pageDownButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


function PageDown() {
	return (
		<div className={styles.buttonContainer}>
				<Link href="#versusPage" className={styles.icon} scroll={true}>
				<FontAwesomeIcon icon={faArrowDown} />
				</Link>
		</div>
	)
}

export default PageDown
