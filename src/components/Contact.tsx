import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(55) 99730-1745",
      link: "https://wa.me/5555997301745",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "piresrigon@gmail.com",
      link: "mailto:piresrigon@gmail.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua General Neto - 60 (em anexo ao estacionamento pare aqui)",
      link: "https://maps.google.com/?q=Rua+General+Neto+60",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@pires_lavagemautomotiva",
      link: "https://www.instagram.com/pires_lavagemautomotiva?igsh=MXRrM29rZXN3NHNo",
    },
  ];

  const hours = [
    { day: "Segunda a sexta", time: "8h às 12h e 13h30 às 18h" },
    { day: "Sábado", time: "8h às 16h" },
    { day: "Domingo", time: "Fechado" },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">Entre em contato</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Estamos prontos para atender você e cuidar do seu veículo com excelência
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all group border border-border hover:border-primary/50"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold mb-1 text-sm sm:text-base text-foreground">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground break-words">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Horário de funcionamento</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {hours.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 pb-3 sm:pb-4 border-b border-border last:border-0">
                    <span className="font-medium text-sm sm:text-base text-foreground">{item.day}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8">
                <Button size="lg" className="w-full text-sm sm:text-base" asChild>
                  <a href="https://wa.me/5555997301745" target="_blank" rel="noopener noreferrer">
                    Agendar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.8!2d-53.56!3d-30.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA5JzM2LjAiUyA1M8KwMzMnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="300"
              className="sm:h-[350px] md:h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Pires Lavagem"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
