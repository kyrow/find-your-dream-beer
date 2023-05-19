import React, { useState } from 'react'
import styles from './versusPage.module.scss'
import ComparableItem from '../ComparableItem/ComparableItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import beer from '../../beer.json'

function VersusPage() {

	const [openFinder, setOpenFinder] = useState(false)
	const [closeButton, setCloseButton] = useState(true)

	return (
		<div className={styles.wrapper}>
			<div name="versusPage" className={styles.container}>
				<h2 className={styles.title}>Compare a beer</h2>
				<p className={styles.subtitle}>Here you can compare any two beers and look at their characteristics in more detail</p>

				<div className={styles.compareSection}>



					{openFinder && <ComparableItem />}
					{closeButton && <div className={styles.buttonContainer}>

						<span>Click to pick a beer that u want</span>
						<button className={styles.button}
							onClick={() => {
								setOpenFinder(true)
								setCloseButton(false)
							}}>
							<FontAwesomeIcon className={styles.icon} icon={faPlus} />
						</button>
					</div>}

					{closeButton == false ? <span>vs</span> : null}

					{openFinder && <ComparableItem />}

				</div>
			</div>
		</div>
	)
}

export default VersusPage
