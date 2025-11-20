export const WHATSAPP_NUMBER = '919876543210';

export const generateWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const packageInquiryMessage = (packageName: string, packageId: string): string => {
  return `Hello! I'm interested in the "${packageName}" package (ID: ${packageId}). Could you please provide more details and help me with the booking?`;
};

export const generalInquiryMessage = (): string => {
  return `Hello! I would like to inquire about tour packages to Himachal Pradesh. Could you please help me?`;
};

export const customPackageMessage = (destination: string): string => {
  return `Hello! I'm interested in a customized tour package to ${destination}. Could you please help me plan my trip?`;
};

export const activityInquiryMessage = (activityName: string): string => {
  return `Hello! I'm interested in ${activityName} activity. Could you provide more details about pricing, availability, and booking?`;
};

export const contactMessage = (name: string, destination: string, numberOfPeople: number, travelDates: string): string => {
  return `Hello! My name is ${name}. I'm planning a trip to ${destination} for ${numberOfPeople} people. Tentative travel dates: ${travelDates}. Please help me with package options.`;
};
