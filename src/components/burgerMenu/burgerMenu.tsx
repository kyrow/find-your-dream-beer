import React,{useState} from 'react'
import styles from './burgerMenu.module.scss'


function BurgerMenu({active,setActive}) {

const clicked = styles.burgerBar + ' ' + styles.clicked
const unclicked = styles.burgerBar+ ' ' + styles.unclicked
const activeMenu = styles.wrapper

	return ( 
		<div className={active ? activeMenu : null} onClick={()=>setActive(false)}>
			<div className={active ? clicked : unclicked } onClick={e => e.stopPropagation()}>
				<div className={styles.burgerContent} >
				
						<span>Beerlocator</span>
						
						<ul>
							<li>Крафтовое</li>
							<li>Светлое</li>
							<li>Темное</li>
							<li>Безалкогольное</li>
						</ul>
				
				</div>
			</div>
			</div>	
	 );
}

export default BurgerMenu;