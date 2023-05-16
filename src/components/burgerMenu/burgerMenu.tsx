import React,{useState} from 'react'
import styles from './burgerMenu.module.scss'


function BurgerMenu({active,setActive}) {

const clicked = styles.burgerBar + ' ' + styles.clicked
const unclicked = styles.burgerBar+ ' ' + styles.unclicked

	return ( 
			<div className={active ? clicked : unclicked }>
				<div className={styles.burgerContent}>
					<div>
						<ul>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
						</ul>
					</div>
				</div>
			</div>
	 );
}

export default BurgerMenu;