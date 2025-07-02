import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, Lightbulb, Users, TrendingUp, Eye, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI R&D",
    description: "Conducting research and development in cutting-edge AI fields to bring innovative solutions from the lab to the marketplace.",
    href: "/services/ai-development"
  },
  {
    icon: Lightbulb,
    title: "AI Development",
    description: "Custom development of AI applications tailored to specific business needs, including automation tools, intelligent systems, and advanced algorithms.",
    href: "/services/ai-development"
  },
  {
    icon: Users,
    title: "AI Training",
    description: "Offering training programs and workshops to help client teams understand and effectively use AI technologies within their operations.",
    href: "/services/ai-development"
  },
  {
    icon: TrendingUp,
    title: "Applied AI Consulting",
    description: "Providing expert guidance on AI strategy, implementation, and optimization to help industries leverage AI for competitive advantage.",
    href: "/services/generative-ai"
  },
  {
    icon: Eye,
    title: "Predictive Analysis",
    description: "Utilizing data, statistical algorithms, and machine learning techniques to identify the likelihood of future outcomes, enhancing decision-making across business functions.",
    href: "/services/predictive-analysis"
  },
  {
    icon: MessageSquare,
    title: "Data Engineering & Analytics",
    description: "Designing and building pipelines for data collection, integration, cleansing, and analysis to support data-driven decision-making.",
    href: "/services/data-science"
  }
];

const benefitStats = [
  {
    number: "75%",
    label: "of executives believe AI helps improve decisions-making and provides competitive advantage."
  },
  {
    number: "45%",
    label: "of activities in various industries can be automated with the help of AI."
  },
  {
    number: "72%",
    label: "of customers expect personalized engagement from business than can be reached with the help of AI."
  },
  {
    number: "40%",
    label: "reduction in financial losses among organizations that use AI for fraud detection."
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="REDEFINING"
        subtitle="BUSINESS WITH AI"
        description="Transform your business with cutting-edge AI solutions. Experience innovation that drives results."
        primaryButton={{
          text: "SCHEDULE A CALL",
          href: "/contact"
        }}
        secondaryButton={{
          text: "BOOK AN APPOINTMENT",
          href: "/contact"
        }}
      />

      {/* Stats Section */}
      <StatsSection />

      {/* Trusted Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-cyan-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Our Trusted Partners
          </p>
          <h2 className="section-title mb-12">
            Trusted by <span className="text-cyan-primary">World's Best</span> Teams
          </h2>

          {/* Partner logos - placeholder for now */}
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-600 text-sm">Company 1</span>
            </div>
            <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-600 text-sm">Company 2</span>
            </div>
            <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-600 text-sm">Company 3</span>
            </div>
            <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-600 text-sm">Company 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Results */}
      <section className="bg-navy-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title text-white mb-4">
            Beneficial <span className="text-cyan-primary">results</span> of artificial intelligence
          </h2>
          <p className="text-white text-xl mb-16">
            services and solutions in business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number text-cyan-primary mb-4">
                  {stat.number}
                </div>
                <p className="text-white/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Artificial Intelligence
            </h2>
            <h3 className="text-3xl font-bold text-cyan-primary mb-6">
              Services and Solutions
            </h3>
            <p className="text-xl text-gray-600">
              to help you <span className="text-cyan-primary">unlock</span> greater value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="service-icon mb-6">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-navy-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link href={service.href}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-navy-primary hover:text-cyan-primary"
                    >
                      <div className="w-10 h-10 rounded-full bg-navy-primary text-white flex items-center justify-center">
                        →
                      </div>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title mb-6">
            Let's Build Something
          </h2>
          <h3 className="text-3xl font-bold text-cyan-primary mb-8">
            Extraordinary Together
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Ready to transform your business with AI? Share your vision with us, and we'll help bring it to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-cyan-primary font-semibold mb-2">Email</div>
              <Link
                href="mailto:info@hyperbaraaq.com"
                className="text-gray-600 hover:text-cyan-primary transition-colors"
              >
                info@hyperbaraaq.com
              </Link>
            </div>
            <div className="text-center">
              <div className="text-cyan-primary font-semibold mb-2">Address</div>
              <p className="text-gray-600">Sector I-10 Islamabad</p>
            </div>
            <div className="text-center">
              <div className="text-cyan-primary font-semibold mb-2">Working Hours</div>
              <p className="text-gray-600">
                Mon - Fri: 11:00 AM - 08:00 PM<br />
                Closed on Weekends
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
