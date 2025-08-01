import { ArrowRight, Building2, CheckCircle, Plane, Shield } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('/wing-plane.jpeg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gray-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Orange Accent Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#101c3e] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#101c3e] to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="text-center">
                    {/* Floating Icons */}
                    {/* <div className="absolute top-10 left-10 opacity-20 animate-bounce">
                        <Plane className="h-12 w-12 text-orange-400/80" />
                    </div>
                    <div className="absolute top-20 right-10 opacity-20 animate-bounce delay-500">
                        <Building2 className="h-10 w-10 text-gray-400/80" />
                    </div>
                    <div className="absolute bottom-20 left-20 opacity-20 animate-bounce delay-1000">
                        <Shield className="h-11 w-11 text-orange-400/80" />
                    </div> */}

                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8 animate-fade-in">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                        Nigeria's Premier Aviation Compliance Partner
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold mb-8 animate-fade-in">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                            Your Trusted Partner for
                        </span>
                        <br />
                        <span className="text-white animate-slide-up">
                            Aviation Compliance
                        </span>
                        <br />
                        {/* <span className="text-gray-300 text-4xl md:text-5xl animate-slide-up delay-200">
                            and Surface Safety in Nigeria
                        </span> */}
                    </h1>

                    <div className="relative">
                        <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-300">
                            Ensuring Seamless NCAA Certification,
                            Helipad Excellence, and
                            Optimal Surface Performance
                        </p>

                        {/* Decorative line */}
                        <div className="w-24 h-1 bg-white/10 mx-auto mb-12 rounded-full animate-slide-up delay-400"></div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-500">
                        <Link href="/quote">
                            <Button
                                size="lg"
                                className="group bg-gradient-to-r from-orange-500/80 to-orange-600/80 hover:from-orange-600/80 hover:to-orange-700/80 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-500/10 transition-all duration-300 transform hover:scale-105"
                            >
                                Schedule a Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>

                        <Link href="/services">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-gray-600/80 text-gray-300 hover:bg-gray-800/80 hover:text-white text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-gray-900/50 transition-all duration-300 hover:border-orange-500/80"
                            >
                                Explore Our Services
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 animate-fade-in delay-700">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-orange-500" />
                            <span className="text-sm">NCAA Certified Experts</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-orange-500" />
                            <span className="text-sm">15+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-orange-500" />
                            <span className="text-sm">ICAO Standards Compliant</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero