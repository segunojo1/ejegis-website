
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award, Shield, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded on the principle of elevating aviation and industrial safety standards in Nigeria, EJEGIS LTD. emerged from a recognized need for specialized, compliant, and reliable consultation services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We saw the growing demand for modern infrastructure, particularly high-rise helipads, and safe operational surfaces, and understood the intricate regulatory landscape clients often struggled to navigate.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to bridge this gap, offering expert guidance and practical solutions that prioritize safety, efficiency, and regulatory adherence.
              </p>
            </div>
            <div className="bg-service-gradient p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
                  <div className="text-gray-600">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg h-full">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading and most trusted aviation and surface safety consultancy in Nigeria, contributing significantly to a safer and more efficient operational environment across various industries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg h-full">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide comprehensive, client-focused aviation consultancy and specialized surface friction testing services, ensuring strict compliance with local and international standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg h-full">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Integrity, Excellence, Safety First, Client Focus, and Innovation guide everything we do, ensuring exceptional results and lasting relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified aviation experts, seasoned engineers, and regulatory specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Ekpoanwan Inyang</h3>
                    <p className="text-blue-600 font-medium">Lead Consultant</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  A seasoned aviation professional with 15+ years of experience in regulatory compliance and safety management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">QMS ISO 009 Certified</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ICAO Certified</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Our team comprises certified aviation experts, seasoned engineers, and regulatory specialists, complemented by a network of trusted industry partners, ensuring unparalleled expertise for every project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Certified Professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Industry Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Regulatory Expertise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Global Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Makes Us Different</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Expertise, Global Standards</h3>
              <p className="text-gray-300">
                Deeply rooted in Nigerian regulations while aligning with international best practices (ICAO, ASTM).
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Holistic Solutions</h3>
              <p className="text-gray-300">
                End-to-end guidance from initial concept through design review, testing, documentation, and final certification.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proactive Problem Solving</h3>
              <p className="text-gray-300">
                Identifying potential compliance and safety issues early, providing pragmatic solutions before they become costly challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Unwavering Commitment</h3>
              <p className="text-gray-300">
                Your project's safety and success are our paramount concern, reflected in our meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
