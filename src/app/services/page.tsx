
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Zap, BookOpen, GraduationCap, Ship, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "NCAA Compliance and Certification Support",
      description: "Navigating the intricate landscape of Nigerian Civil Aviation Authority (NCAA) regulations is critical for any aviation-related infrastructure.",
      features: [
        "Aviation Height Clearance (AHC) Application Assistance",
        "Heliport Certificate Acquisition Support",
        "Aerodrome/Heliport Licensing Advisory",
        "Regulatory Liaison and Advocacy",
        "Compliance Audits and Gap Analysis"
      ]
    },
    {
      icon: Users,
      title: "Helipad Planning, Design and Certification",
      description: "A safe and compliant helipad is a strategic asset. We provide end-to-end consultancy for planning, design review, and certification.",
      features: [
        "Feasibility Studies and Site Selection",
        "Design Review and Compliance",
        "Heliport Manual Development",
        "Safety Management System (SMS) Implementation",
        "Emergency Response Plan (ERP) Development",
        "Pre-certification Inspection Readiness"
      ]
    },
    {
      icon: Zap,
      title: "General Surface Friction Testing",
      description: "Optimal surface friction is paramount for safety and performance across various industrial and commercial environments.",
      features: [
        "Aviation Surfaces (Helipads, Runways, Taxiways)",
        "Industrial and Commercial Floors",
        "Roads and Pavements",
        "Sports Surfaces",
        "Advanced CFME Testing Equipment",
        "Detailed Reporting and Recommendations"
      ]
    },
    {
      icon: BookOpen,
      title: "Aviation Safety and Operations Consulting",
      description: "Broader aviation safety and operational consulting to enhance overall safety culture and efficiency.",
      features: [
        "Safety Risk Assessments",
        "Safety Audits",
        "Operational Procedure Development",
        "Aviation Security Consulting",
        "Accident/Incident Investigation Support"
      ]
    },
    {
      icon: GraduationCap,
      title: "Training and Development",
      description: "A well-trained team is fundamental to safe and compliant operations. We provide specialized training programs.",
      features: [
        "Helicopter Landing Officer (HLO) Training",
        "Aviation Safety Awareness",
        "Emergency Procedures Training",
        "Friction Testing Equipment Operation"
      ]
    },
    {
      icon: Ship,
      title: "Vessel and Equipment Leasing",
      description: "Reliable and efficient leasing solutions for marine vessels and specialized equipment for maritime operations.",
      features: [
        "Barges (Flat-top, Deck, Spud barges)",
        "Tugboats / Tugs",
        "Workboats / Utility Vessels",
        "Houseboats / Accommodation Barges",
        "Specialized Equipment",
        "Flexible Terms and Competitive Pricing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Comprehensive solutions for aviation compliance, safety management, and surface testing
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Aviation & Safety Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From regulatory compliance to hands-on training, we provide the expertise you need for safe, compliant operations
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className={`border-0 shadow-lg overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:flex">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <Link href="/quote">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12 bg-gray-50">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference of working with true aviation and safety experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-lg font-semibold mb-2">Years Experience</div>
              <div className="text-gray-300">Deep industry knowledge and regulatory expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-lg font-semibold mb-2">Compliance Rate</div>
              <div className="text-gray-300">Perfect track record of successful certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-lg font-semibold mb-2">Support</div>
              <div className="text-gray-300">Dedicated client support throughout projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-lg font-semibold mb-2">Satisfied Clients</div>
              <div className="text-gray-300">Trusted by leading organizations across Nigeria</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-service-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your specific needs and learn how we can help ensure your project's success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Request a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;