import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "An extraordinary culinary journey that redefined Nepalese fine dining. The attention to detail rivals Michelin-starred establishments.",
      author: "Rajesh Shrestha",
      rating: 5,
    },
    {
      id: 2,
      text: "The fusion of traditional flavors with contemporary techniques creates an unforgettable gastronomic experience. A true jewel of Nepal!",
      author: "Sarah Johnson",
      rating: 5,
    },
    {
      id: 3,
      text: "Every dish tells a story of Nepal's rich culinary heritage. The truffle-infused risotto is worth the journey alone.",
      author: "Anil Gurung",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Guest Experiences
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            What our distinguished guests say about their dining journey
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-amber-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-6">
                "{testimonial.text}"
              </blockquote>
              <div className="font-semibold text-gray-900">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
