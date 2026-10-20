import jaksonSolarLogo from '@assets/jakson-solar-logo.png';

export default function Partners() {
  const partners = [
    {
      name: 'Jakson Solar',
      logoUrl: jaksonSolarLogo,
      id: 'jakson-solar',
      size: 'large'
    },
    {
      name: 'Supercircle',
      logoUrl: 'https://supercircle.com/media/logo.png',
      id: 'supercircle',
      size: 'small'
    }
  ];

  return (
    <section id="partners" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="partners-title"
          >
            Trusted by Industry Leaders
          </h2>
          <p
            className="text-lg text-muted-foreground"
            data-testid="partners-description"
          >
            Supplying ingot and wafer manufacturers with mission-critical crucible quality
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col items-center space-y-4 hover-elevate p-6 rounded-lg transition-all duration-300"
              data-testid={`partner-${partner.id}`}
            >
              {/* Partner Logo */}
              <div className={partner.size === 'large' ? "w-full max-w-[512px] h-40 sm:h-64 flex items-center justify-center p-4" : partner.size === 'medium' ? "w-full max-w-96 h-40 sm:h-48 flex items-center justify-center p-4" : "w-full max-w-64 h-32 flex items-center justify-center p-4"}>
                <img
                  src={partner.logoUrl}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  data-testid={`partner-logo-${partner.id}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
