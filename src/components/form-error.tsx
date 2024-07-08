import { TriangleAlertIcon } from 'lucide-react'

type Props = {
	message?: string
}

const FormError = ({ message }: Props) => {
	if (!message) return null

	return (
		<div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
			<TriangleAlertIcon />
			<p>{message}</p>
		</div>
	)
}

export default FormError
