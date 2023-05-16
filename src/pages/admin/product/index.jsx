"use client"

import React, { useState } from 'react'

import styles from './product.module.scss'
import LayoutAdmin from '@/components/layout/layoutAdmin'
import ProductCard from '@/components/adminProductCard/productCard'
import AdminProductCardModal from '@/components/modalAdminProductCard/adminProductModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function AdminProduct() {

	const [modalOpen, setModalOpen] = useState(false)

	const closeModal = () => {
		setModalOpen(false)
	}

	return (
		<LayoutAdmin>
			{/* <ProductCard /> */}

			{modalOpen && <AdminProductCardModal closeModal={closeModal} />}

			<button className={styles.button} onClick={() => { setModalOpen(true) }}>
				<span>Добавить</span>
				<FontAwesomeIcon className={styles.icon} icon={faPlus} />
			</button>

		</LayoutAdmin>

	)
}

export default AdminProduct
