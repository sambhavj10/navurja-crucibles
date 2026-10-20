export default function Partners() {
  // Placeholder client/partner slots — replace with real customer or partner logos.
  // Drop logo files into attached_assets/, import them, and set `logoUrl` (see IMAGES.md).
  const partners = [
    { name: 'Ingot Manufacturer', id: 'partner-1', logoUrl: null },
    { name: 'Wafer Producer', id: 'partner-2', logoUrl: null },
    { name: 'Solar Cell Maker', id: 'partner-3', logoUrl: null },
  ];

  return (
    <section id="partners" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="partners-title"
          >
            Trusted Across the Solar Value Chain
          </h2>
          <p
            className="text-lg text-muted-foreground"
            data-testid="partners-description"
          >
            Supplying ingot and wafer manufacturers with mission-critical crucible quality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col items-center justify-center hover-elevate p-6 rounded-lg transition-all duration-300"
              data-testid={`partner-${partner.id}`}
            >
              <div className="w-full h-28 flex items-center justify-center rounded-lg border border-dashed border-border bg-muted/30">
                {partner.logoUrl ? (
                  <img
                    src={partner.logoUrl}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    data-testid={`partner-logo-${partner.id}`}
                  />
                ) : (
                  <span className="text-sm text-muted-foreground">{partner.name}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
