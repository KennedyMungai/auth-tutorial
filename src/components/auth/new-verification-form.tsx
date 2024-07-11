'use client'

import { newVerification } from '@/actions/new-verification'
import CardWrapper from '@/components/auth/card-wrapper'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'
import { Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

const NewVerificationForm = () => {
	const searchParams = useSearchParams()

	const [error, setError] = useState<string | undefined>('')
	const [success, setSuccess] = useState<string | undefined>('')

	const token = searchParams.get('token') as string

	const onSubmit = useCallback(() => {
		if (success || error) return

		if (!token) {
			setError('Missing Token')
			return
		}

		newVerification(token)
			.then((data) => {
				setSuccess(data.success)
				setError(data.error)
			})
			.catch(() => setError('Something went wrong'))
	}, [token, success, error])

	useEffect(() => onSubmit(), [onSubmit])

	return (
		<CardWrapper
			headerLabel={'Confirming Your Verification'}
			backButtonLabel={'Back to Login'}
			backButtonHref={'/auth/login'}
		>
			<div className='flex flex-col gap-y-2 items-center w-full justify-center'>
				{!success && !error && (
					<Loader2 className='size-8 animate-spin text-neutral-400' />
				)}
				{success && <FormSuccess message={success} />}
				{!success && <FormError message={error} />}
			</div>
		</CardWrapper>
	)
}

export default NewVerificationForm
