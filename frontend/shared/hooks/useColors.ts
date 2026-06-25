import { getColors } from "@/shared/api";
import { IColor } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

export function useColors() {
    const useColorsQuery = () => useQuery({
        queryKey: ['colors'],
        queryFn: (): Promise<IColor[]> => getColors()
    })

    return {useColorsQuery}
}