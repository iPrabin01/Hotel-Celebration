import { Clock, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20  md:px-16 px-2 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Us</h2>
            <p className="text-gray-900 mb-8 max-w-lg">
              Experience the pinnacle of Nepalese fine dining at our exclusive
              location. Our sommeliers and hospitality team await to create your
              perfect dining experience.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-3 space-x-4">
                <div className="bg-amber-500 p-3 rounded-full mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-900">
                    Mukhiyaptti, Musarniya -03 ( Tulsiyahi )
                  </p>
                  <p className="text-gray-900">Dhanusa, Nepal</p>
                </div>
              </div>
              <div className="flex items-start gap-3 space-x-4">
                <div className="bg-amber-500 p-3 rounded-full mt-1">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Reservations</h4>
                  <p className="text-gray-900">+977-9815894970</p>
                  <p className="text-gray-900">katiyahouse@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 space-x-4">
                <div className="bg-amber-500 p-3 rounded-full mt-1">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Hours</h4>
                  <p className="text-gray-900">Daily: 10:00 Am - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-lg">
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.055326108721!2d85.8530479!3d26.6090164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec47000b627073%3A0x3bce23b34ddffb18!2sHOTEL%20CELEBRATION%20PURANO%20KATIYA%20HOUSE!5e0!3m2!1sen!2snp!4v1720070110000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
