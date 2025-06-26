import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, CheckCircle, Star, Users, Zap, Plane, Building2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
   <div className="min-h-screen bg-white satoshi">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-gray-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gray-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Orange Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Floating Icons */}
            <div className="absolute top-10 left-10 opacity-20 animate-bounce">
              <Plane className="h-12 w-12 text-orange-400" />
            </div>
            <div className="absolute top-20 right-10 opacity-20 animate-bounce delay-500">
              <Building2 className="h-10 w-10 text-gray-400" />
            </div>
            <div className="absolute bottom-20 left-20 opacity-20 animate-bounce delay-1000">
              <Shield className="h-11 w-11 text-orange-400" />
            </div>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Nigeria's Premier Aviation Compliance Partner
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-8 animate-fade-in">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Your Trusted Partner for
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-slide-up">
                Aviation Compliance
              </span>
              <br />
              <span className="text-gray-300 text-4xl md:text-5xl animate-slide-up delay-200">
                and Surface Safety in Nigeria
              </span>
            </h1>
            
            <div className="relative">
              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-300">
                Ensuring Seamless <span className="text-orange-400 font-semibold">NCAA Certification</span>, 
                <span className="text-orange-400 font-semibold"> Helipad Excellence</span>, and 
                <span className="text-orange-400 font-semibold"> Optimal Surface Performance</span>
              </p>
              
              {/* Decorative line */}
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-12 rounded-full animate-slide-up delay-400"></div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-500">
              <Link href="/quote">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-gray-900/50 transition-all duration-300 hover:border-orange-500"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 animate-fade-in delay-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span className="text-sm">NCAA Certified Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span className="text-sm">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span className="text-sm">ICAO Standards Compliant</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Fade */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div> */}
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500/20 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Navigating Complex Aviation Regulations
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Navigating the complexities of aviation regulations and ensuring critical surface safety demands specialized expertise. Without it, your projects face delays, non-compliance risks, and potential operational hazards.
              </p>
              <div className="flex items-center text-red-600 mb-6">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                <span className="font-medium">Project delays and compliance risks</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500/20 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">EJEGIS LTD.</span> Bridges This Gap
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We provide the expert guidance and precise analysis you need to achieve full NCAA compliance, certify your aviation infrastructure, and guarantee the safety of your critical surfaces.
              </p>
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-3" />
                <span className="font-medium">Seamless compliance and safety assurance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Key Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for aviation compliance and surface safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Shield className="h-6 w-6 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Aviation Compliance and Certification
                </h3>
                <p className="text-gray-600 mb-6">
                  Seamlessly achieve NCAA approvals for your aviation projects, from Aviation Height Clearance to full Heliport Certification.
                </p>
                <Link href="/services">
                  <Button variant="outline" className="group-hover:bg-orange-600 group-hover:text-white border-orange-600 text-orange-600">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Users className="h-6 w-6 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Helipad Planning and Certification
                </h3>
                <p className="text-gray-600 mb-6">
                  Expert guidance for safe, compliant, and efficient helipads on high-rises and ground facilities.
                </p>
                <Link href="/services">
                  <Button variant="outline" className="group-hover:bg-orange-600 group-hover:text-white border-orange-600 text-orange-600">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Zap className="h-6 w-6 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  General Surface Friction Testing
                </h3>
                <p className="text-gray-600 mb-6">
                  Precise friction analysis for runways, helipads, industrial floors, and more, ensuring optimal safety and performance.
                </p>
                <Link href="/services">
                  <Button variant="outline" className="group-hover:bg-orange-600 group-hover:text-white border-orange-600 text-orange-600">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-service-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EJEGIS LTD.?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Unmatched NCAA Expertise",
                description: "Deep understanding of Nigerian Civil Aviation Regulations and established liaison experience."
              },
              {
                title: "Holistic Solutions",
                description: "From initial feasibility to final certification and ongoing safety management, we cover every angle."
              },
              {
                title: "Precision and Reliability",
                description: "Utilizing advanced methodologies and equipment for accurate assessments and lasting results."
              },
              {
                title: "Client-Centric Approach",
                description: "Dedicated support, clear communication, and tailored solutions for your unique project needs."
              },
              {
                title: "Commitment to Safety",
                description: "Our core mission is to enhance safety standards across all aviation and industrial environments."
              },
              {
                title: "Local Expertise, Global Standards",
                description: "Deeply rooted in Nigerian regulations while aligning with international best practices (ICAO, ASTM)."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about working with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "EJEGIS LTD.'s expertise was invaluable in securing our helipad certification. Their guidance simplified a complex process."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Client Name</div>
                    <div className="text-gray-600">Company Name</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The friction testing provided by EJEGIS LTD. gave us critical insights into our industrial floor's safety performance."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Client Name</div>
                    <div className="text-gray-600">Company Name</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      <Footer />
    </div>
  );
}