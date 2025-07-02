import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  backgroundClass?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  backgroundClass = "hero-gradient"
}: HeroSectionProps) {
  return (
    <section className={`relative ${backgroundClass} pt-40 pb-24`}>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          {title}
          {subtitle && (
            <>
              <br />
              <span className="gradient-text">{subtitle}</span>
            </>
          )}
        </h1>

        {description && (
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            {description}
          </p>
        )}

        {(primaryButton || secondaryButton) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryButton && (
              <Link href={primaryButton.href}>
                <Button
                  size="lg"
                  className="bg-cyan-primary hover:bg-cyan-primary/90 text-white rounded-full px-8 py-3 text-lg font-semibold"
                >
                  {primaryButton.text}
                </Button>
              </Link>
            )}

            {secondaryButton && (
              <Link href={secondaryButton.href}>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-primary rounded-full px-8 py-3 text-lg font-semibold"
                >
                  {secondaryButton.text}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Background pattern/decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-primary/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-primary/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-primary/10 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}
