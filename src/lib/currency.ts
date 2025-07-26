// Exchange rate from USD to COP (Colombian Peso)
// This would typically be fetched from an API in a production environment
export const USD_TO_COP = 4000;

/**
 * Format a price in USD to Colombian Pesos (COP)
 * @param price Price in USD
 * @returns Formatted price in COP
 */
export function formatPriceToCOP(price: number): string {
  const copPrice = price * USD_TO_COP;
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(copPrice);
}