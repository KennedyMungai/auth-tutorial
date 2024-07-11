'use server'

import { getUserByEmail } from '@/data/user'
import { resetSchema } from '@/schemas'
import * as z from 'zod'

export const reset = async (values: z.infer<typeof resetSchema>) => {
	const validatedFields = resetSchema.safeParse(values)

	if (!validatedFields.success) return { error: 'Invalid Email!' }

	const { email } = validatedFields.data

	const existingUser = await getUserByEmail(email)

	if (!existingUser) return { error: 'Email not found!' }

	// TODO: Generate token and send email

	return { success: 'Reset Email Sent' }
}
