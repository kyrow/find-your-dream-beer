import React, { useEffect, useState } from 'react'
import styles from './comparableItem.module.scss'
import Beers from '../../beer.json'
import Beer from './beer/beer'


function ComparableItem() {

	const [textValue,setTextValue] = useState('')

	return (
		<div className={styles.container}>
			<div className={styles.inputArea}>

				<input className={styles.input} placeholder='Lets find some beer'  type="text" onChange={(event)=>{setTextValue(event.target.value)}} />
				{textValue === '' ? null : 
				<span className={styles.filteredItim}>
					{Beers.filter((item)=>{
					return textValue.toLowerCase() === '' ? item : item.title.toLowerCase().includes(textValue)
				}).map(beer => {
							return (
								<span className={styles.selectedBeer}>{beer.title}</span>
							)
						})}</span>
					}

					<Beer />
			</div>
			
		</div>
	)
}

export default ComparableItem
