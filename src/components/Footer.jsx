import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/greenpastureLogo.png';

export const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 border-t border-green-800 pt-10">

        {/* Left Side: Logo & Info */}
        <div className="flex items-center gap-4 flex-col lg:flex-row text-center lg:text-left">
          <img src={Logo} alt="Kelis Concierge Logo" className="h-16 w-auto rounded-md shadow-md" />
          <div>
            <h4 className="text-xl font-semibold">Green Pasture Believers Fellowship</h4>
            <p className="text-sm text-gray-300">
             Our Goal is to see Jesus REVEALED, GLORIFIED AND HIS BODY EDIFIED.
            </p>
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center gap-4">
          {[
            {
              icon: <FaTwitter />,
              href: 'https://x.com/ConciergeKelis?t=pNBQ41lAFQ0M6ICEgJ8pyA&s=09',
            },
            {
              icon: <FaFacebookF />,
              href: 'https://www.facebook.com/KelisCon',
            },
            {
              icon: <FaInstagram />,
              href: 'https://www.instagram.com/keliscon?igsh=MTRza2ozemIydWJsbQ==',
            },
            {
              icon: <FaEnvelope />,
              href: 'mailto:kelisconciergeservices@gmail.com',
            },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-green-800 hover:bg-green-700 text-white transition duration-300 hover:scale-105"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-sm text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Green Pasture Believers Fellowship. All rights reserved.
      </p>
    </footer>
  );
};
