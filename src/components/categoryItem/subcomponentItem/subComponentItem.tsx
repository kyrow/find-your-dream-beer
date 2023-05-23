import React from 'react'
import styles from './subComponentItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'

function SubComponentItem({dropDownOpen,title,setDropDownOpen}) {
	const active = styles.active
	const defaultPos = styles.default

	const toggleDropDown = () => {
		setDropDownOpen(!dropDownOpen)
	}

	return (
		<li onClick={(event)=>{toggleDropDown()}}>
				<div className={styles.dropdownButton}>					
					<span >{title}</span>
					<FontAwesomeIcon icon={faArrowDown} className={dropDownOpen ? active : defaultPos}/>
					</div>
					{	dropDownOpen &&	<ul className={styles.subDropdown}>
								<li>
								first item	
								</li>
								<li>
								second item
								</li>
							</ul>}
		</li>
	)
}

export default SubComponentItem
