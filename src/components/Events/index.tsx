import { ChevronRight } from "lucide-react";

const Events = () => {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exclusive Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Host unforgettable gatherings in our sophisticated event spaces
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Destination Weddings",
              description:
                "Create timeless memories with our bespoke wedding services",
              image:
                "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
            },
            {
              title: "Corporate Events",
              description:
                "Impress clients with our executive meeting facilities",
              image:
                "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop",
            },
            {
              title: "Private Dining",
              description:
                "Exclusive chef's table experiences for intimate gatherings",
              image:
                "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&h=600&fit=crop",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg h-96"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="mb-4">{event.description}</p>
                <button className="text-amber-400 hover:text-amber-300 font-medium flex items-center">
                  <span>Enquire Now</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
