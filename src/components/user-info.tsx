import { Card, CardContent, CardHeader } from '@/components/ui/card'

type Props = {
	user?: any
	label: string
}

const UserInfo = ({ label, user }: Props) => {
	return (
		<Card className='w-[600px] shadow-md'>
			<CardHeader>
				<p className='text-2xl font-semibold text-center'>{label}</p>
			</CardHeader>
			<CardContent></CardContent>
		</Card>
	)
}

export default UserInfo
