import { Droplets, Bike, Wrench, Sparkles, Shield, Sofa, Lightbulb, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Nossos serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serviços completos de lavagem e estética automotiva com produtos de qualidade 
              e profissionais especializados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/50 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Precisa de um orçamento?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
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
