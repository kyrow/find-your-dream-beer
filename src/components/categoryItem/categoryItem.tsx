import React, {useState} from 'react'
import styles from './categoryItem.module.scss'
import { Kanit} from 'next/font/google';
import SubComponentItem from './subcomponentItem/subComponentItem';
import CategoryProductCard from './productCard/productCard';



const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
})

const title = kanit.className + ' ' + styles.title

function CategoryItem({categoryName}) {

	const [dropDownOpen, setDropDownOpen] = useState(false)
	const [dropDownOpen1, setDropDownOpen1] = useState(false)
	const [dropDownOpen2, setDropDownOpen2] = useState(false)

	return (
		
		<div className={styles.container}>
			<div className={styles.subHeader}>
				<span className={title}>
				{categoryName}
				</span>
			<nav className={kanit.className}>
				<ul className={styles.dropdownArea}> 

					<li className={styles.mainDropdown}>
				<SubComponentItem setDropDownOpen={setDropDownOpen} dropDownOpen={dropDownOpen} title={'Brand'}/>
					</li>

					<li className={styles.mainDropdown}>
				<SubComponentItem setDropDownOpen={setDropDownOpen1} dropDownOpen={dropDownOpen1} title={'Alcohol'}/>
					</li>

					<li className={styles.mainDropdown}>
				<SubComponentItem setDropDownOpen={setDropDownOpen2} dropDownOpen={dropDownOpen2} title={'Grade'}/>
					</li>

				</ul>
			</nav>
			</div>
		<div className={styles.productContainer}>
			<CategoryProductCard/>
			<CategoryProductCard/>
			<CategoryProductCard/>
			
		</div>
		</div>
	)
}

export default CategoryItem
