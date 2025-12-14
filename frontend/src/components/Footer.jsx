import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111318] dark:bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Abdifatah Mawlid</h3>
            <p className="text-gray-400">
              Software Engineer passionate about building innovative solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/abdifatahmawl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF7331] transition-colors duration-200 flex items-center gap-2"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
              <a
                href="http://www.linkedin.com/in/abdifatah-mawlid-hussein-34642a220"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF7331] transition-colors duration-200 flex items-center gap-2"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/abdifatahmawlid?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF7331] transition-colors duration-200 flex items-center gap-2"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
                <span>Twitter</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+252634791732"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF7331] transition-colors duration-200 flex items-center gap-2"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:abdifatahmawlidhussein01@gmail.com"
                className="text-gray-400 hover:text-[#FF7331] transition-colors duration-200 flex items-center gap-2"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
                <span>abdifatahmawlidhussein01@gmail.com</span>
              </a>
              <a
                href="tel:+252634791732"
                className="text-gray-400 hover:text-[#FF7331] transition-colors duration-200 flex items-center gap-2"
                aria-label="Phone"
              >
                <FaPhone size={20} />
                <span>+252 63 4791732</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Abdifatah Mawlid Hussein. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

