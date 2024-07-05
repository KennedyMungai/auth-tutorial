import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'

const font = Poppins({
	subsets: ['latin'],
	weight: ['600']
})

export default function Home() {
	return (
		<main className='h-full flex flex-col items-center justify-center bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-500'>
			<div className='space-y-6 text-center'>
				<h1
					className={cn(
						'text-6xl font-semibold text-white drop-shadow-md',
						font.className
					)}
				>
					🔐 Auth
				</h1>
				<p className='text-white text-lg'>
					A simple authentication service
				</p>
				<div>
					<Button variant={'secondary'} size={'lg'}>
						Sign In
					</Button>
				</div>
			</div>
		</main>
	)
}
