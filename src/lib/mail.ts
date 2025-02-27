import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email: string, token: string) => {
	const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

	await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: email,
		subject: 'Please confirm your email',
		html: `<p>Please confirm your email by clicking <a href="${confirmLink}">here</a>:</p>`
	})
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
	const resetLink = `http://localhost:3000/auth/new-password?token=${token}`

	await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: email,
		subject: 'Reset your password',
		html: `<p>Please reset your password by clicking <a href="${resetLink}">here</a>:</p>`
	})
}

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
	await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: email,
		subject: 'Your 2FA token',
		html: `<p>Your 2FA code is ${token}</p>`
	})
}