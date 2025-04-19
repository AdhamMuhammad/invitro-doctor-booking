import { useState } from "react";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <section className="pt-16">
      <footer className="bg-[#F3FFFE] shadow-sm text-white py-16">
        <div className="px-8">
          {/* Footer Content Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Company Name and Description */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-800">InVitro Health</h2>
              <p className="text-gray-400">
                Empowering individuals and communities to take control of their health with innovative technology solutions.
              </p>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
              <div>
                <h4 className="font-semibold text-blue-800 mb-4">Company</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#privacy"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#careers"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-blue-800 mb-4">Support</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>
                    <a
                      href="#faq"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                      Contact Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#chat"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-blue-800 mb-4">Follow Us</h4>
                <div className="flex gap-4 text-gray-400">
                  <a
                    href="#twitter"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a
                    href="#linkedin"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a
                    href="#facebook"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                    <i className="fab fa-facebook text-2xl"></i>
                  </a>
                  <a
                    href="#instagram"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-12 pt-6 text-center text-blue-800 font-semibold text-md">
            <p>&copy; {new Date().getFullYear()} InVitro Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
