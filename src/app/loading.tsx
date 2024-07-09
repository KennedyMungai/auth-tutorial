import Image from 'next/image'

const LoadingPage = () => {
	return (
		<div className='bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-500 flex items-center justify-center h-full'>
			<Image src='/logo.png' width={60} height={60} alt='Logo' />
		</div>
	)
}

export default LoadingPage
