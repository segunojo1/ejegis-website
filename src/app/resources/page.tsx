
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, FileText, Clock, Download } from "lucide-react";

const Resources = () => {
  const blogPosts = [
    {
      title: "Understanding NCAA's Aviation Height Clearance: A Developer's Guide",
      excerpt: "A comprehensive guide to navigating the NCAA's Aviation Height Clearance requirements for property developers and architects.",
      readTime: "8 min read",
      category: "Compliance",
      date: "March 15, 2024"
    },
    {
      title: "The Critical Role of Friction Testing in Helipad Safety",
      excerpt: "Exploring why surface friction testing is essential for helipad safety and how it prevents accidents.",
      readTime: "6 min read",
      category: "Safety",
      date: "March 10, 2024"
    },
    {
      title: "5 Key Elements of an Effective Heliport Emergency Response Plan",
      excerpt: "Essential components every heliport emergency response plan must include for NCAA compliance.",
      readTime: "10 min read",
      category: "Emergency Planning",
      date: "March 5, 2024"
    },
    {
      title: "Updates to Nigerian Civil Aviation Regulations: What You Need to Know",
      excerpt: "Latest changes to NCAA regulations and their impact on aviation infrastructure projects.",
      readTime: "12 min read",
      category: "Regulatory Updates",
      date: "February 28, 2024"
    },
    {
      title: "Why Routine Surface Friction Testing Saves Lives and Money",
      excerpt: "The cost-benefit analysis of regular friction testing and its impact on operational safety.",
      readTime: "7 min read",
      category: "Cost Analysis",
      date: "February 20, 2024"
    }
  ];

  const faqs = [
    {
      question: "What is a Heliport Certificate and why do I need one?",
      answer: "A Heliport Certificate is a mandatory document issued by the NCAA that legally authorizes the operation of a helipad. It ensures that your helipad meets all safety, design, and operational standards required by Nigerian Civil Aviation Regulations. Without this certificate, helicopter operations at your facility would be illegal and unsafe."
    },
    {
      question: "How long does NCAA helipad certification typically take?",
      answer: "The certification process typically takes 6-12 months, depending on the complexity of your project and how well-prepared your documentation is. With EJEGIS LTD.'s expertise, we can often streamline this process and avoid common delays by ensuring all requirements are met upfront."
    },
    {
      question: "What surfaces can EJEGIS LTD. perform friction testing on?",
      answer: "We can perform friction testing on a wide variety of surfaces including helipads, runways, taxiways, industrial floors, warehouses, production areas, loading docks, roads, pavements, and sports surfaces. Our advanced equipment can adapt to different surface types and conditions."
    },
    {
      question: "What is a Safety Management System (SMS) for aviation?",
      answer: "A Safety Management System (SMS) is a systematic approach to managing safety risks in aviation operations. It includes safety policies, procedures, risk assessment protocols, and continuous monitoring systems. For heliports, an SMS is mandatory and helps identify, assess, and mitigate potential safety hazards."
    },
    {
      question: "Are your services compliant with international aviation standards (ICAO)?",
      answer: "Yes, all our services are designed to meet both Nigerian Civil Aviation Regulations and international standards including ICAO (International Civil Aviation Organization) and ASTM standards. This ensures your facility meets global best practices while maintaining local compliance."
    },
    {
      question: "Do you provide ongoing support after certification?",
      answer: "Absolutely. We provide ongoing support including periodic compliance audits, friction testing renewals, emergency response plan updates, and assistance with any regulatory changes that may affect your operations."
    }
  ];

  const downloads = [
    {
      title: "EJEGIS LTD. Helipad Pre-Certification Checklist",
      description: "A comprehensive checklist to ensure your helipad project is ready for NCAA certification.",
      type: "PDF Guide",
      size: "2.4 MB"
    },
    {
      title: "Guide to NCAA Aviation Height Clearance Requirements",
      description: "Step-by-step guide to understanding and applying for Aviation Height Clearance.",
      type: "PDF Guide",
      size: "1.8 MB"
    },
    {
      title: "Surface Friction Testing Standards Overview",
      description: "Overview of international standards and best practices for surface friction testing.",
      type: "Technical Document",
      size: "3.2 MB"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Insights and Expertise from EJEGIS LTD.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest developments in aviation compliance and safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services and aviation compliance
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border-0 shadow-sm rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Downloads</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free resources to help you understand aviation compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloads.map((download, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{download.type}</div>
                      <div className="text-sm text-gray-500">{download.size}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {download.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {download.description}
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our experts are ready to answer your specific questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Our Experts
            </a>
            <a href="/quote" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Request a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;

