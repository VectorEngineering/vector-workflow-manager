import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { parseError } from '@playbookmedia/observability/error'
import { toast } from 'sonner'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

export const handleError = (error: unknown): void => {
    const message = parseError(error)

    toast.error(message)
}
