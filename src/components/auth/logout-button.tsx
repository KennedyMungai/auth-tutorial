'use client'

import { logout } from '@/actions/logout'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const Logout = ({ children }: Props) => {
	const onClick = () => logout()

	return (
		<span onClick={onClick} className='cursor-pointer'>
			{children}
		</span>
	)
}

export default Logout
