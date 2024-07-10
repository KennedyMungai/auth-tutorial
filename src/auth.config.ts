import { getUserByEmail } from '@/data/user'
import { loginSchema } from '@/schemas/index'
import bcrypt from 'bcryptjs'
import { NextAuthConfig } from 'next-auth'
import credentials from 'next-auth/providers/credentials'
import github from 'next-auth/providers/github'
import google from 'next-auth/providers/google'

export default {
	providers: [
		credentials({
			async authorize(credentials) {
				const validatedFields = loginSchema.safeParse(credentials)

				if (validatedFields.success) {
					const { email, password } = validatedFields.data

					const user = await getUserByEmail(email)

					if (!user || !user.password) return null

					const passwordsMatch = await bcrypt.compare(
						password,
						user.password
					)

					if (passwordsMatch) return user
				}

				return null
			}
		}),
		github,
		google
	]
} satisfies NextAuthConfig
