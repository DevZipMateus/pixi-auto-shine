import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

import midia1 from "@/assets/gallery/midia-1.jpg";
import midia2 from "@/assets/gallery/midia-2.jpg";
import midia3 from "@/assets/gallery/midia-3.jpg";
import midia4 from "@/assets/gallery/midia-4.jpg";
import midia5 from "@/assets/gallery/midia-5.jpg";
import midia6 from "@/assets/gallery/midia-6.jpg";
import midia7 from "@/assets/gallery/midia-7.jpg";
import midia8 from "@/assets/gallery/midia-8.jpg";
import midia9 from "@/assets/gallery/midia-9.jpg";
import midia10 from "@/assets/gallery/midia-10.jpg";
import midia11 from "@/assets/gallery/midia-11.jpg";

const images = [
  { src: midia1, alt: "Detalhe de farol revitalizado" },
  { src: midia2, alt: "Restauração de farol" },
  { src: midia3, alt: "Carro completo após lavagem" },
  { src: midia4, alt: "Motor limpo" },
  { src: midia5, alt: "Limpeza detalhada de motor" },
  { src: midia6, alt: "Jet ski após lavagem" },
  { src: midia7, alt: "Detalhe de moto" },
  { src: midia8, alt: "Carro novo após lavagem" },
  { src: midia9, alt: "SUV branco limpo" },
  { src: midia10, alt: "Motor detalhado" },
  { src: midia11, alt: "Caminhonete antes e depois da lavagem" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Nossos trabalhos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Confira alguns dos nossos trabalhos e veja a qualidade dos nossos serviços
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover"
                        onClick={() => setSelectedImage(image.src)}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12" />
          <CarouselNext className="right-0 md:-right-12" />
        </Carousel>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagem expandida"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
