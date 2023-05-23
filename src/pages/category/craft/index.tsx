import CategoryItem from '@/components/categoryItem/categoryItem'
import Layout from '@/components/layout/layout'


export default function Home() {

	const name = 'Craft beer'

  return (
  <>
			<Layout>
				<CategoryItem categoryName={name}/>
			</Layout>
    </>
  )
}
