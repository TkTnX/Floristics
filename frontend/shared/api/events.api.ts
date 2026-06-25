import { axiosInstance } from "@/shared/lib"

export async function getEvents() {
    const { data } = await axiosInstance.get('events')

    return data

}