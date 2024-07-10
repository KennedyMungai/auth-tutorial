import { TriangleAlertIcon } from 'lucide-react'
import CardWrapper from './card-wrapper'

type Props = {}

const ErrorCard = () => {
	return (
		<CardWrapper
			headerLabel='Oops! Something went wrong!'
			backButtonHref='/auth/login'
			backButtonLabel='Back to Login'
		>
			<div className='w-full flex items-center justify-center'>
				<TriangleAlertIcon className='size-8 text-rose-500' />
			</div>
		</CardWrapper>
	)
}

export default ErrorCard
