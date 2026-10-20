import { MapPin, Award, Truck, Shield } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    {
      icon: <MapPin className="w-5 h-5" />,
      text: 'Made in India',
      id: 'made-in-india'
    },
    {
      icon: <Award className="w-5 h-5" />,
      text: '99.99%+ SiO₂ Purity',
      id: 'high-purity'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: 'ISO 9001 Certified',
      id: 'iso-9001'
    },
    {
      icon: <Truck className="w-5 h-5" />,
      text: 'Sizes 18" to 40"',
      id: 'size-range'
    }
  ];

  return (
    <section className="py-8 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div 
              key={item.id}
              className="flex items-center justify-center space-x-2 text-center"
              data-testid={`trust-${item.id}`}
            >
              <div className="text-primary">
                {item.icon}
              </div>
              <span className="text-sm md:text-base font-medium text-foreground">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}