// src/components/Contact.js
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  padding: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  min-height: 150px;
`;

const SubmitButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
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
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </Title>
      <Form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
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
          required
        />
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;