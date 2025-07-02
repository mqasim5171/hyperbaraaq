"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const serviceLinks = [
  { title: "AI Development", href: "/services/ai-development" },
  { title: "Machine Learning", href: "/services/machine-learning" },
  { title: "NLP", href: "/services/nlp" },
  { title: "Computer Vision", href: "/services/computer-vision" },
  { title: "ChatBot Development", href: "/services/chatbot" },
  { title: "Generative AI", href: "/services/generative-ai" },
  { title: "Predictive Analysis", href: "/services/predictive-analysis" },
  { title: "Data Science", href: "/services/data-science" },
  { title: "Custom AI Software", href: "/services/custom-software" },
  { title: "UI/UX Design", href: "/services/ui-ux" },
  { title: "Digital Transformation", href: "/services/digital-transformation" },
];

const industryLinks = [
  { title: "Energy & Utilities", href: "/industries/energy-utilities" },
  { title: "Technology", href: "/industries/technology" },
  { title: "Healthcare", href: "/industries/healthcare" },
  { title: "Automotive Services", href: "/industries/automotive" },
  { title: "Education Services", href: "/industries/education" },
  { title: "Agriculture Services", href: "/industries/agriculture" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between glass-nav text-white rounded-full shadow-lg px-8 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-cyan-primary">H</span>
                <span className="text-white">YPER</span>
              </div>
              <div className="text-cyan-primary text-lg font-semibold">BARAAQ</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="hover:text-cyan-primary transition-colors"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-cyan-primary transition-colors">
                <Link href="/services">Services</Link>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 rounded-xl bg-white shadow-lg border-0 mt-2">
                <div className="p-4 space-y-2">
                  {serviceLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        {link.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Industries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-cyan-primary transition-colors">
                <Link href="/industries">Industries</Link>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 rounded-xl bg-white shadow-lg border-0 mt-2">
                <div className="p-4 space-y-2">
                  {industryLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        {link.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/blogs"
              className="hover:text-cyan-primary transition-colors"
            >
              Blogs
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-primary rounded-full px-8"
              >
                CONTACT US
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white p-2"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-navy-primary text-white border-0">
                <div className="flex flex-col space-y-6 mt-8">
                  <Link
                    href="/about"
                    className="text-lg hover:text-cyan-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>

                  <div className="space-y-4">
                    <Link
                      href="/services"
                      className="text-lg hover:text-cyan-primary transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Link>
                    <div className="pl-4 space-y-3">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block text-gray-300 hover:text-cyan-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link
                      href="/industries"
                      className="text-lg hover:text-cyan-primary transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      Industries
                    </Link>
                    <div className="pl-4 space-y-3">
                      {industryLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block text-gray-300 hover:text-cyan-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/blogs"
                    className="text-lg hover:text-cyan-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Blogs
                  </Link>

                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-2 border-cyan-primary text-cyan-primary hover:bg-cyan-primary hover:text-white rounded-full"
                    >
                      CONTACT US
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
