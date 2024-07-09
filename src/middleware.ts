import { auth } from '@/auth'

export default auth((req) => {
	const isLoggedIn = !!req.auth

	console.log('ROUTE: ', req.nextUrl.pathname)
	console.log('Is Logged In: ', isLoggedIn)
})

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
