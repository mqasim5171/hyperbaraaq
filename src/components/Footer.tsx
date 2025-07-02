import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-xl font-bold">
                <span className="text-cyan-primary">H</span>
                <span className="text-white">YPER</span>
              </div>
              <div className="text-cyan-primary text-lg font-semibold">BARAAQ</div>
            </div>
            <p className="text-gray-300">
              Empowering businesses through innovative AI solutions. We transform ideas into intelligent reality.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/hyperbaraaq"
                target="_blank"
                className="hover:text-cyan-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/hyperbaraaq/"
                target="_blank"
                className="hover:text-cyan-primary transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-cyan-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-cyan-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-gray-300 hover:text-cyan-primary transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-300 hover:text-cyan-primary transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-cyan-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-cyan-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/ai-development"
                  className="text-gray-300 hover:text-cyan-primary transition-colors"
                >
                  AI Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/machine-learning"
                  className="text-gray-300 hover:text-cyan-primary transition-colors"
                >
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/computer-vision"
                  className="text-gray-300 hover:text-cyan-primary transition-colors"
                >
                  Computer Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/services/nlp"
                  className="text-gray-300 hover:text-cyan-primary transition-colors"
                >
                  Natural Language Processing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-gray-300 hover:text-cyan-primary transition-colors"
                >
                  AI Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-cyan-primary font-medium">Address:</span>
                <span className="text-gray-300">Sector I-10 Islamabad</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-cyan-primary font-medium">Email:</span>
                <Link
                  href="mailto:info@hyperbaraaq.com"
                  className="text-gray-300 hover:text-cyan-primary transition-colors"
                >
                  info@hyperbaraaq.com
                </Link>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-cyan-primary font-medium">Hours:</span>
                <span className="text-gray-300">Mon - Fri: 11:00 AM - 08:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Hyper Baraaq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
