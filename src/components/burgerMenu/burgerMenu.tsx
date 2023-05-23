import React,{useState} from 'react'
import styles from './burgerMenu.module.scss'
import Link from 'next/link'


function BurgerMenu({active,setActive}) {

const clicked = styles.burgerBar + ' ' + styles.clicked
const unclicked = styles.burgerBar+ ' ' + styles.unclicked
const activeMenu = styles.wrapper

	return ( 
		<div className={active ? activeMenu : null} onClick={()=>setActive(false)}>
			<div className={active ? clicked : unclicked } onClick={e => e.stopPropagation()}>
				<div className={styles.burgerContent} >
				
						<span> <Link href="/">Beerlocator</Link> </span>
						
						<ul>
						<Link href="/category/craft">	<li>Крафтовое</li></Link>
						<Link href="/category/light"><li>Светлое</li></Link>
						<Link href="/category/dark"><li>Темное</li></Link>
						<Link href="/category/nonAlcohol"><li>Безалкогольное</li></Link>
						</ul>
				
				</div>
			</div>
			</div>	
	 );
}

export default BurgerMenu;