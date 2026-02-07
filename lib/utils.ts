import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {Time} from "lightweight-charts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertOHLCData(data: OHLCData[]) {
    return data
        .map((d) => ({
            time: d[0] as Time,
            open: d[1],
            high: d[2],
            low: d[3],
            close: d[4],
        }))
        .filter((item, index, arr) => index === 0 || item.time !== arr[index - 1].time);
}

export function formatCurrency(
    value: number | null | undefined,
    digits?: number,
    currency?: string,
    showSymbol?: boolean,
) {
    if (value === null || value === undefined || isNaN(value)) {
        return showSymbol !== false ? '$0.00' : '0.00';
    }

    if (showSymbol === undefined || showSymbol) {
        return value.toLocaleString(undefined, {
            style: 'currency',
            currency: currency?.toUpperCase() || 'USD',
            minimumFractionDigits: digits ?? 2,
            maximumFractionDigits: digits ?? 2,
        });
    }
    return value.toLocaleString(undefined, {
        minimumFractionDigits: digits ?? 2,
        maximumFractionDigits: digits ?? 2,
    });
}
