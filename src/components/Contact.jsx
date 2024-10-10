import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';
import axios from 'axios';

// Keyframes for background animation (color transition)
const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Keyframes for floating dots
const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const ContactSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(-45deg, #ffcc66, #ff99cc, #66ffcc, #99ccff);
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 15s ease infinite;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const FloatingDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  animation: ${float} 5s ease-in-out infinite;
  opacity: 0.5;

  &:nth-of-type(1) { top: 10%; left: 20%; animation-duration: 6s; }
  &:nth-of-type(2) { top: 40%; left: 70%; animation-duration: 7s; }
  &:nth-of-type(3) { top: 80%; left: 50%; animation-duration: 5.5s; }
  &:nth-of-type(4) { top: 30%; left: 10%; animation-duration: 6.5s; }
  &:nth-of-type(5) { top: 60%; left: 80%; animation-duration: 4.5s; }
`;

const Title = styled.h2`
  color: #333;
  font-size: 3rem;
  margin-bottom: 40px;
  font-weight: bold;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background-color: #00ff99;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ContactForm = styled(motion.form)`
  background-color: #2b2b2b;
  border-radius: 15px;
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #00ff99;
  background-color: #444;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00ff99;
    box-shadow: 0 0 10px #00ff99;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #00ff99;
  background-color: #444;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00ff99;
    box-shadow: 0 0 10px #00ff99;
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: #00ff99;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #00cc7a;
    transform: translateY(-3px);
  }

  &:active {
    background-color: #009957;
    transform: translateY(0);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
     
      const response = await axios.post('http://localhost:3000/api/contact', formData);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <ContactSection>
      <FloatingDot />
      <FloatingDot />
      <FloatingDot />
      <FloatingDot />
      <FloatingDot />
      
      <Title>Contact Me</Title>
      <ContactForm
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          required
        />
        <SubmitButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
        {submitStatus === 'success' && <p style={{color: '#00ff99'}}>Message sent successfully!</p>}
        {submitStatus === 'error' && <p style={{color: '#ff6666'}}>Failed to send message. Please try again.</p>}
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;