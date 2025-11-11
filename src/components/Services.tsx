import { Droplets, Bike, Wrench, Sparkles, Shield, Sofa, Lightbulb, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesImage from "@/assets/services-image.jpg";
import detailWork from "@/assets/detail-work.jpg";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Lavagem completa com jet cera",
      description: "Limpeza profunda externa com aplicação de cera para proteção e brilho duradouro",
    },
    {
      icon: Bike,
      title: "Lavagem de motos",
      description: "Cuidado especializado para motocicletas, preservando cada detalhe",
    },
    {
      icon: Wrench,
      title: "Limpeza de motor",
      description: "Higienização completa do motor com produtos específicos e seguros",
    },
    {
      icon: Sparkles,
      title: "Revitalização de plásticos",
      description: "Restauração e proteção de para-choques e plásticos externos",
    },
    {
      icon: Shield,
      title: "Vitrificação",
      description: "Proteção de longa duração com revestimento cerâmico premium",
    },
    {
      icon: Sofa,
      title: "Limpeza de estofados",
      description: "Higienização profunda de bancos, carpetes e forros internos",
    },
    {
      icon: Lightbulb,
      title: "Revitalização de faróis",
      description: "Recuperação do brilho e transparência dos faróis",
    },
    {
      icon: MoreHorizontal,
      title: "E muito mais",
      description: "Consulte-nos para serviços personalizados e pacotes especiais",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">Nossos serviços</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Serviços completos de lavagem e estética automotiva com produtos de qualidade 
              e profissionais especializados
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/50 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8 sm:mb-10 md:mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={servicesImage} 
                alt="Interior de veículo limpo e detalhado" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={detailWork} 
                alt="Revitalização de faróis - antes e depois" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center bg-muted/30 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Precisa de um orçamento?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              Entre em contato conosco e solicite um orçamento personalizado para seu veículo. 
              Atendimento rápido e profissional.
            </p>
            <Button size="lg" asChild>
              <a href="https://wa.me/5555997301745" target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
