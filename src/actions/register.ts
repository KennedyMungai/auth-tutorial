import { db } from '@/lib/db'
import { registerSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import * as z from 'zod'

export const register = async (values: z.infer<typeof registerSchema>) => {
	const validatedFields = registerSchema.safeParse(values)

	if (!validatedFields.success) return { error: 'Invalid Fields!' }

	const { email, name, password } = validatedFields.data

	const hashedPassword = await bcrypt.hash(password, 10)

	const existingUser = await db.user.findUnique({
		where: { email }
	})

	if (existingUser) return { error: 'Email already in use' }

	await db.user.create({
		data: {
			name,
			email,
			password: hashedPassword
		}
	})

	// TODO: Send verification token email

	return { success: 'Email Sent' }
}
