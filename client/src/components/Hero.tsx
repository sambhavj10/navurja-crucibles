import { Button } from '@/components/ui/button';
// Hero uses a self-contained dark gradient. To use a photo (e.g. a CZ furnace /
// quartz crucible shot), import it here and add `url(${heroImage})` to backgroundImage. See IMAGES.md.

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(18, 179, 166, 0.22), transparent 55%), linear-gradient(160deg, #0b1220 0%, #0d2b23 55%, #06160f 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto text-white">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          data-testid="hero-headline"
        >
          Building Blocks of India's Clean Energy Superpower
        </h1>
        
        <p 
          className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          data-testid="hero-subheadline"
        >
          Global-grade manufacturer of high-purity fused quartz crucibles for monocrystalline silicon ingot pulling (Czochralski process)
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('#products')}
            className="bg-gradient-to-r from-primary to-chart-2 text-white font-semibold px-8 py-3 text-lg hover:scale-105 transition-transform"
            data-testid="button-explore-products"
          >
            Explore Products
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('#contact')}
            className="border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm bg-white/10 font-semibold px-8 py-3 text-lg hover:scale-105 transition-transform"
            data-testid="button-contact-sales-hero"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}