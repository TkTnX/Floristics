import * as z from 'zod'
export const reviewSchema = z.object({
    rating: z.number('Рейтинг должен быть числом').min(1, 'Рейтинг не может быть меньше 1').max(5, 'Рейтинг не может быть больше 5').int('Рейтинг должен быть целым числом'),
    fio: z.string('ФИО должно быть строкой'),
    text: z.string('Текст должен быть строкой'),
    images: z.any().optional(),
})

export type IReviewSchema = z.infer<typeof reviewSchema>
