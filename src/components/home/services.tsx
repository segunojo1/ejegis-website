import { CheckCircle, Shield, Users, Zap } from "lucide-react"
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

const Services = () => {
    return (
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
                <div className="w-12 h-12 bg-orange-100/80 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600/80 group-hover:text-white transition-colors">
                  <Shield className="h-6 w-6 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Aviation Compliance and Certification
                </h3>
                <p className="text-gray-600 mb-6">
                  Seamlessly achieve NCAA approvals for your aviation projects, from Aviation Height Clearance to full Heliport Certification.
                </p>
                <Link href="/services">
                  <Button variant="outline" className="group-hover:bg-orange-600/80 group-hover:text-white border-orange-600/80 text-orange-600/80">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100/80 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600/80 group-hover:text-white transition-colors">
                  <Users className="h-6 w-6 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Helipad Planning and Certification
                </h3>
                <p className="text-gray-600 mb-6">
                  Expert guidance for safe, compliant, and efficient helipads on high-rises and ground facilities.
                </p>
                <Link href="/services">
                  <Button variant="outline" className="group-hover:bg-orange-600/80 group-hover:text-white border-orange-600/80 text-orange-600/80">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100/80 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600/80 group-hover:text-white transition-colors">
                  <Zap className="h-6 w-6 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  General Surface Friction Testing
                </h3>
                <p className="text-gray-600 mb-6">
                  Precise friction analysis for runways, helipads, industrial floors, and more, ensuring optimal safety and performance.
                </p>
                <Link href="/services">
                  <Button variant="outline" className="group-hover:bg-orange-600/80 group-hover:text-white border-orange-600/80 text-orange-600/80">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}

export default Services;