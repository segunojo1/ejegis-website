"use client"
import { useState, FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle, Clock, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

type FormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  timeline: string;
  budget: string;
  requirements: string;
};

const Quote = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    budget: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!formId) {
        throw new Error('Formspree form ID is not configured');
      }
      
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Quote Request from ${formData.fullName} (${formData.companyName})`,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      toast.success('Quote request submitted successfully! We will get back to you soon.');
      
      // Reset form
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        projectType: "",
        timeline: "",
        budget: "",
        requirements: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit quote request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Start Your Journey to Compliance and Safety Today
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Your Custom Quote</h2>
                  <p className="text-gray-600 mb-8">
                    Tell us about your project and we'll provide a tailored consultation and no-obligation quote.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-helipad">New Helipad Development</SelectItem>
                          <SelectItem value="existing-helipad">Existing Helipad Certification</SelectItem>
                          <SelectItem value="friction-testing-helipad">Friction Testing - Helipad</SelectItem>
                          <SelectItem value="friction-testing-runway">Friction Testing - Runway</SelectItem>
                          <SelectItem value="friction-testing-industrial">Friction Testing - Industrial Floor</SelectItem>
                          <SelectItem value="friction-testing-other">Friction Testing - Other</SelectItem>
                          <SelectItem value="ncaa-advisory">NCAA Advisory Services</SelectItem>
                          <SelectItem value="safety-consulting">Safety Consulting</SelectItem>
                          <SelectItem value="training">Training & Development</SelectItem>
                          <SelectItem value="vessel-leasing">Vessel & Equipment Leasing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="timeline">Project Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent (Within 1 month)</SelectItem>
                            <SelectItem value="3-months">Within 3 months</SelectItem>
                            <SelectItem value="6-months">Within 6 months</SelectItem>
                            <SelectItem value="12-months">Within 12 months</SelectItem>
                            <SelectItem value="flexible">Flexible timeline</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget Range (Optional)</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5m">Under ₦5M</SelectItem>
                            <SelectItem value="5m-10m">₦5M - ₦10M</SelectItem>
                            <SelectItem value="10m-25m">₦10M - ₦25M</SelectItem>
                            <SelectItem value="25m-50m">₦25M - ₦50M</SelectItem>
                            <SelectItem value="over-50m">Over ₦50M</SelectItem>
                            <SelectItem value="discuss">Prefer to discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="requirements">Detailed Requirements *</Label>
                      <Textarea
                        id="requirements"
                        value={formData.requirements}
                        onChange={(e) => handleInputChange("requirements", e.target.value)}
                        required
                        rows={6}
                        placeholder="Please provide detailed information about your project requirements, including location, size, specific compliance needs, and any other relevant details..."
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Review</h4>
                        <p className="text-gray-600 text-sm">Our team reviews your request within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Discovery Call</h4>
                        <p className="text-gray-600 text-sm">Schedule a detailed call to understand your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Proposal</h4>
                        <p className="text-gray-600 text-sm">Receive a detailed proposal and timeline</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Begin Project</h4>
                        <p className="text-gray-600 text-sm">Start working immediately upon approval</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose EJEGIS LTD?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">15+ years NCAA expertise</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">100% compliance success rate</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">End-to-end project support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">International standards compliance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-orange-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-orange-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">+234 916 000 8950</div>
                        <div className="text-sm text-gray-600">Mon-Fri, 8am-6pm</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-orange-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">contact@ejegis.com</div>
                        <div className="text-sm text-gray-600">24hr response time</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Quote;
