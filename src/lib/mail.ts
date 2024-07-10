import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email: string, token: string) => {
	const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

	await resend.emails.send({
		from: 'auth-corp@corporate.com',
		to: email,
		subject: 'Please confirm your email',
		html: `<p>Please confirm your email by clicking <a href="${confirmLink}">here</a>:</p>`
	})
}
