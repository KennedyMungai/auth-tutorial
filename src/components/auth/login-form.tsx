import CardWrapper from '@/components/auth/card-wrapper'

type Props = {}

const LoginForm = () => {
	return (
		<CardWrapper
			headerLabel='Welcome Back'
			backButtonLabel="Don't have an account?"
			backButtonHref='/auth/register'
			showSocial
		>
			LoginForm
		</CardWrapper>
	)
}

export default LoginForm
