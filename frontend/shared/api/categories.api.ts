import { axiosInstance } from "@/shared/lib"
import { QueryType } from "@/shared/types"

export async function getCategories(query?: QueryType) {
    const { data } = await axiosInstance.get('categories', {params: query})

    return data
}

export async function getCategoryById(id: string) {
    const { data } = await axiosInstance.get(`categories/${id}`)

    return data
}