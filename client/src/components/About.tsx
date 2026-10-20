import { Card, CardContent } from '@/components/ui/card';
import { Gem, FlaskConical, BadgeIndianRupee, Flag } from 'lucide-react';

export default function About() {
  const capabilities = [
    {
      icon: <Gem className="w-8 h-8" />,
      title: 'High-Purity Quartz',
      description: '99.99%+ SiO₂ for defect-free monocrystalline growth',
      id: 'high-purity'
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'Advanced Fusing Technology',
      description: 'Precision-fused crucibles engineered for long CZ run life',
      id: 'fusing-tech'
    },
    {
      icon: <BadgeIndianRupee className="w-8 h-8" />,
      title: 'Best Price Guarantee',
      description: 'Domestic reliability at globally competitive rates',
      id: 'best-price'
    },
    {
      icon: <Flag className="w-8 h-8" />,
      title: 'Made In India',
      description: 'Reduce import dependence and shorten lead times',
      id: 'made-in-india'
    }
  ];

  return (
    <section id="about" className="py-16 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-testid="about-title"
          >
            Secure Your Supply
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            data-testid="about-description"
          >
At Navurja, our high-purity quartz crucible lines are scaling fast to meet surging demand from India's ingot and wafer manufacturers. As the industry shifts to N-type and large-format G12 production, consistent crucible supply has become mission-critical to uninterrupted ingot pulling. For a limited time only, we are offering strategic partners dedicated production capacity and fixed pricing. Secure your crucible supply chain today for reliable inventory and stable rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability) => (
            <Card 
              key={capability.id}
              className="text-center hover-elevate transition-all duration-300"
              data-testid={`capability-card-${capability.id}`}
            >
              <CardContent className="p-6">
                <div 
                  className="text-primary mb-4 flex justify-center"
                  data-testid={`capability-icon-${capability.id}`}
                >
                  {capability.icon}
                </div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  data-testid={`capability-title-${capability.id}`}
                >
                  {capability.title}
                </h3>
                <p 
                  className="text-sm text-muted-foreground"
                  data-testid={`capability-description-${capability.id}`}
                >
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}