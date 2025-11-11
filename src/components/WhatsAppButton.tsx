import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5555997301745"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>
  );
};

export default WhatsAppButton;
