import React from 'react'
import styles from './adminNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeerMugEmpty,faList,faComments } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function AdminNav() {
	return (

		<div className={styles.navigation}>

<span className={styles.title}>Beerlocator</span>

		<ul>

			<li className={styles.li}>
			<Link href='/admin/product' className={styles.link}>
				<span>Products</span>
				<FontAwesomeIcon icon={faBeerMugEmpty} className={styles.icon}/>	
			</Link>
			</li>
			
			<li className={styles.li}>
			<Link href='/admin/category' className={styles.link}>
			<span>Category</span>
			<FontAwesomeIcon icon={faList} className={styles.icon}/>
			</Link>
			</li>

			<li className={styles.li}>
			<Link href='/admin/category' className={styles.link}>
			<span>Comments</span>
			<FontAwesomeIcon icon={faComments} className={styles.icon}/>
			</Link>
			</li>
		</ul>
	</div>

	)
}

export default AdminNav
