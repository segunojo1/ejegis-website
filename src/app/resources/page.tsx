
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, FileText, Clock, Download, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  category: string;
  date: string;
}

const Resources = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const blogPosts = [
    {
      id: 1,
      title: "Understanding NCAA's Aviation Height Clearance: A Developer's Guide",
      excerpt: "A comprehensive guide to navigating the NCAA's Aviation Height Clearance requirements for property developers and architects.",
      content: `
        <p>When it comes to property development near airports or helipads, understanding and complying with the Nigerian Civil Aviation Authority's (NCAA) Aviation Height Clearance (AHC) requirements is crucial. This guide provides developers and architects with essential information to navigate these regulations effectively.</p>
        
        <h3>What is Aviation Height Clearance?</h3>
        <p>Aviation Height Clearance is a mandatory approval required from the NCAA for any structure that exceeds the height restrictions specified in the Nigerian Civil Aviation Regulations (NCARs). This ensures that buildings, cranes, masts, or any other structures do not pose a hazard to air navigation.</p>
        
        <h3>When is AHC Required?</h3>
        <ul>
          <li>For any structure exceeding 90 meters in height</li>
          <li>For any structure within 15km of an airport's reference point</li>
          <li>For temporary structures like cranes or construction equipment</li>
          <li>For any structure that might penetrate the obstacle limitation surfaces</li>
        </ul>
        
        <h3>Application Process</h3>
        <ol>
          <li>Submit a formal application to the NCAA</li>
          <li>Provide detailed architectural and engineering drawings</li>
          <li>Include a topographical survey of the site</li>
          <li>Submit an Environmental Impact Assessment (EIA) if required</li>
          <li>Pay the applicable processing fees</li>
        </ol>
        
        <h3>Common Pitfalls to Avoid</h3>
        <p>Many development projects face delays due to non-compliance with AHC requirements. Common issues include:</p>
        <ul>
          <li>Initiating construction before obtaining clearance</li>
          <li>Incomplete documentation</li>
          <li>Failure to consider future airspace requirements</li>
          <li>Not accounting for temporary structures during construction</li>
        </ul>
        
        <p>By understanding and adhering to these requirements early in your project planning, you can avoid costly delays and ensure your development proceeds smoothly while maintaining aviation safety standards.</p>
      `,
      readTime: "8 min read",
      category: "Compliance",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "The Critical Role of Friction Testing in Helipad Safety",
      excerpt: "Exploring why surface friction testing is essential for helipad safety and how it prevents accidents.",
      content: `
        <p>Helipad surface friction is a critical factor in ensuring safe helicopter operations. This article explores the importance of regular friction testing and its impact on aviation safety.</p>
        
        <h3>Why Friction Testing Matters</h3>
        <p>Helicopters rely on proper friction between their landing gear and the helipad surface for safe operations. Insufficient friction can lead to:</p>
        <ul>
          <li>Reduced braking effectiveness</li>
          <li>Increased stopping distances</li>
          <li>Loss of directional control during landing or takeoff</li>
          <li>Increased risk of dynamic rollover</li>
        </ul>
        
        <h3>Testing Methods</h3>
        <p>At EJEGIS LTD., we use advanced testing equipment to measure the coefficient of friction (COF) of helipad surfaces. Our testing process includes:</p>
        <ol>
          <li>Pre-inspection of the helipad surface</li>
          <li>Multiple test runs in different directions</li>
          <li>Data collection and analysis</li>
          <li>Detailed reporting with recommendations</li>
        </ol>
        
        <h3>Regulatory Requirements</h3>
        <p>The NCAA mandates regular friction testing as part of helipad maintenance. The frequency of testing depends on:</p>
        <ul>
          <li>Helipad usage frequency</li>
          <li>Environmental conditions</li>
          <li>Surface material and age</li>
          <li>Previous test results</li>
        </ul>
        
        <p>Regular friction testing is not just a regulatory requirement but a critical safety measure that protects lives and assets in helicopter operations.</p>
      `,
      readTime: "6 min read",
      category: "Safety",
      date: "March 10, 2024"
    },
    {
      id: 3,
      title: "5 Key Elements of an Effective Heliport Emergency Response Plan",
      excerpt: "Essential components every heliport emergency response plan must include for NCAA compliance.",
      content: `
        <p>An effective Emergency Response Plan (ERP) is a critical component of heliport operations. The NCAA requires all certified heliports to maintain a comprehensive ERP. Here are the five key elements that should be included:</p>
        
        <h3>1. Emergency Contact Information</h3>
        <p>Maintain an up-to-date list of emergency contacts including:</p>
        <ul>
          <li>Local emergency services</li>
          <li>Hospital and medical facilities</li>
          <li>Airport/heliport management</li>
          <li>Regulatory authorities</li>
          <li>Key personnel with 24/7 contact details</li>
        </ul>
        
        <h3>2. Emergency Procedures</h3>
        <p>Detailed response procedures for various emergency scenarios:</p>
        <ul>
          <li>Aircraft accidents on or near the heliport</li>
          <li>Fire and smoke incidents</li>
          <li>Hazardous material spills</li>
          <li>Medical emergencies</li>
          <li>Security threats</li>
        </ul>
        
        <h3>3. Training and Drills</h3>
        <p>Regular training and emergency drills ensure all personnel are prepared to respond effectively. This should include:</p>
        <ul>
          <li>Initial training for new staff</li>
          <li>Annual refresher courses</li>
          <li>Tabletop exercises</li>
          <li>Full-scale emergency drills</li>
        </ul>
        
        <h3>4. Equipment and Resources</h3>
        <p>Maintain appropriate emergency equipment including:</p>
        <ul>
          <li>Firefighting equipment</li>
          <li>First aid supplies</li>
          <li>Emergency lighting</li>
          <li>Communication devices</li>
        </ul>
        
        <h3>5. Review and Update Process</h3>
        <p>Regularly review and update the ERP to ensure its effectiveness. This includes:</p>
        <ul>
          <li>Annual reviews at minimum</li>
          <li>Updates after any emergency incident</li>
          <li>Revisions based on regulatory changes</li>
          <li>Feedback from emergency drills</li>
        </ul>
        
        <p>A well-developed and regularly practiced ERP can significantly improve response times and outcomes during emergency situations.</p>
      `,
      readTime: "10 min read",
      category: "Emergency Planning",
      date: "March 5, 2024"
    },
    {
      id: 4,
      title: "Updates to Nigerian Civil Aviation Regulations: What You Need to Know",
      excerpt: "Latest changes to NCAA regulations and their impact on aviation infrastructure projects.",
      content: `
        <p>The Nigerian Civil Aviation Authority (NCAA) has recently implemented several important updates to its regulations that affect aviation infrastructure development and operations. Here's what you need to know:</p>
        
        <h3>Key Regulatory Updates</h3>
        <h4>1. Enhanced Safety Management Systems (SMS) Requirements</h4>
        <p>All aerodrome and heliport operators must now implement enhanced SMS that includes:</p>
        <ul>
          <li>More rigorous hazard identification processes</li>
          <li>Expanded safety reporting requirements</li>
          <li>Mandatory safety performance indicators</li>
          <li>Enhanced safety training for all personnel</li>
        </ul>
        
        <h4>2. Revised Helipad Design Standards</h4>
        <p>The NCAA has updated its helipad design standards to align with ICAO recommendations:</p>
        <ul>
          <li>Increased minimum dimensions for new helipads</li>
          <li>Enhanced lighting and marking requirements</n          <li>Stricter obstacle limitation surfaces</li>
          <li>Improved drainage specifications</li>
        </ul>
        
        <h4>3. Environmental Compliance</h4>
        <p>New environmental regulations require:</p>
        <ul>
          <li>Noise abatement procedures</li>
          <li>Emission control measures</li>
          <li>Wildlife hazard management plans</li>
          <li>Stormwater management systems</li>
        </ul>
        
        <h4>4. Digital Documentation</h4>
        <p>The NCAA is moving towards paperless operations with new requirements for:</p>
        <ul>
          <li>Electronic submission of applications</li>
          <li>Digital record-keeping</li>
          <li>Online payment systems</li>
          <li>Electronic certificates and approvals</li>
        </ul>
        
        <h3>Compliance Deadlines</h3>
        <p>The NCAA has established the following compliance deadlines:</p>
        <ul>
          <li>New SMS requirements: 6 months from publication</li>
          <li>Helipad design standards: Apply to all new constructions immediately; existing facilities have 24 months to comply</li>
          <li>Environmental requirements: Phased implementation over 12 months</li>
          <li>Digital documentation: 3-month transition period</li>
        </ul>
        
        <p>These regulatory changes aim to enhance safety, security, and environmental protection in Nigerian aviation. EJEGIS LTD. is fully equipped to help clients navigate these changes and ensure compliance.</p>
      `,
      readTime: "12 min read",
      category: "Regulatory Updates",
      date: "February 28, 2024"
    },
    {
      id: 5,
      title: "Why Routine Surface Friction Testing Saves Lives and Money",
      excerpt: "The cost-benefit analysis of regular friction testing and its impact on operational safety.",
      content: `
        <p>Regular surface friction testing is a critical maintenance activity for any helipad or airport runway. While some operators view it as an unnecessary expense, the reality is that routine testing can save both lives and significant costs in the long run.</p>
        
        <h3>Safety Benefits</h3>
        <p>Regular friction testing helps prevent accidents by:</p>
        <ul>
          <li>Identifying deteriorating surface conditions before they become hazardous</li>
          <li>Ensuring adequate stopping distances for aircraft</n          <li>Preventing hydroplaning during wet conditions</li>
          <li>Maintaining proper directional control during landing and takeoff</li>
        </ul>
        
        <h3>Financial Benefits</h3>
        <p>The cost of regular testing is minimal compared to the potential costs of an accident:</p>
        <table class="w-full border-collapse my-4">
          <thead>
            <tr class="bg-gray-100">
              <th class="border p-2 text-left">Cost Factor</th>
              <th class="border p-2 text-right">Cost Range (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2">Annual Friction Testing</td>
              <td class="border p-2 text-right">$1,500 - $3,000</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border p-2">Minor Surface Repairs (if caught early)</td>
              <td class="border p-2 text-right">$5,000 - $15,000</td>
            </tr>
            <tr>
              <td class="border p-2">Major Surface Repairs (delayed maintenance)</td>
              <td class="border p-2 text-right">$50,000+</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border p-2">Average Helicopter Accident (minor damage)</td>
              <td class="border p-2 text-right">$250,000+</td>
            </tr>
            <tr>
              <td class="border p-2">Major Helicopter Accident (severe damage/injuries)</td>
              <td class="border p-2 text-right">$1,000,000+</td>
            </tr>
          </tbody>
        </table>
        
        <h3>Regulatory Compliance</h3>
        <p>Regular testing ensures compliance with NCAA regulations, helping to avoid:</p>
        <ul>
          <li>Fines and penalties for non-compliance</li>
          <li>Operational restrictions or shutdowns</li>
          <li>Increased insurance premiums</li>
          <li>Legal liability in case of accidents</li>
        </ul>
        
        <h3>Best Practices</h3>
        <p>To maximize the benefits of friction testing, follow these best practices:</p>
        <ol>
          <li>Test at least twice per year, or more frequently for high-traffic helipads</li>
          <li>Test after any major weather events or surface repairs</li>
          <li>Maintain detailed records of all tests and maintenance activities</li>
          <li>Address any issues identified during testing promptly</li>
          <li>Work with certified professionals like EJEGIS LTD. for accurate testing and analysis</li>
        </ol>
        
        <p>Investing in regular surface friction testing is a small price to pay for the safety of passengers, crew, and aircraft, while also protecting your financial interests and regulatory standing.</p>
      `,
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
<>
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
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                      onClick={() => setSelectedPost(post)}
                    >
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
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-orange-600" />
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
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
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
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our experts are ready to answer your specific questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Our Experts
            </a>
            <a href="/quote" className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Request a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>

    <Dialog 
      open={!!selectedPost} 
      onOpenChange={(open) => !open && setSelectedPost(null)}
    >
      {selectedPost && (
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {selectedPost.category}
                </span>
                <DialogTitle className="text-2xl mt-2">{selectedPost.title}</DialogTitle>
                <div className="flex items-center text-gray-500 text-sm mt-2 mb-6">
                  <span>{selectedPost.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1 inline" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>
          </DialogHeader>
          <div className="prose max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
          </div>
          <div className="mt-6 flex justify-end">
            <Button 
              onClick={() => setSelectedPost(null)}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      )}
    </Dialog>
</>
  );
};

export default Resources;

