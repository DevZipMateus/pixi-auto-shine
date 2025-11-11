import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Desde 22 de junho de 2024</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Pires Lavagem e Estética Automotiva
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Qualidade, respeito e dedicação em cada detalhe do seu veículo
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Oferecemos serviços completos de lavagem e estética automotiva com atendimento personalizado. 
            Seu carro recebe o cuidado que merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/5555997301745" target="_blank" rel="noopener noreferrer">
                Agendar serviço
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 bg-background/50 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              Ver serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
