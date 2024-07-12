'use client'

import { logout } from '@/actions/logout'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'

const SettingsPage = () => {
	const session = useSession()

	const onClick = () => logout()

	return (
		<div>
			{JSON.stringify(session)}
			<Button type='submit' onClick={onClick}>
				Sign Out
			</Button>
		</div>
	)
}

export default SettingsPage
