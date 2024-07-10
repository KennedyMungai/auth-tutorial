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
			<TriangleAlertIcon />
		</CardWrapper>
	)
}

export default ErrorCard
