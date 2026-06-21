import * as z from 'zod'
export const registerSchema = z.object({
    email: z.email().optional(),
    password: z.string(),
    fio: z.string(),
    phone: z.string(),
})
export const loginSchema = z.object({
    phone: z.string(),
    password: z.string(),
})

export type IRegisterSchema = z.infer<typeof registerSchema>
export type ILoginSchema = z.infer<typeof loginSchema>