import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterLogo from "../../assets/footerimg.jpg";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact Us",
    link: "https://wa.me/972508815855?text=Hey,%20I%20want%20to%20hear%20about%20your%20coffee%20beans.",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterLogo})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/70 min-h-[400px] flex items-center justify-center">
        <div className="container grid md:grid-cols-3 pb-20 pt-10 gap-8">
          {/* Company Details */}
          <div className="px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-3xl sm:text-4xl font-cursive hover:text-primary transition-colors duration-300"
            >
              Best Beans
            </a>
            <p className="pt-4 text-lg leading-relaxed">
              Crafted coffee, cozy vibes. Discover the best coffee experience at Best Beans, where quality meets passion.
            </p>
          </div>
          {/* Quick Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 gap-8">
            {/* First Col Links */}
            <div className="px-4">
              <h1 className="text-2xl font-semibold mb-3">Links</h1>
              <ul className="space-y-3 text-lg">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:text-primary hover:underline transition-colors duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="px-4 col-span-2 sm:col-auto">
              <h1 className="text-2xl font-semibold mb-3">Address</h1>
              <div className="text-lg">
                <p className="mb-3">Tel Aviv, Israel</p>
                <p>+972 1234567890</p>

                {/* Social Links */}
                <div className="flex items-center gap-4 mt-6">
                  <a href="https://www.instagram.com/roychen.97/">
                    <FaInstagram className="text-3xl hover:text-primary transition-colors duration-300" />
                  </a>
                  <a href="https://www.facebook.com/roy.chen97/">
                    <FaFacebook className="text-3xl hover:text-primary transition-colors duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/roychen651/">
                    <FaLinkedin className="text-3xl hover:text-primary transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
