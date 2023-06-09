import Head from 'next/head'
import styles from '../styles/home.module.scss'

import 'swiper/css';
import { Josefin_Sans,Bebas_Neue,Kalam } from 'next/font/google';
import Layout from '../components/layout/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter,faCommentDots,faGreaterThanEqual,faMagnifyingGlass,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import VersusPage from '@/components/versusPage/versusPage';
import Polaroid from '@/components/polaroid/polaroid';


const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})
const kalam = Kalam({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {

  return (
    <>
      <Head>
        <title>BeerLocator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<Layout>
				
      <main className={josefinSans.className}>
				<div className={styles.background}>

				<div className={bebasNeue.className}>
					<span className={styles.neonTitle}>beerlocator</span>	
				</div>

				<div className={styles.container}>

					<div className={styles.introContainer}>

						<div className={styles.introImage}>
							<Polaroid/>
							<span className={kalam.className}>#IWannaBeer</span>
						</div>
						
						<div className={styles.introDescription}>
							<div>
							<h2>Let's find your dream beer</h2>
							<div className={styles.description}>
								<span><p className={styles.descriptionText}>Tired of the usual beer? So let us help you find the beer of your dreams.</p></span>
							</div>

							<div className={styles.workDescription}>
								<h2>That's how we can help</h2>

								<div className={styles.workExamples}>
									<div>
									<div className={styles.icon}>
									<FontAwesomeIcon icon={faFilter} />
									</div>
									<span>filter a beer you like</span>
									</div>

									<div>
									<div className={styles.icon}>
										<FontAwesomeIcon icon={faGreaterThanEqual} />
									</div>
									<span>Compare your favorite drinks</span>
									</div>

									<div>
									<div className={styles.icon}>
									<FontAwesomeIcon icon={faMagnifyingGlass} />
									</div>
									<span>Expand your taste preferences</span>
									</div>

									<div>
									<div className={styles.icon}>
									<FontAwesomeIcon icon={faCommentDots} />
									</div>
									<span>Leave and read reviews on the beer </span>
									</div>

								</div>
							</div>
							</div>
							
	
						</div>
						
					</div>
	
				</div>

				<VersusPage/>

				</div>
      </main>
			</Layout>
    </>
  )
}
