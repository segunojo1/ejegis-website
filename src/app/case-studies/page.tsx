
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Target, TrendingUp } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "High-Rise Helipad Certification in Banana Island",
      client: "Prominent Lagos Property Developer",
      industry: "Real Estate Development",
      challenge: "The client faced significant hurdles in obtaining NCAA certification for their new high-rise helipad due to complex regulatory requirements and the need for meticulous documentation and design compliance.",
      solution: "EJEGIS LTD. provided end-to-end consultancy, including a detailed feasibility study, design review against NCAA/ICAO standards, comprehensive Heliport Manual development, and proactive liaison with NCAA officials. We also coordinated the required friction testing of the helipad surface.",
      results: [
        "Successfully obtained NCAA Heliport Certificate within 8 months",
        "Enhanced property value by 15%",
        "Streamlined executive travel operations",
        "Zero compliance issues during inspection"
      ],
      testimonial: "EJEGIS LTD.'s expertise was invaluable in securing our helipad certification. Their guidance simplified what seemed like an impossible process.",
      duration: "8 months",
      impact: "15% property value increase"
    },
    {
      title: "Optimizing Industrial Floor Safety at Manufacturing Facility",
      client: "Leading Nigerian Manufacturing Company",
      industry: "Manufacturing",
      challenge: "The manufacturing facility experienced frequent slip incidents on their production floor, raising safety concerns and potential liability issues. They needed precise friction analysis to identify problem areas and implement corrective measures.",
      solution: "Our team conducted comprehensive surface friction testing using advanced CFME equipment across the entire facility. We provided detailed analysis of high-risk areas and recommended specific surface treatments and maintenance protocols.",
      results: [
        "90% reduction in slip incidents",
        "Improved worker safety and confidence",
        "Enhanced operational efficiency",
        "Compliance with international safety standards"
      ],
      testimonial: "The friction testing provided by EJEGIS LTD. gave us critical insights into our industrial floor's safety performance and helped us create a much safer work environment.",
      duration: "3 months",
      impact: "90% incident reduction"
    },
    {
      title: "Runway Friction Analysis for Regional Airport",
      client: "Regional Airport Authority",
      industry: "Aviation Infrastructure",
      challenge: "The regional airport needed to ensure their runway met international friction standards for safe aircraft operations, especially during wet weather conditions. Compliance with ICAO standards was essential for continued operations.",
      solution: "We performed detailed runway friction testing under various weather conditions, analyzed surface characteristics, and provided comprehensive recommendations for surface improvements and maintenance scheduling.",
      results: [
        "Full ICAO compliance achieved",
        "Enhanced aircraft safety ratings",
        "Optimized maintenance schedule",
        "Reduced weather-related delays"
      ],
      testimonial: "EJEGIS LTD.'s thorough analysis helped us maintain the highest safety standards while optimizing our operational efficiency.",
      duration: "4 months",
      impact: "100% ICAO compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            See How EJEGIS LTD. Delivers Results for Our Clients
          </p>
        </div>
      </section>

      {/* Case Studies Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results, Real Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped clients achieve compliance, enhance safety, and optimize operations across various industries
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <div className="bg-orange-50 px-8 py-6 border-b">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 lg:mb-0">{study.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        {study.industry}
                      </Badge>
                      <Badge variant="outline" className="border-orange-600 text-orange-600">
                        {study.client}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration: {study.duration}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Impact: {study.impact}
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <Target className="h-5 w-5 mr-2 text-red-600" />
                          Challenge
                        </h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-orange-600" />
                          EJEGIS LTD. Solution
                        </h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                          Results & Impact
                        </h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Client Testimonial</h4>
                        <blockquote className="text-gray-600 italic">
                          "{study.testimonial}"
                        </blockquote>
                        <div className="mt-3 text-sm text-gray-500">
                          — {study.client}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-300">Proven results across all our projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-lg font-semibold mb-2">Success Rate</div>
              <div className="text-gray-300">All projects completed successfully</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-lg font-semibold mb-2">Projects Delivered</div>
              <div className="text-gray-300">Across various industries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-lg font-semibold mb-2">Client Satisfaction</div>
              <div className="text-gray-300">Consistently high ratings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">Zero</div>
              <div className="text-lg font-semibold mb-2">Compliance Issues</div>
              <div className="text-gray-300">Perfect regulatory track record</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-service-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let us help you achieve the same level of success and compliance that our clients experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </a>
            <a href="/contact" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Discuss Your Needs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;