import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
	return (
		<input
			type={type}
			data-slot='input'
			className={cn(
				' px-5 placeholder:text-muted-foreground outline-none disabled:bg-input/50  dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 h-15 w-full min-w-0 rounded-full  bg-white  py-5 text-sm file:bg-transparent file:text-sm file:font-medium placeholder:text-sm placeholder:font-light disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
				className
			)}
			{...props}
		/>
	)
}

export { Input }
