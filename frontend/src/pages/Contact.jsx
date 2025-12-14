import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import api from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      await api.post('/contact', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to send message';
      setErrors({ submit: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Get In Touch
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
            Have a question or want to work together? Send me a message!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="card mb-6">
                <h3 className="text-xl font-semibold text-[#7331FF] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:abdifatahmawlidhussein01@gmail.com"
                      className="text-[#FF7331] hover:underline"
                    >
                      abdifatahmawlidhussein01@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+252634791732"
                      className="text-[#FF7331] hover:underline"
                    >
                      +252 63 4791732
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>Borama, Somaliland</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-[#7331FF] mb-4">
                  Social Media
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/abdifatahmawl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#FF7331] transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="http://www.linkedin.com/in/abdifatah-mawlid-hussein-34642a220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#FF7331] transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://x.com/abdifatahmawlid?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#FF7331] transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                    <span>Twitter</span>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=+252634791732"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#FF7331] transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={20} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`input-field ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                  )}
                </div>

                {errors.submit && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded">
                    {errors.submit}
                  </div>
                )}

                {success && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-4 py-3 rounded">
                    Thank you for your message! I will get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

