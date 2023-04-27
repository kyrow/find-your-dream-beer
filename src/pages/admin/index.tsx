import LayoutAdmin from '@/components/layout/LayoutAdmin'
import type { ReactElement } from 'react'

const Page = () => {
  return <p>hello world</p>
}

LayoutAdmin.getLayout = function getLayout(page: ReactElement) {
  return (
 <LayoutAdmin>
		{page}
 </LayoutAdmin>
  )
}

export default LayoutAdmin
