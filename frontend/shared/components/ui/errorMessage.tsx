interface Props {
	message: Error
}

export const ErrorMessage = ({ message }: Props) => {
	console.log(message)
	return (
		<p className='my-5 text-center text-xl text-red-500'>
			{message.message}
		</p>
	)
}
