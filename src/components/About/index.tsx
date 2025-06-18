import { Clock, Star, Utensils, Wine } from "lucide-react";

const About = () => {
  return (
    <>
      <section
        id="home"
        className=" bg-gray-900 text-white min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop')] opacity-30 bg-cover bg-center"></div>
        <div className="container flex items-center justify-center mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-600/20 border border-amber-500 text-amber-300 px-6 py-1 rounded-full text-sm font-medium mb-6">
              Nepal's Premier Fine Dining Experience
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Where <span className="text-amber-400">Flavor & Tradition</span>{" "}
              Meet Over Firewood
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Welcome to Katiya House — the ultimate destination for savoring
              Nepal’s most beloved Katiya Mutton, slow-cooked in traditional
              clay pots over a wood fire, paired with fresh, hand-tossed
              Tandoori Roti. Discover the taste of heritage with every bite.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-lg">
                Reserve Your Table
              </button>
              <a
                href="#menu"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-all shadow-lg"
              >
                Explore Our Menu
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="py-16 px-16 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-64 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=800&fit=crop"
                  alt="Chef preparing dish"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 mt-8 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=800&fit=crop"
                  alt="Restaurant interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 -mt-8 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&h=800&fit=crop"
                  alt="Dining experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=800&fit=crop"
                  alt="Gourmet dish"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="w-30 text-center inline-block bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Redefining{" "}
                <span className="text-amber-600">Nepalese Cuisine</span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Grand Royale stands as Nepal's culinary landmark, where
                traditional recipes meet contemporary artistry. Our
                award-winning chefs combine generations of culinary wisdom with
                innovative techniques to create unforgettable dining experiences
                that celebrate Nepal's diverse gastronomic heritage.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We source our ingredients from local farmers and foragers,
                supporting Nepal's agricultural communities while ensuring the
                freshest flavors in every dish. Each plate tells a story of
                Nepal's rich cultural tapestry, presented with elegant
                sophistication.
              </p>
              <br />
              <p className="text-gray-700 mb-8 leading-relaxed">
                We source our ingredients from local farmers and foragers,
                supporting Nepal's agricultural communities while ensuring the
                freshest flavors in every dish. Each plate tells a story of
                Nepal's rich cultural tapestry, presented with elegant
                sophistication.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-3 items-center">
                  <div className="bg-amber-500 p-3 rounded-full mr-4">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">5-Star Dining</p>
                    <p className="text-gray-600 text-sm">
                      Highest standards of hospitality
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-amber-500 p-3 rounded-full mr-4">
                    <Wine className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Curated Pairings</p>
                    <p className="text-gray-600 text-sm">
                      Premium wine & spirit selection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="katiya-special"
        className=" px-16 bg-gradient-to-br bg-white"
      >
        <div className="container  mx-auto px-4">
          <div className="text-center pb-12 mb-16">
            <span className="text-3xl relative   md:text-4xl font-bold text-gray-900 mb-10"></span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-20">
                <span className="w-40 text-center inline-block bg-orange-300 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                  Our Special Items
                </span>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  The legendary Katiya Mutton - a family recipe perfected over
                  decades
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className=" border-amber-700 rounded-xl w-full h-full flex items-center justify-center text-amber-200">
                  <div className=" h-[50vh] object-cover flex items-center justify-center ">
                    <img
                      src="/images/7.jpg"
                      alt=""
                      className=" object-cover "
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-red-800 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <p className="font-bold text-xl">Rs.450</p>
                  <p className="text-amber-200 text-sm">Per Plate</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 flex flex-col ">
              <h3 className="text-3xl font-bold text-gray-900">
                Katiya Mutton – Our House Specialty
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Indulge in the legendary taste of our Katiya Mutton, a
                time-honored delicacy that embodies the heart of traditional
                Nepali cuisine. Slow-cooked to perfection in a clay pot over a
                wood fire, this iconic dish is infused with a secret blend of 12
                aromatic Himalayan spices, unlocking deep, soulful flavors with
                every bite.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We use only the freshest local farm-raised mutton, marinated
                overnight to tenderize and absorb our rich, earthy seasoning.
                The result is a melt-in-your-mouth experience that has been
                cherished by generations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Prepared with patience and passion, our Katiya Mutton takes
                1–1.5 hours to cook—each minute adding to its unmatched depth
                and tenderness.
              </p>

              <div className="grid grid-cols-2 mt-8">
                <div className="flex  items-center">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Clock className="w-5 h-5 text-red-700" />
                  </div>
                  <div>
                    <p className="font-semibold">Preparation Time</p>
                    <p className="text-gray-600">1-1.5 hours</p>
                  </div>
                </div>
                <div className="flex  items-center">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Utensils className="w-5 h-5 text-red-700" />
                  </div>
                  <div>
                    <p className="font-semibold">Serving Style</p>
                    <p className="text-gray-600">With Roti & Chutney</p>
                  </div>
                </div>
              </div>

              <button className="mt-6 bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-md font-medium transition-colors">
                Order Katiya Mutton
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
