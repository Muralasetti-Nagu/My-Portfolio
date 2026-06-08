import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Field checks
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.subject.trim()) {
      setStatus('error');
      setErrorMsg('Please enter a subject.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your message.');
      return;
    }

    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="section-subtitle">
          Have an opportunity, a question, or want to collaborate? Send me a message and I'll get back to you shortly.
        </p>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              I am open to discuss web development internships, junior full-stack developer roles, or collaborations on AI tools.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-card glass-panel">
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-text">
                  <span>Email</span>
                  <a href="mailto:nagumuralasetti59@gmail.com">nagumuralasetti59@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail-card glass-panel">
                <div className="contact-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-text">
                  <span>Phone</span>
                  <a href="tel:+919391775574">+91 93917 75574</a>
                </div>
              </div>

              <div className="contact-detail-card glass-panel">
                <div className="contact-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-text">
                  <span>Location</span>
                  <p>Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container glass-panel">
            {status === 'success' ? (
              <div className="success-message">
                <CheckCircle2 size={56} className="success-icon animate-float" />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {status === 'error' && (
                  <div className="error-banner">
                    <AlertCircle size={18} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Name"
                    disabled={status === 'sending'}
                  />
                </div>
                <br></br>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="name@example.com"
                    disabled={status === 'sending'}
                  />
                </div>
                <br></br>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Job opportunity, collaboration, etc."
                    disabled={status === 'sending'}
                  />
                </div>
                <br></br>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    className="form-control"
                    placeholder="Your Message..."
                    disabled={status === 'sending'}
                  ></textarea>
                </div>
                <br></br>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
