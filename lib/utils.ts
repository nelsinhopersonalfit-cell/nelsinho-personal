import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper padrão para classes condicionais com Tailwind
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
