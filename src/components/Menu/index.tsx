const Menu = () => {
  const menuItems = [
    {
      id: "5",
      name: "Katiya mutton",
      price: 450,
      quantity: 43,
      category: "Food Non-Veg",
      image: "/images/7.jpg",
      description: "Traditional clay-pot cooked spicy mutton curry.",
    },
    {
      id: "6",
      name: "Fish Fry",
      price: 70,
      quantity: 33,
      category: "Food Non-Veg",
      image: "/images/ff.jpg",
      description: "Crispy fried fish marinated with Nepali spices.",
    },

    {
      id: "8",
      name: "Normal Mutton",
      price: 400,
      quantity: 48,
      category: "Food Non-Veg",
      image: "/images/km2.jpg",
      description: "Classic Nepali-style mutton curry with herbs.",
    },
    {
      id: "9",
      name: "Paneer chelly",
      price: 350,
      quantity: 45,
      category: "Food Veg",
      image: "/images/pc.jpg",
      description: "Paneer tossed in spicy and tangy gravy.",
    },
    {
      id: "10",
      name: "Paneer pakuda",
      price: 350,
      quantity: 48,
      category: "Food Veg",
      image: "/images/pp.jpg",
      description: "Deep-fried paneer fritters with chutney.",
    },
    {
      id: "11",
      name: "Chicken curry",
      price: 250,
      quantity: 50,
      category: "Food Non-Veg",
      image: "/images/ccr.jpg",
      description: "Home-style chicken curry cooked in rich gravy.",
    },
    {
      id: "12",
      name: "Chicken Roaste",
      price: 250,
      quantity: 50,
      category: "Food Non-Veg",
      image: "/images/gc.jpg",

      description: "Juicy roasted chicken with flavorful spices.",
    },
    {
      id: "7",
      name: "Mutton Rice",
      price: 320,
      quantity: 43,
      category: "Food Veg",
      image: "/images/kh.jpg",
      description: "Spiced puffed rice mix with crunchy elements.",
    },
    // {
    //   id: "13",
    //   name: "Egg fry",
    //   price: 25,
    //   quantity: 30,
    //   category: "Food Non-Veg",
    //   image:
    //     "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=100",
    //   description: "Pan-fried eggs seasoned with herbs and spices.",
    // },
  ];
  return (
    <section id="menu" className="py-12 md:px-16 px-2">
      <div className="container flex flex-col gap-4 justify-center items-center mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Culinary Masterpieces
          </h2>
          <p className="text-gray-400 max-w-2xl py-4 mx-auto">
            Experience our signature dishes crafted with locally sourced
            ingredients and innovative techniques
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-md text-sm font-bold">
                  Rs. {item.price}
                </div>
              </div>
              <div className="px-6 py-4">
                <h3 className="font-bold text-white text-xl mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                {item.category === "signature" && (
                  <div className="inline-block bg-amber-600/20 border border-amber-500 text-amber-300 px-3 py-1 rounded-full text-xs mb-4">
                    Chef's Signature
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-md font-medium transition-all">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
