import React from 'react'
import styles from './adminNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeerMugEmpty,faList,faComments } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function AdminNav() {
	return (

		<div className={styles.navigation}>
		<ul>
			<li>
				<Link href='/admin/product'>
				<FontAwesomeIcon icon={faBeerMugEmpty} className={styles.icon}/>
				</Link>
			</li>
			<li>
			<Link href='/admin/category'>
			<FontAwesomeIcon icon={faList} className={styles.icon}/>
			</Link>
			</li>
			<li>
			<FontAwesomeIcon icon={faComments} className={styles.icon}/>
			</li>
		</ul>
	</div>

	)
}

export default AdminNav
