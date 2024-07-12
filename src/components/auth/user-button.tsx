'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOutIcon, UserIcon } from 'lucide-react'
import { useCurrentUser } from '@/hooks/use-current-user'
import LogoutButton from './logout-button'

const UserButton = () => {
	const user = useCurrentUser()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src={user?.image} />
					<AvatarFallback className='rounded-full bg-indigo-500'>
						<UserIcon className='text-white' />
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-40' align='end'>
				<DropdownMenuItem>
					<LogOutIcon className='mr-4 size-4' />
					<LogoutButton>Log Out</LogoutButton>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserButton
