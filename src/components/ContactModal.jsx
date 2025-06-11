import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState(null);

  const contactDetails = {
    Email: 'bookings@audreywilliams-joseph.co.uk',
    linkedin: 'http://linkedin.com/in/audrey-williams-joseph-cep-41901b354',
    consultation: 'https://calendly.com/bookings-audreywilliams-joseph/30min',
    phone: '+447956130545',
    address: 'The Granary,80 Abbey Road Barking Essex, IG117BT',
  };

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl p-6 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#708238]">
              Contact Information
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {Object.entries(contactDetails).map(([field, value]) => (
              <div
                key={field}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
              >
                <div>
                  <p className="text-sm text-gray-500 capitalize">{field}</p>
                  <p className="text-gray-800">{value}</p>
                </div>
                <button
                  onClick={() => handleCopy(value, field)}
                  className="ml-4 p-2 text-[#708238] hover:bg-[#708238] hover:text-white rounded-lg transition-colors"
                >
                  {copiedField === field ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;
