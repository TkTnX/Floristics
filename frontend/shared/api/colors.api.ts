import { axiosInstance } from "@/shared/lib"

export async function getColors() {
    const { data } = await axiosInstance.get('colors')

    return data

}