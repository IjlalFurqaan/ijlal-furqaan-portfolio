import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Paperclip, X } from 'lucide-react';

// Constants
const PRIMARY_COLOR = '#00ff99';
const BACKGROUND_COLOR = '#2b2b2b';
const TEXT_COLOR = '#fff';
const BORDER_RADIUS = '8px';

// Styled Components
const ContactSection = styled.section`
  padding: 80px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
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
    background-color: ${PRIMARY_COLOR};
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ContactForm = styled(motion.form)`
  background-color: ${BACKGROUND_COLOR};
  border-radius: 15px;
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const InputStyles = `
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: ${BORDER_RADIUS};
  border: 1px solid ${PRIMARY_COLOR};
  background-color: #444;
  color: ${TEXT_COLOR};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${PRIMARY_COLOR};
    box-shadow: 0 0 10px ${PRIMARY_COLOR};
  }
`;

const Input = styled.input`
  ${InputStyles}
`;

const TextArea = styled.textarea`
  ${InputStyles}
`;

const FileInputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  background-color: #444;
  color: ${TEXT_COLOR};
  border-radius: ${BORDER_RADIUS};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555;
  }

  svg {
    margin-right: 10px;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FileList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
`;

const FileItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #444;
  color: ${TEXT_COLOR};
  padding: 5px 10px;
  border-radius: ${BORDER_RADIUS};
  margin-bottom: 5px;
`;

const RemoveFileButton = styled.button`
  background: none;
  border: none;
  color: ${TEXT_COLOR};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

const SubmitButton = styled(motion.button)`
  background-color: ${PRIMARY_COLOR};
  color: #000;
  border: none;
  border-radius: ${BORDER_RADIUS};
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
    message: '',
  });
  const [attachments, setAttachments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setAttachments([...attachments, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    const newAttachments = attachments.filter((_, i) => i !== index);
    setAttachments(newAttachments);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    
    attachments.forEach((file, index) => {
      formDataToSend.append(`attachments[${index}]`, file);
    });

    try {
      const response = await axios.post('http://localhost:3000/api/contact', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setAttachments([]);
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
        <FileInputWrapper>
          <FileInputLabel htmlFor="file-input">
            <Paperclip size={20} />
            Attach Files
          </FileInputLabel>
          <HiddenFileInput
            id="file-input"
            type="file"
            multiple
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </FileInputWrapper>
        {attachments.length > 0 && (
          <FileList>
            {attachments.map((file, index) => (
              <FileItem key={index}>
                {file.name}
                <RemoveFileButton onClick={() => handleRemoveFile(index)}>
                  <X size={16} />
                </RemoveFileButton>
              </FileItem>
            ))}
          </FileList>
        )}
        <SubmitButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
        {submitStatus === 'success' && <p style={{color: PRIMARY_COLOR}}>Message sent successfully!</p>}
        {submitStatus === 'error' && <p style={{color: '#ff6666'}}>Failed to send message. Please try again.</p>}
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;