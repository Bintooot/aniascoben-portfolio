import React, { useState } from "react";
import "./ContactMe.css";
import {
  Mail,
  Phone,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
  Send,
  Github,
  MapPin,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../../../data/data";

const ContactMe = (props) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Compose mailto link
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section className="contact-me-section" id={props.id}>
      <div className="contact-me-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="contact-header"
        >
          <div className="section-title-wrapper">
            <span className="section-pill">Get In Touch</span>
            <h2 className="section-title">Let’s Work Together</h2>
            <div className="title-bar" />
          </div>
          <p className="contact-subtitle">
            Have an opportunity, project in mind, or just want to connect? Reach out below!
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Copy Email */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="contact-info-card"
          >
            <h3 className="contact-info-title">Direct Channels</h3>
            <p className="contact-info-desc">
              Feel free to reach out through your preferred platform. I typically respond within 24 hours.
            </p>

            {/* Quick Copy Email Box */}
            <div className="email-copy-box">
              <div className="email-copy-content">
                <span className="email-label">Email Address</span>
                <span className="email-address">{personalInfo.email}</span>
              </div>
              <button
                type="button"
                className={`copy-btn ${copied ? "copied" : ""}`}
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Contact Details List */}
            <ul className="contact-links-list">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-link-item"
                >
                  <span className="contact-link-icon">
                    <Mail size={18} />
                  </span>
                  <div className="contact-link-text">
                    <span className="link-title">Send an Email</span>
                    <span className="link-detail">{personalInfo.email}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="contact-link-item"
                >
                  <span className="contact-link-icon">
                    <Phone size={18} />
                  </span>
                  <div className="contact-link-text">
                    <span className="link-title">Phone / WhatsApp</span>
                    <span className="link-detail">{personalInfo.phone}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <span className="contact-link-icon">
                    <Linkedin size={18} />
                  </span>
                  <div className="contact-link-text">
                    <span className="link-title">LinkedIn</span>
                    <span className="link-detail">Connect professionally</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={personalInfo.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <span className="contact-link-icon">
                    <MessageCircle size={18} />
                  </span>
                  <div className="contact-link-text">
                    <span className="link-title">Messenger</span>
                    <span className="link-detail">Quick messaging</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <span className="contact-link-icon">
                    <Github size={18} />
                  </span>
                  <div className="contact-link-text">
                    <span className="link-title">GitHub</span>
                    <span className="link-detail">Explore code repositories</span>
                  </div>
                </a>
              </li>
            </ul>

            <div className="contact-meta-footer">
              <div className="meta-item">
                <MapPin size={16} />
                <span>Tagum City, Philippines</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>UTC+8 (Philippine Standard Time)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="contact-form-card"
          >
            <h3 className="form-card-title">Send a Quick Message</h3>
            <p className="form-card-desc">
              Have an idea or inquiry? Fill out this form to draft an email directly.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. jane@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Project Discussion / Job Opportunity"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or inquiry..."
                  required
                />
              </div>

              <button
                type="submit"
                className={`submit-message-btn ${submitted ? "success" : ""}`}
              >
                {submitted ? (
                  <>
                    <Check size={18} />
                    <span>Opening Mail Client...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
