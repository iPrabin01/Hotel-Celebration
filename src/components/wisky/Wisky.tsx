import {
  Award,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Star,
} from "lucide-react";

const Wisky = () => {
  return (
    <section className="relative min-h-screen sm:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
            <Award className="w-4 h-4" />
            House Specialty Since 1985
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-4 tracking-tight">
            KATIYA
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-700 mb-6 tracking-tight">
            MUTTON
          </h2>

          <div className="flex justify-center items-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-orange-500 text-orange-500"
              />
            ))}
            <span className="text-gray-700 font-bold ml-2">
              Legendary Taste
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-white border-4 border-gray-200 hover:border-orange-300 rounded-3xl p-10 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="text-center mb-8">
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
                  Traditional Recipe
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-wide">
                  The Legend Lives On
                </h3>
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg font-medium leading-relaxed text-center">
                  <span className="text-4xl font-black text-orange-500">"</span>
                  Slow-cooked to perfection in a{" "}
                  <span className="text-gray-900 font-bold">
                    clay pot over wood fire
                  </span>
                  , infused with our{" "}
                  <span className="text-orange-600 font-bold">
                    secret blend of 12 aromatic Himalayan spices
                  </span>
                  .
                  <span className="text-4xl font-black text-orange-500">"</span>
                </p>

                <div className="border-t-2 border-gray-200 pt-6">
                  <p className="text-center font-medium">
                    Only the{" "}
                    <span className="text-gray-900 font-bold">
                      freshest local farm-raised mutton
                    </span>
                    , marinated overnight for that{" "}
                    <span className="text-orange-600 font-bold">
                      melt-in-your-mouth experience
                    </span>
                    cherished by generations.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex text-sm items-center gap-3 bg-gray-900 text-white px-4 md:px-6 py-3 md:py-3 rounded-full font-black">
                  <Clock className="w-5 h-5" />
                  <span>1-1.5 HOURS OF PATIENT COOKING</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 border-2 border-gray-300 p-8 rounded-3xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-black text-gray-900 uppercase tracking-wide">
                  Experience the Legend
                </h4>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-black sm:text-lg uppercase tracking-wide transform hover:scale-105 transition-all duration-300 shadow-xl">
                    Order Now
                    <ChevronRight className="inline ml-2 w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-bold text-sm">
                      FOLLOW US:
                    </span>
                    <div className="flex gap-2">
                      <div className="md:w-10 w-8 h-8 md:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
                        <Facebook className="w-4 h-4 text-white" />
                      </div>
                      <div className="md:w-10 w-8 h-8 md:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
                        <Instagram className="w-4 h-4 text-white" />
                      </div>
                      <div className="md:w-10 w-8 h-8 md:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
                        <Linkedin className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-gray-200 via-orange-200 to-gray-200 rounded-3xl blur-xl opacity-30"></div>

            <div className="relative bg-white border-4 border-gray-200  rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="relative rounded-2xl overflow-hidden bg-gray-50">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/images/7.jpg"
                    alt="Katiya Mutton - Legendary Nepali Delicacy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>

                  <div className="absolute top-4 left-8 bg-white text-gray-900 px-3 py-1 rounded-full font-bold text-xs uppercase shadow-lg">
                    Authentic
                  </div>

                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-xs uppercase">
                    Since 2019
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      AVAILABLE NOW
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-2 px-4 md:p-4 rounded-2xl transform rotate-6 font-black md:text-lg shadow-2xl">
                8 SPICES
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white font-black text-xs">HOT!</span>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-white border-2 border-gray-300 rounded-full md:px-12 px-4 md:py-6 py-2 shadow-xl">
            <div className="flex items-center gap-2">
              <div className="w-5 h-4 bg-gray-600 rounded-full"></div>
              <span className="text-gray-700 font-bold text-sm uppercase">
                Clay Pot Cooked
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-4 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700 font-bold text-sm uppercase">
                Wood Fire
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-4 bg-gray-800 rounded-full"></div>
              <span className="text-gray-700 font-bold text-sm uppercase">
                Secret Recipe
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wisky;
