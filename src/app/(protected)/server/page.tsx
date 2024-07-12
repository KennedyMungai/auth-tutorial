import { currentUser } from '@/lib/auth'

const ServerPage = async () => {
	const user = await currentUser()

	return <div>{JSON.stringify(user, null, 2)}</div>
}

export default ServerPage
