import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NotFoundPage = () => {
	return (
		<div className='bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-500 flex flex-col h-full items-center justify-center gap-4'>
			<span className='text-white text-4xl'>404 - Page Not Found</span>
			<Link href='/'>
				<Button className='bg-transparent hover:bg-transparent hover:border'>
					Go back
				</Button>
			</Link>
		</div>
	)
}

export default NotFoundPage
