'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	headerLabel: string
	backButtonLabel: string
	backButtonHref: string
	showSocial?: boolean
}

const CardWrapper = ({
	children,
	backButtonHref,
	backButtonLabel,
	headerLabel,
	showSocial
}: Props) => {
	return <Card className='w-[400px] shadow-md'>{children}</Card>
}

export default CardWrapper
