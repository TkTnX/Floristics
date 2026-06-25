import { axiosInstance } from "@/shared/lib"

export async function getFlowers() {
    const { data } = await axiosInstance.get('flowers')

    return data

}