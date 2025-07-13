"use client"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import ContactForm from "@/components/contact/form";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast("Message Sent Successfully!");
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-white">

      <section className="bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Get in touch with our aviation compliance and safety experts
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to discuss your aviation compliance or safety needs? Our team of experts is here to help you navigate the complexities of regulatory requirements and ensure the success of your project.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">+234 916 000 8950</p>
                        <p className="text-sm text-gray-500 mt-1">Available Monday - Friday, 8am - 6pm</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">contact@ejegis.com</p>
                        <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Address</h3>
                        <p className="text-gray-600">1 Aderibigbe street, kilo bustop, Surulere, Lagos</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Operating Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8am – 6pm</p>
                        <p className="text-sm text-gray-500 mt-1">Emergency consultations available by appointment</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What Happens Next?</h3>
                <div className="space-y-2 text-gray-600">
                  <p>1. We'll review your inquiry within 24 hours</p>
                  <p>2. Schedule a discovery call to understand your needs</p>
                  <p>3. Provide a detailed proposal and timeline</p>
                  <p>4. Begin working on your project immediately upon approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Lagos, we're easily accessible for in-person consultations
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.127589204409!2d3.3404160776969936!3d6.505528976692763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c2249bf8405%3A0xd3a48f2aff9d37c!2s1%20Aderibigbe%20St%2C%20Ikate%2C%20Lagos%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1751971631155!5m2!1sen!2sng" className="w-full h-full rounded-lg md:w-[600px] md:h-[450px]" style={{border: 0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <p className="text-sm text-gray-500 mt-2">1 Aderibigbe street, kilo bustop, Surulere, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
