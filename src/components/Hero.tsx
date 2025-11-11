import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-white">Desde 22 de junho de 2024</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg px-2">
            Pires Lavagem e Estética Automotiva
          </h1>
          
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed drop-shadow-md px-4">
            Qualidade, respeito e dedicação em cada detalhe do seu veículo
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto drop-shadow-md px-4">
            Oferecemos serviços completos de lavagem e estética automotiva com atendimento personalizado. 
            Seu carro recebe o cuidado que merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto" asChild>
              <a href="https://wa.me/5555997301745" target="_blank" rel="noopener noreferrer">
                Agendar serviço
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto bg-white/10 text-white border-white/60 hover:bg-white hover:text-black hover:border-white backdrop-blur-sm"
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
