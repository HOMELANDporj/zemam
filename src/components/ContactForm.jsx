import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPhone, FaPaperPlane } from 'react-icons/fa';
import './ContactForm.css';
import analytics from '../utils/analytics';
import { useToast } from './ToastContext';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSuccess, showError } = useToast();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Track form submission
      analytics.trackContactForm();
      
      // Show success toast
      showSuccess('Message sent successfully! We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      showError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Send us a Message</h3>
      
      <div className="form-group">
        <div className="input-wrapper">
          <FaUser className="input-icon" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
        </div>
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
        </div>
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <div className="input-wrapper">
          <FaPhone className="input-icon" />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone (Optional)"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className={errors.subject ? 'error' : ''}
          />
        </div>
        {errors.subject && <span className="error-message">{errors.subject}</span>}
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={errors.message ? 'error' : ''}
        />
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      <button 
        type="submit" 
        className="submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="spinner"></div>
            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm; 