import { Button } from '@/components/ui/button';

export default function BottomHero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-chart-2 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          data-testid="bottom-hero-title"
        >
          Powering clean energy innovation through quality excellence
        </h2>
        
        <p 
          className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto"
          data-testid="bottom-hero-subtitle"
        >
          Ready to partner with us?
        </p>
        
        <Button 
          size="lg"
          variant="outline"
          onClick={scrollToContact}
          className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10 font-semibold px-8 py-3 text-lg hover:scale-105 transition-transform"
          data-testid="button-talk-to-us"
        >
          Talk to Us
        </Button>
      </div>
    </section>
  );
}