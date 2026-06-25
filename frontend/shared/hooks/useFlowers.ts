import { getFlowers } from "@/shared/api";
import { IFlower } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

export function useFlowers() {
    const useFlowersQuery = () => useQuery({
        queryKey: ['flowers'],
        queryFn: (): Promise<IFlower[]> => getFlowers()
    })

    return {
        useFlowersQuery
    }
}