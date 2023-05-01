"use client"

import React, { useState } from 'react'

import styles from './product.module.scss'
import LayoutAdmin from '@/components/layout/layoutAdmin'
import ProductCard from '@/components/adminProductCard/productCard'
import AdminProductCardModal from '@/components/modalAdminProductCard/adminProductModal'

function AdminProduct() {

	const [modalOpen, setModalOpen] = useState(false)

	const closeModal = () => {
		setModalOpen(false)
	}

	return (
		<LayoutAdmin>
			<div className={styles.product}>Products will be here</div>
			{/* <ProductCard/> */}

			{modalOpen && <AdminProductCardModal closeModal={closeModal} />}

			<button onClick={() => { setModalOpen(true) }}>Add a beer</button>
		</LayoutAdmin>

	)
}

export default AdminProduct
