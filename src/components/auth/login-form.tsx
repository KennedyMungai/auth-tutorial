'use client'

import { login } from '@/actions/login'
import CardWrapper from '@/components/auth/card-wrapper'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot
} from '@/components/ui/input-otp'
import { loginSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const LoginForm = () => {
	const searchParams = useSearchParams()
	const urlError =
		searchParams.get('error') === 'OAuthAccountNotLinked'
			? 'Email Already in Use with a different provider'
			: ''

	const [error, setError] = useState<string | undefined>('')
	const [success, setSuccess] = useState<string | undefined>('')

	const [showTwoFactor, setShowTwoFactor] = useState(false)

	const [isPending, startTransition] = useTransition()

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = (values: z.infer<typeof loginSchema>) => {
		setError('')
		setSuccess('')

		startTransition(() => {
			login(values)
				.then((data) => {
					if (data?.error) {
						form.reset()
						setError(data.error)
					}

					if (data?.success) {
						form.reset()
						setSuccess(data.success)
					}

					if (data?.twoFactor) {
						setShowTwoFactor(true)
					}
				})
				.catch(() => {
					setError('Something went wong')
				})
		})
	}

	return (
		<CardWrapper
			headerLabel='Welcome Back'
			backButtonLabel="Don't have an account?"
			backButtonHref='/auth/register'
			showSocial
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-6'
				>
					<div className='space-y-4'>
						{!showTwoFactor && (
							<>
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder='john.doe@example.com'
													type='email'
													disabled={isPending}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='password'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input
													{...field}
													type='password'
													placeholder='********'
													disabled={isPending}
												/>
											</FormControl>
											<Link href='/auth/reset'>
												<Button
													size='sm'
													variant={'link'}
													className='px-0 font-normal'
												>
													Forgot Password?
												</Button>
											</Link>
											<FormMessage />
										</FormItem>
									)}
								/>
							</>
						)}
						{showTwoFactor && (
							<FormField
								control={form.control}
								name='code'
								render={({ field }) => (
									<FormItem>
										<FormLabel>2FA Code</FormLabel>
										<FormControl>
											<InputOTP
												maxLength={6}
												{...field}
												disabled={isPending}
											>
												<InputOTPGroup>
													<InputOTPSlot index={0} />
													<InputOTPSlot index={1} />
													<InputOTPSlot index={2} />
													<InputOTPSeparator />
													<InputOTPSlot index={3} />
													<InputOTPSlot index={4} />
													<InputOTPSlot index={5} />
												</InputOTPGroup>
											</InputOTP>
										</FormControl>
										<FormDescription>
											Please enter the 2FA code send to
											your email address
										</FormDescription>
									</FormItem>
								)}
							/>
						)}
					</div>
					<FormError message={error || urlError} />
					<FormSuccess message={success} />
					<Button
						className='w-full'
						type='submit'
						disabled={isPending}
					>
						{showTwoFactor ? 'Confirm' : 'Login'}
					</Button>
				</form>
			</Form>
		</CardWrapper>
	)
}

export default LoginForm
