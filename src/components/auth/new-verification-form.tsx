'use client'

import CardWrapper from '@/components/auth/card-wrapper'
import { Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'

type Props = {}

const NewVerificationForm = () => {
	const searchParams = useSearchParams()

	const token = searchParams.get('token')

	const onSubmit = useCallback(() => {
		console.log(token)
	}, [token])

	useEffect(() => onSubmit(), [onSubmit])

	return (
		<CardWrapper
			headerLabel={'Confirming Your Verification'}
			backButtonLabel={'Back to Login'}
			backButtonHref={'/auth/login'}
		>
			<div className='flex items-center w-full justify-center'>
				<Loader2 className='size-8 animate-spin text-neutral-400' />
			</div>
		</CardWrapper>
	)
}

export default NewVerificationForm
