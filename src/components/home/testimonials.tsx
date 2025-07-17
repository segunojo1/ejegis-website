import { Star, Users } from "lucide-react"
import { Card, CardContent } from "../ui/card"

const Testimonial = () => {
    return (
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
                  <div className="w-12 h-12 bg-orange-100/80 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Capt. Musa Nuhu</div>
                    <div className="text-gray-600">Nigerian Civil Aviation Authority (NCAA)</div>
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
                  "EJEGIS LTD's expertise in helipad certification was crucial for our new corporate headquarters. Their thorough approach and adherence to international standards gave us complete confidence in the safety of our aviation facilities."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100/80 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Engr. Akin Olateru</div>
                    <div className="text-gray-600">Accident Investigation Bureau (AIB) Nigeria</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}

export default Testimonial