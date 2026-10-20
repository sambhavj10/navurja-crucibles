import { Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p 
              className="text-sm"
              data-testid="footer-copyright"
            >
              © {currentYear} Navurja
            </p>
            <span className="hidden md:inline text-gray-400">•</span>
            <a
              href="https://www.navurja.com"
              className="text-sm text-gray-300 hover:text-white transition-colors"
              data-testid="footer-website"
            >
              navurja.com
            </a>
            <span className="hidden md:inline text-gray-400">•</span>
            <p 
              className="text-sm text-gray-300"
              data-testid="footer-location"
            >
              India
            </p>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/company/nayurja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}