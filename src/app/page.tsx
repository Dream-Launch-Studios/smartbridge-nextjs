import Gradients from "@/components/gradients";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import { CTASection } from "@/components/CTASection";
import BookCall from "@/components/book-call";
import { PricingCards } from "@/components/pricing";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Gradients />
      <Navbar />
      <div className="relative overflow-y-hidden">
        <Hero />
      </div>
      <main className="flex-1">
        <Features />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PricingCards />
          <BookCall />
          <FAQ />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
