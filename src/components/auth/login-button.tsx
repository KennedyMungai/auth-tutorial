'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	mode?: 'modal' | 'redirect'
	asChild?: boolean
}

const LoginButton = ({ children, asChild, mode = 'redirect' }: Props) => {
	const router = useRouter()

	const onClick = () => router.push('/auth/login')

	// TODO: Implement modal
	if (mode === 'modal') {
		return <span>TODO: Implement Modal</span>
	}

	return (
		<span className='cursor-pointer' onClick={onClick}>
			{children}
		</span>
	)
}

export default LoginButton
