import React from "react";
import "./Card.css";
import { ExternalLink, Github, Calendar, CheckCircle2 } from "lucide-react";

const Card = ({
  image,
  title,
  category,
  description,
  stacks = [],
  time,
  github,
  live,
  status,
}) => {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={`${title} project preview`}
          loading="lazy"
        />
        <div className="project-image-overlay" />
        {category && <span className="project-category-tag">{category}</span>}
      </div>

      <div className="project-info-wrapper">
        <div className="project-header-top">
          <h3 className="project-name">{title}</h3>
          {time && (
            <div className="project-timeline">
              <Calendar size={14} />
              <span>{time}</span>
            </div>
          )}
        </div>

        <p className="project-description">{description}</p>

        {stacks && stacks.length > 0 && (
          <div className="tech-stack-container">
            <span className="tech-stack-label">Technologies:</span>
            <div className="tech-stack-pills">
              {stacks.map((tech) => (
                <span key={tech} className="tech-stack-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="project-actions-row">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn github-btn"
              aria-label={`View ${title} source code on GitHub`}
            >
              <Github size={16} />
              <span>GitHub Repo</span>
            </a>
          )}

          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn live-btn"
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          ) : (
            <div className="project-status-badge">
              <CheckCircle2 size={15} />
              <span>{status || "Completed / Internal"}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
