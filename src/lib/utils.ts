import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns";

// Adiciona suporte ao formato brasileiro para datas
export function parsePTDate(dateString: string) {
  try {
    // Converte para o formato dd/MM/yyyy
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return "";
    return format(d, "dd/MM/yyyy");
  } catch {
    return "";
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
