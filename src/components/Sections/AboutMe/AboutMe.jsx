import React from "react";
import {
  MapPin,
  GraduationCap,
  Instagram,
  Github,
  Linkedin,
  Code,
  Layers,
  Sparkles,
  ExternalLink,
  Building2,
  Server,
  CheckCircle2,
} from "lucide-react";
import "./AboutMe.css";
import Card from "../../Card/AboutMeCard/Card";
import { motion } from "framer-motion";
import { personalInfo } from "../../../data/data";

const AboutMe = (props) => {
  return (
    <section className="about-me-section" id={props.id}>
      <div className="about-me-content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="about-header"
        >
          <div className="section-title-wrapper">
            <span className="section-pill">Profile & Specialization</span>
            <h2 className="section-title">About Me</h2>
            <div className="title-bar" />
          </div>
          <p className="about-subtitle">
            Bridging modern frontend engineering with enterprise ERP workflows
          </p>
        </motion.div>

        {/* 1. Horizontal Metric Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="about-stats-bar"
        >
          <Card
            title={personalInfo.experienceYears}
            subtitle="Years Experience"
            icon={<Layers size={24} />}
          />
          <Card
            title={personalInfo.completedProjects}
            subtitle="Projects Completed"
            icon={<Code size={24} />}
          />
          <Card
            title="SAP & ERPNext"
            subtitle="Functional ERP Focus"
            icon={<Building2 size={24} />}
          />
          <Card
            title={personalInfo.technologiesCount}
            subtitle="Tech Stack Tools"
            icon={<Sparkles size={24} />}
          />
        </motion.div>

        {/* 2. Bento Grid Layout */}
        <div className="about-bento-grid">
          {/* Card 1: Core Story & Frontend Craft (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="bento-card bento-span-7"
          >
            <div className="bento-card-header">
              <div className="bento-icon-badge">
                <Code size={20} />
              </div>
              <h3 className="bento-card-title">Frontend Craft & Engineering</h3>
            </div>

            <p className="bento-card-lead">
              I specialize in turning wireframes and complex business requirements into fast,
              accessible, and visually compelling web applications.
            </p>

            <p className="bento-card-desc">
              My core stack revolves around <strong>React</strong>, <strong>JavaScript (ES6+)</strong>,
              and <strong>modern CSS frameworks</strong> (Tailwind CSS, CSS Modules). I focus on delivering
              intuitive digital interfaces where design fidelity meets clean, scalable architecture.
            </p>

            <div className="bento-highlights">
              <div className="bento-highlight-item">
                <CheckCircle2 size={16} className="highlight-check" />
                <span>Pixel-accurate Figma design translation</span>
              </div>
              <div className="bento-highlight-item">
                <CheckCircle2 size={16} className="highlight-check" />
                <span>Fluid micro-interactions with Framer Motion</span>
              </div>
              <div className="bento-highlight-item">
                <CheckCircle2 size={16} className="highlight-check" />
                <span>Mobile-first, cross-browser responsive design</span>
              </div>
            </div>

            {/* Social Connect Pills */}
            <div className="bento-socials-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-chip"
              >
                <Github size={15} />
                <span>GitHub</span>
                <ExternalLink size={12} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-chip"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
                <ExternalLink size={12} />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-chip"
              >
                <Instagram size={15} />
                <span>Instagram</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Profile & Education (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="bento-card bento-span-5"
          >
            <div className="bento-card-header">
              <div className="bento-icon-badge">
                <GraduationCap size={20} />
              </div>
              <h3 className="bento-card-title">Background & Status</h3>
            </div>

            <div className="bento-profile-list">
              <div className="bento-profile-item">
                <span className="profile-item-icon">
                  <GraduationCap size={18} />
                </span>
                <div className="profile-item-content">
                  <span className="profile-label">Education</span>
                  <span className="profile-value">{personalInfo.degree}</span>
                  <span className="profile-subvalue">{personalInfo.education}</span>
                </div>
              </div>

              <div className="bento-profile-item">
                <span className="profile-item-icon">
                  <MapPin size={18} />
                </span>
                <div className="profile-item-content">
                  <span className="profile-label">Location</span>
                  <span className="profile-value">{personalInfo.location}</span>
                </div>
              </div>

              <div className="bento-availability-card">
                <div className="availability-info">
                  <span className="availability-title">Current Status</span>
                  <span className="availability-text">Open for new roles & freelance projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Enterprise ERP Systems (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="bento-card bento-span-6"
          >
            <div className="bento-card-header">
              <div className="bento-icon-badge">
                <Building2 size={20} />
              </div>
              <h3 className="bento-card-title">ERP Systems: Functional SAP B1 &amp; ERPNext</h3>
            </div>

            <p className="bento-card-desc">
              Functional knowledge in <strong>Enterprise Resource Planning</strong> systems.
              Experienced in mapping operational business processes across inventory tracking,
              procurement lifecycles, sales orders, CRM, and master data logic.
            </p>

            <p className="bento-card-desc">
              This enterprise foundation enables me to bridge frontend portals with backend ERP
              data logic, such as in municipal request systems and business workflows.
            </p>

            <div className="bento-tag-pills">
              <span className="bento-tag">SAP B1 (Functional)</span>
              <span className="bento-tag">ERPNext</span>
              <span className="bento-tag">Business Process Mapping</span>
              <span className="bento-tag">Inventory &amp; Sales</span>
              <span className="bento-tag">Frappe Framework</span>
            </div>
          </motion.div>

          {/* Card 4: Full-Stack & Database Foundations (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
            className="bento-card bento-span-6"
          >
            <div className="bento-card-header">
              <div className="bento-icon-badge">
                <Server size={20} />
              </div>
              <h3 className="bento-card-title">Full-Stack & Database Foundations</h3>
            </div>

            <p className="bento-card-desc">
              Proficient working knowledge in server-side technologies including <strong>Node.js</strong> and
              <strong> Express.js</strong>, along with relational and NoSQL databases
              (<strong>MongoDB</strong>, <strong>PostgreSQL</strong>, <strong>MySQL</strong>).
            </p>

            <p className="bento-card-desc">
              This cross-stack literacy allows me to understand API contracts, design efficient data
              schemas, and communicate seamlessly across frontend and backend environments.
            </p>

            <div className="bento-tag-pills">
              <span className="bento-tag">Node.js</span>
              <span className="bento-tag">Express.js</span>
              <span className="bento-tag">MongoDB</span>
              <span className="bento-tag">PostgreSQL</span>
              <span className="bento-tag">RESTful APIs</span>
              <span className="bento-tag">Docker Basics</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
