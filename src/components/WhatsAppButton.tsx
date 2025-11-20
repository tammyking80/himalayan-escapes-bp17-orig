import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink, generalInquiryMessage } from '../utils/whatsapp';

const WhatsAppButton = () => {
  return (
    <a
      href={generateWhatsAppLink(generalInquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-pulse" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
    </a>
  );
};

export default WhatsAppButton;
