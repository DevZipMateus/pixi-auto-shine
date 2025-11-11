import { Target, Eye, Heart } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const values = [
    { icon: Target, title: "Missão", description: "Proporcionar cuidado, brilho e proteção aos veículos dos nossos clientes, oferecendo serviços de lavagem e estética automotiva com qualidade, agilidade e atenção aos detalhes, garantindo a satisfação e valorização de cada automóvel." },
    { icon: Eye, title: "Visão", description: "Ser a principal referência em estética automotiva da região, reconhecida pela qualidade dos serviços, atendimento diferenciado e compromisso com a excelência em cada detalhe." },
  ];

  const coreValues = [
    { title: "Qualidade", description: "Entregar sempre o melhor resultado em cada detalhe" },
    { title: "Confiança", description: "Construir relacionamentos baseados em transparência e respeito" },
    { title: "Inovação", description: "Estar em constante evolução, buscando novas técnicas" },
    { title: "Comprometimento", description: "Tratar cada veículo como se fosse nosso" },
    { title: "Satisfação do cliente", description: "Superar expectativas em cada atendimento" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">Sobre nós</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
              A Pires Lavagem nasceu em 22 de junho de 2024, criada por Felipe Pires com um propósito claro: 
              oferecer uma lavagem automotiva com qualidade, respeito e dedicação total ao cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
            {values.map((item, index) => (
              <div key={index} className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Nossos valores</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
              <img 
                src={aboutImage} 
                alt="Lavagem profissional de veículos" 
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
              "Mais do que limpar carros, a Pires Lavagem valoriza cada detalhe, cuidando de cada veículo como se fosse único. 
              Com atendimento atencioso, produtos de qualidade e paixão pelo que faz, a empresa se tornou sinônimo de confiança, 
              excelência e respeito."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
