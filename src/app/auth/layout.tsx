import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
	return (
		<div className='h-full flex items-center justify-center bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-500'>
			{children}
		</div>
	)
}

export default AuthLayout
