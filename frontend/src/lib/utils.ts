import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// put any custom utility functions below

export function extractErrorMessage(error) {
  return error.response?.data?.message || error.message || error.toString();
}
