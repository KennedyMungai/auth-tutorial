'use client'

import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	mode?: 'modal' | 'redirect'
	asChild?: boolean
}

const LoginButton = ({ children, asChild, mode = 'redirect' }: Props) => {
	const onClick = () => console.log('Login Button Clicked')

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
