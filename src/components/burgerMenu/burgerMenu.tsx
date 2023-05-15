import React,{useState} from 'react'
import styles from './burgerMenu.module.scss'


function BurgerMenu({active,setActive}) {

const clicked = styles.burgerBar + ' ' + styles.clicked
const unclicked = styles.burgerBar+ ' ' + styles.unclicked

	return ( 
			<div className={active ? clicked : unclicked }>
				test
			</div>
	 );
}

export default BurgerMenu;