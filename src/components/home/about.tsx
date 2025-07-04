import { CheckCircle } from "lucide-react"

const About = () => {
    return (
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
    )
}

export default About