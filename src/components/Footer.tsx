import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <img src={logo} alt="Pires Lavagem" className="h-24 w-auto" />
            <p className="text-sm text-secondary-foreground/80">
              Qualidade, respeito e dedicação em cada detalhe do seu veículo desde 2024.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("hero")}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  Rua General Neto - 60<br />
                  (anexo ao estacionamento Pare Aqui)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/5555997301745" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  (55) 99730-1745
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:piresrigon@gmail.com"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  piresrigon@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Horário</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  <p className="font-medium">Segunda a Sexta</p>
                  <p>8h às 12h e 13h30 às 18h</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  <p className="font-medium">Sábado</p>
                  <p>8h às 16h</p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/pires_lavagemautomotiva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors mt-4"
              >
                <Instagram className="w-4 h-4" />
                <span>@pires_lavagemautomotiva</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Pires Lavagem e Estética Automotiva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
