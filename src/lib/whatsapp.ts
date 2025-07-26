/**
 * Function to generate a WhatsApp message link with purchase details
 * @param productName Name of the product being purchased
 * @param quantity Quantity of the product
 * @param price Total price in COP
 * @returns WhatsApp URL that opens a chat with a pre-filled message
 */
export function generateWhatsAppLink(productName: string, quantity: number, price: string): string {
  // WhatsApp number with country code (57 for Colombia + phone number)
  const phoneNumber = "573145287412";  // Client's WhatsApp number
  
  // Create the message with purchase details
  const message = encodeURIComponent(
    `Hola, quiero comprar ${quantity} ${productName} por ${price}.`
  );
  
  // Return the WhatsApp URL
  return `https://wa.me/${phoneNumber}?text=${message}`;
}