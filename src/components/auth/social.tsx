'use client'

import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { signIn } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Social = () => {
	const onClick = (provider: 'google' | 'github') =>
		signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT })

	return (
		<div className='flex items-center w-full gap-x-2'>
			<Button
				size={'lg'}
				className='w-full'
				variant={'outline'}
				onClick={() => onClick('google')}
			>
				<FcGoogle className='size-5' />
			</Button>
			<Button
				size={'lg'}
				className='w-full'
				variant={'outline'}
				onClick={() => onClick('github')}
			>
				<FaGithub className='size-5' />
			</Button>
		</div>
	)
}

export default Social
