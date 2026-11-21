import React from "react";
import "./Service.css";
import Card from "../../Card/ServiceCard/Card";
import { Code, PanelsTopLeft, Waypoints, Server, Building2, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const servicesList = [
  {
    id: 1,
    title: "Frontend Web Development",
    icon: <Code size={26} />,
    description:
      "Transforming concepts and wireframes into fast, interactive, and modular web applications using React, modern JavaScript (ES6+), and clean component architecture.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "Component Architecture"],
  },
  {
    id: 2,
    title: "ERP Systems & Enterprise Workflows",
    icon: <Building2 size={26} />,
    description:
      "Functional understanding of Enterprise Resource Planning workflows with SAP Business One and ERPNext. Skilled in business process mapping, inventory lifecycles, sales & procurement flows, and operational data organization.",
    tags: ["SAP B1 (Functional)", "ERPNext", "Business Process Mapping", "Inventory & Procurement", "Frappe Framework"],
  },
  {
    id: 3,
    title: "UI/UX & Design Implementation",
    icon: <PanelsTopLeft size={26} />,
    description:
      "Bridging the gap between design and code by translating Figma mockups into pixel-perfect, accessible, and fluid user interfaces with intuitive interactions.",
    tags: ["Figma to Code", "CSS Modules", "Responsive Design", "Framer Motion"],
  },
  {
    id: 4,
    title: "API Integration & Real-Time Data",
    icon: <Waypoints size={26} />,
    description:
      "Seamlessly connecting frontend interfaces with RESTful APIs, third-party services, and asynchronous data pipelines for dynamic, real-time application behavior.",
    tags: ["RESTful APIs", "Async Data", "State Management", "API Consumption"],
  },
  {
    id: 5,
    title: "Full-Stack Foundations & Database",
    icon: <Server size={26} />,
    description:
      "Building backend endpoints and connecting databases using Node.js, Express, MongoDB, and PostgreSQL, ensuring smooth cross-stack collaboration.",
    tags: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker Basics"],
  },
  {
    id: 6,
    title: "Workflow Automation & Logic Design",
    icon: <Workflow size={26} />,
    description:
      "Structuring multi-stage approval lifecycles, role-based access rules, automated request tracking, and operational validation pipelines for businesses and organizations.",
    tags: ["Approval Pipelines", "Role-Based Access", "Business Logic", "Data Validation"],
  },
];

const Services = (props) => {
  return (
    <section className="services-section" id={props.id}>
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="services-header"
        >
          <div className="section-title-wrapper">
            <span className="section-pill">Capabilities</span>
            <h2 className="section-title">What I Do</h2>
            <div className="title-bar" />
          </div>
          <p className="services-subtitle">
            Frontend craftsmanship, enterprise ERP solutions, and full-stack integration
          </p>
        </motion.div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <Card
                title={service.title}
                icon={service.icon}
                description={service.description}
                tags={service.tags}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
