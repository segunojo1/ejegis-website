import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Testimonial from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white satoshi">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonial />

      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Take the first step toward seamless compliance and enhanced safety. Our experts are ready to help you navigate the complexities of aviation regulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-white text-orange-900 hover:bg-gray-100">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-orange-900 text-white hover:bg-white bg-orange-900 hover:text-orange-900">
                View Our Full Range of Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}