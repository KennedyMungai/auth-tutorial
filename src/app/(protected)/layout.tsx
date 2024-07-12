import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const ProtectedLayout = ({ children }: Props) => {
	return (
		<div className='h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-500'>
			{children}
		</div>
	)
}

export default ProtectedLayout
