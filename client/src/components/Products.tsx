import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import czImage from '@assets/crucible-cz.png';
import opaqueImage from '@assets/crucible-opaque.png';
import labImage from '@assets/crucible-lab.webp';

export default function Products() {

  const products = [
    {
      id: 'cz-crucible',
      title: 'High-Purity Fused Quartz Czochralski Crucibles',
      subtitle: 'For monocrystalline silicon growth (CZ process)',
      description: '',
      image: czImage,
      features: [
        'Sizes: 14" to 40" diameter',
        'Purity: SiO₂ ≥ 99.99%',
        'Three-layer wall: bubble-free transparent inner, opaque insulating outer',
        'Service temperature up to ~1600 °C'
      ],
      ctaText: 'Request Datasheet',
      ctaIcon: <FileText className="w-4 h-4" />
    },
    {
      id: 'opaque-crucible',
      title: 'Opaque Fused Quartz Crucibles',
      subtitle: 'For material melting & high-temperature testing',
      description: '',
      image: opaqueImage,
      features: [
        'Opaque milky wall for uniform heating & thermal insulation',
        'Working temperature up to ~1200 °C (softening ~1650 °C)',
        'Excellent thermal-shock resistance',
        'Custom shapes & sizes available'
      ],
      ctaText: 'Request Datasheet',
      ctaIcon: <FileText className="w-4 h-4" />
    },
    {
      id: 'lab-crucible',
      title: 'Cylindrical Transparent Quartz Crucibles',
      subtitle: 'For laboratory & material analysis',
      description: '',
      image: labImage,
      features: [
        'High transparency, high-purity fused silica',
        'Continuous working temperature up to ~1100 °C',
        'Chemical inertness & low thermal expansion',
        'Custom diameters, heights & optional lid'
      ],
      ctaText: 'Request Datasheet',
      ctaIcon: <FileText className="w-4 h-4" />
    },
  ];


  return (
    <section id="products" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="products-title"
          >
            Range of High-Purity Quartz Crucibles
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="products-description"
          >
            Precision fused quartz crucibles for Czochralski monocrystalline silicon ingot pulling — the critical consumable behind every solar wafer. Engineered for high purity, low bubble content, and long crystal-growth run life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover-elevate transition-all duration-300 max-w-md w-full"
              data-testid={`product-card-${product.id}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  data-testid={`product-image-${product.id}`}
                />
              </div>
              
              <CardHeader>
                <CardTitle 
                  className="text-xl font-semibold"
                  data-testid={`product-title-${product.id}`}
                >
                  {product.title}
                </CardTitle>
                <CardDescription data-testid={`product-subtitle-${product.id}`}>
                  {product.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p 
                  className="text-muted-foreground mb-4"
                  data-testid={`product-description-${product.id}`}
                >
                  {product.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div data-testid={`product-features-${product.id}`}>
                    {product.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-start space-x-2 text-sm"
                        data-testid={`product-feature-${product.id}-${index}`}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-chart-2"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  data-testid={`product-cta-${product.id}`}
                >
                  {product.ctaIcon}
                  {product.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}