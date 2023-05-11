import React from 'react'
import styles from './loginContent.module.scss'


function LoginContent({modalOff}) {

	return (
		<div className={styles.loginContent}>

			<div className={styles.close} onClick={()=>{modalOff()}}>x</div>

			<h2 className={styles.title}>Log in to Beerlocator</h2>

			<div className={styles.inputContainer}>
				<label htmlFor="">User name</label>
				<input type="text" className={styles.input} />
			</div>

			<div className={styles.inputContainer}>
				<label htmlFor="">Password</label>
				<input type="text" className={styles.input} />
			</div>

			<button>Log in</button>

			<button>Don't have an account? Sign up</button>
		</div>
	)
}

export default LoginContent
