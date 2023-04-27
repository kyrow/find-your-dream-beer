import React from 'react'

import styles from './product.module.scss'
import LayoutAdmin from '@/components/layout/layoutAdmin'
import ProductCard from '@/components/adminProductCard/productCard'

function AdminProduct() {
	return (
		<LayoutAdmin>
			<div className={styles.product}>Products will be here</div>
			<ProductCard/>
		</LayoutAdmin>

	)
}

export default AdminProduct
