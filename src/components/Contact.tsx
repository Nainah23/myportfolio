// src/components/Contact.tsx;
"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formBody = new FormData();
    formBody.append('name', formData.name);
    formBody.append('email', formData.email);
    formBody.append('message', formData.message);

    try {
      const response = await fetch('https://formspree.io/f/mldeldve', {
        method: 'POST',
        body: formBody,
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again later.');
      }

      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get in Touch</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a
                      href="mailto:kamauwainaina29@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary"
                    >
                      kamauwainaina29@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a
                      href="tel:+254715383470"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary"
                    >
                      +254 715 383 470
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
