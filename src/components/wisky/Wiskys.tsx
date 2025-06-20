import { ChevronRight, Facebook, Instagram, Youtube } from "lucide-react";

const WhiskyPoster = () => {
  return (
    <section className="md:px-16 px-2 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center pb-12 ">
          <span className="text-3xl relative md:text-4xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            Our House Specialty
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 flex flex-col  p-8 rounded-2xl bg-white/80 backdrop-blur-sm   transition-all duration-300">
            <h3 className="text-3xl font-bold  ">
              Premium Whisky, Beer & Spirits –{" "}
              <span className="bg-gradient-to-r bg-clip-text from-amber-800 to-orange-600 text-transparent">
                {" "}
                A Toast to Good Times
              </span>
            </h3>

            <p className="text-gray-700 text-justify leading-relaxed">
              Discover the refined pleasures of our carefully curated selection
              of{" "}
              <span className="font-semibold text-amber-700">
                premium whisky, craft beer, and fine alcohol
              </span>
              , each chosen to elevate your dining experience. Whether you’re a
              connoisseur or a casual enthusiast, our collection celebrates the
              timeless art of distillation and brewing.
            </p>

            <p className="text-gray-700 text-justify leading-relaxed">
              From rich, smoky{" "}
              <span className="font-semibold text-orange-700">
                single malt whiskies
              </span>{" "}
              aged to perfection, to refreshing{" "}
              <span className="font-semibold text-amber-700">
                locally brewed craft beers
              </span>{" "}
              with bold character, and smooth{" "}
              <span className="font-semibold text-red-700">
                top-shelf liquors
              </span>
              , we bring you the very best from around the world and close to
              home.
            </p>

            <p className="text-gray-700 text-justify leading-relaxed">
              Each pour is a celebration of tradition and craftsmanship—whether
              you're unwinding after a long day or raising a toast with friends.{" "}
              <span className="font-semibold text-orange-700">
                Served chilled, neat, or on the rocks
              </span>
              —our drinks are more than beverages, they’re an experience.
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4">
              <button className="flex items-center justify-center px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-sm rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                Explore more
                <ChevronRight className="ml-2 w-4 h-4" />
              </button>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <span className="text-[12px] text-gray-600 border border-orange-300 px-3 py-1 rounded-full bg-orange-50">
                  Meet digitally
                </span>
                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-md">
                    <Facebook className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-7 h-7 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-md">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-7 h-7 bg-red-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-md">
                    <Youtube className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 opacity-0"></div>
            <div className="relative rounded-xl overflow-hidden group">
              <div className="absolute inset-0  rounded-xl"></div>

              <div className=" rounded-xl w-full h-full flex items-center justify-center  ">
                <div className="h-[50vh] w-full object-cover flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/images/lq.jpg"
                    alt="Katiya Mutton - Traditional Nepali Specialty"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                <span className="text-xs font-medium text-amber-800">
                  Signature
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiskyPoster;
