import { Quote, User } from "lucide-react";

const Info = () => {
  return (
    <section id="about" className="py-20  text-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-4xl overflow-hidden  mx-auto  shadow-2xl">
              <div className="bg-gradient-to-br w-full h-full flex items-center justify-center">
                <img src="/images/k1.png" alt="" />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-28 bg-amber-500 p-4 rounded-lg shadow-lg text-center">
              <p className="font-bold text-lg">Pradip Kumar Mahato</p>
              <p className="text-sm">Owner & Head Chef</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Message From Our <span className="text-amber-400">Owner</span>
            </h2>

            <div className="relative bg-white/10 p-8 flex flex-col gap-4 rounded-xl backdrop-blur-sm">
              <Quote className="absolute top-4 left-4 text-gray-900 opacity-30 w-8 h-8" />
              <p className="text-gray-900 leading-relaxed italic mb-6">
                "At Katiya House, we don't just serve food - we serve memories.
                Our journey began in 2005 with a simple dream: to bring
                authentic Nepali flavors to our community. The Katiya Mutton
                recipe has been in my family for generations, and it's an honor
                to share it with you."
              </p>
              <p className="text-gray-900 leading-relaxed italic">
                "Every dish we create is made with the same love and care that
                we would serve to our own family. We source our ingredients
                locally, support our farmers, and preserve traditional cooking
                methods to bring you the true taste of Nepal."
              </p>
              <div className="mt-6 flex gap-3 items-center">
                <div className="bg-amber-500 p-2 rounded-full mr-4">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Pradip Kumar Mahato</p>
                  <p className="text-amber-200 text-sm">
                    Founder, Katiya House
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
