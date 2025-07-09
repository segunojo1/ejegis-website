import { why } from "@/data/whychooseus"
import { CheckCircle } from "lucide-react"

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EJEGIS LTD.?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {why.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default WhyChooseUs