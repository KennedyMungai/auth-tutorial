'use client'

import UserButton from '@/components/auth/user-button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
	const pathname = usePathname()

	return (
		<nav className='bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm'>
			<div className='flex gap-x-2'>
				<Link href={'/server'}>
					<Button
						variant={pathname === '/server' ? 'default' : 'outline'}
					>
						Server
					</Button>
				</Link>
				<Link href={'/client'}>
					<Button
						variant={pathname === '/client' ? 'default' : 'outline'}
					>
						Client
					</Button>
				</Link>
				<Link href={'/admin'}>
					<Button
						variant={pathname === '/admin' ? 'default' : 'outline'}
					>
						Admin
					</Button>
				</Link>
				<Link href={'/settings'}>
					<Button
						variant={
							pathname === '/settings' ? 'default' : 'outline'
						}
					>
						Settings
					</Button>
				</Link>
			</div>
			<UserButton />
		</nav>
	)
}

export default NavBar
