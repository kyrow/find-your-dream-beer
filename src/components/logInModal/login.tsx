import React from 'react'
import styles from './login.module.scss'
import LoginContent from '../loginContent/loginContent';


function LoginModal({modalOff}) {

	return (
		<div className={styles.wrapper}>
			<LoginContent modalOff={modalOff}/>
		</div>
	)
}

export default LoginModal
