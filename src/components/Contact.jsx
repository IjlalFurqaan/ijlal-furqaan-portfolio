import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 60px 0;
  background-color: #f7f7f7;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  font-size: 3rem;
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  background-color: #2b2b2b;
  border-radius: 15px;
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #00ff99;
  background-color: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff99;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #00ff99;
  background-color: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff99;
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
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00cc7a;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactSection>
      <Title>Contact Me</Title>
      <ContactForm onSubmit={handleSubmit}>
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
          required
        />
        <SubmitButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Send Message
        </SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
