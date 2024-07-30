import React from "react";
import Img1 from "../../assets/roypack.jpg";
import Img2 from "../../assets/venicepack.jpg";
import Img3 from "../../assets/brazilpack.jpg";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Roy Beans",
    description:
      "Experience the rich and bold flavor of Roy Beans, meticulously roasted to perfection for a taste that lingers. Perfect for any coffee connoisseur.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Venice Beans",
    description:
      "Indulge in the smooth and sophisticated taste of Venice Beans, inspired by the romantic city itself. Every sip transports you to the canals of Venice.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img3,
    name: "Brazil Beans",
    description:
      "Savor the vibrant and aromatic essence of Brazil Beans, harvested from the lush coffee plantations of Brazil. A truly exotic coffee experience.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[200px] mb-4 flex justify-center items-center"> {/* Adjusted height and centering */}
                  <img
                    src={service.img}
                    alt={service.name}a
                    className="w-full h-full object-cover rounded-2xl shadow-lg transform group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold mb-2">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
