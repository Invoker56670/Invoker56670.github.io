
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Cpu, Globe, Rocket, Terminal, Book, Award, Briefcase, ChevronRight, Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import "../../styles/index.css";

import TicTacToe from '../TicTacToe';
import Typewriter from '../Typewriter';
import SpidermanDecoration from '../SpidermanDecoration';

const Section = ({ children, title, id }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section-container"
    >
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </motion.div>
  );
};

const ExperienceCard = ({ role, date, company, description, tech }) => (
  <motion.div
    className="experience-card"
    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
  >
    <div className="card-header">
      <div>
        <h3 className="card-role">{role}</h3>
        <p className="card-company">{company}</p>
      </div>
      <span className="card-date">{date}</span>
    </div>
    <ul className="card-description">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    {tech && <p className="card-tech">{tech}</p>}
  </motion.div>
);

const MatrixCard = ({ role, date, company, description, tech }) => (
  <motion.div
    className="matrix-card"
    whileHover={{ y: -5 }}
  >
    <div className="card-header">
      <div>
        <h3 className="card-role">{role}</h3>
        <p className="card-company">{company}</p>
      </div>
      <span className="card-date">{date}</span>
    </div>
    <Typewriter lines={description} />
    {tech && <p className="card-tech">{tech}</p>}
  </motion.div>
);

const Profile = ({ onTriggerSignal }) => {
  return (
    <div className="profile-wrapper">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        style={{ position: 'relative' }} // For Bat-Signal positioning
      >
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          style={{ position: 'absolute', top: -50, right: 0, opacity: 0.6, transform: 'rotate(-20deg)', cursor: 'pointer', zIndex: 100 }}
          whileHover={{ opacity: 1, scale: 1.2, filter: "drop-shadow(0 0 10px rgba(255, 237, 74, 0.5))" }}
          title="Summon the Knight"
          onClick={onTriggerSignal}
        >
          <svg width="100" height="60" viewBox="0 0 100 60" fill="currentColor" color="#fbbf24">
            <path d="M50 35 C40 35 30 25 20 25 C15 25 10 30 5 20 C10 10 20 15 25 10 C30 5 40 10 50 20 C60 10 70 5 75 10 C80 15 90 10 95 20 C90 30 85 25 80 25 C70 25 60 35 50 35 Z" />
          </svg>
        </motion.div>

        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
          <h2 className="hero-greeting" style={{ fontSize: '2rem', color: '#a0a0a0', marginBottom: '0.5rem', fontWeight: 400 }}>
            Hi, I'm <span style={{ color: '#fff', fontWeight: 700 }}>Aryan Roy</span> <span className="wave-emoji" style={{ display: 'inline-block' }}>👋</span>
          </h2>
          <h1 className="hero-title">
            First, I solve the <span className="highlight">problem</span>.<br />
            Then, I write the <span className="highlight-code">code</span>.
          </h1>
        </motion.div>

        <motion.p variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="hero-bio">
          A <b>3rd-year B.Tech (Hons)</b> student at <span className="highlight">Adamas University</span> specializing in AI & ML.
          Also pursuing a minor in AI from <span className="highlight">IIT Ropar</span>.
          I embody a <span className="inline-icon"><Rocket size={18} /></span> high-velocity approach to building software,
          blending <span className="inline-icon"><Terminal size={18} /></span> logic with creative <span className="inline-icon"><Code size={18} /></span> magic.
        </motion.p>

        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
          <a href="#contact" className="hero-status" style={{ textDecoration: 'none' }}>
            <span className="status-badge pulse"></span> Available for new projects
          </a>
        </motion.div>
      </motion.section>

      {/* Philosophy / About */}
      <Section>
        <p className="philosophy-text">
          My development philosophy can be summed up in two words: <b>Innovation</b> and <b>Velocity</b>.
          Make things that <span className="highlight">matter</span>, and move fast while doing it.
          From <Globe className="inline-icon" size={20} /> web apps to <Cpu className="inline-icon" size={20} /> IoT sensors,
          I love exploring the bleeding edge of tech.
        </p>
      </Section>

      {/* Skills Grid */}
      <Section title="Tech Stack">
        <div className="skills-grid">
          {['Python', 'C', 'Java', 'JavaScript', 'SQL', 'FastAPI', 'React', 'TensorFlow', 'PyTorch', 'Firebase', 'Docker', 'Kubernetes'].map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <ExperienceCard
          role="Market Data Analyst"
          company="IBA Group of Industries | Remote"
          date="Dec 2024 -- Present"
          description={[
            "Analyzed customer engagement metrics to optimize strategies."
          ]}
          tech="Data Analytics"
        />
        {/* Added detailed projects as Experience per user request to expand regions */}
      </Section>

      {/* Projects - Matrix Style */}
      <Section title="Selected Works">
        <div className="projects-grid">
          <MatrixCard
            role="Docutag-AI"
            company="docutag-ai.vercel.app"
            date="June 2025"
            description={[
              "Document-agnostic parsing platform using Groq (Llama-3).",
              "Scalable FastAPI backend processing unstructured text."
            ]}
            tech="Python, FastAPI, Llama-3, Firebase"
          />
          <MatrixCard
            role="Triple S: Road Safety Ecosystem"
            company="Coimbatore Smart City"
            date="Jan 2025 - Aug 2025"
            description={[
              "Accident Hotspot Prediction using AI models on historical data.",
              "IoT-enabled sensors for instant accident detection.",
              "Gamified mobile app for community engagement."
            ]}
            tech="AI, IoT, TensorFlow, Analytics"
          />
          <MatrixCard
            role="Virtual Herbal Garden (AR/VR)"
            company="AruyaVeda"
            date="Aug 2024 - Present"
            description={[
              "Immersive 3D platform for medicinal plants education.",
              "NLP-based AI chatbot for natural remedies.",
              "Preserving traditional knowledge via Augmented Reality."
            ]}
            tech="Unity, C#, NLP, AR"
          />
          <MatrixCard
            role="Modular HydroBot"
            company="Epsilon-X"
            date="Jan 2024 - Present"
            description={[
              "Versatile robot with WiFi cameras and ultrasonic sensors.",
              "Adaptable for agriculture, maritime, and disaster management.",
              "Real-time situational assessment to 2m depth."
            ]}
            tech="C++, Arduino, Robotics"
          />
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        <motion.div
          className="education-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.div
            className="education-item"
            variants={{
              hidden: { x: -30, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
            }}
          >
            <div className="edu-header">
              <h3>Indian Institute of Technology, Ropar</h3>
              <span>Nov 2024 - Apr 2026</span>
            </div>
            <p>Minor in Artificial Intelligence (Certification)</p>
          </motion.div>

          <motion.div
            className="education-item"
            variants={{
              hidden: { x: -30, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
            }}
          >
            <div className="edu-header">
              <h3>Adamas University</h3>
              <span>Jun 2023 - Jun 2027</span>
            </div>
            <p>B.Tech in Computer Science (AI & ML) | Hons.</p>
          </motion.div>

          <motion.div
            className="education-item"
            variants={{
              hidden: { x: -30, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
            }}
          >
            <div className="edu-header">
              <h3>IIRS, ISRO</h3>
              <span>Apr 2024 - Apr 2025</span>
            </div>
            <p>Basics of Remote Sensing, GIS & GNSS (Grade: A)</p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Achievements */}
      {/* Achievements - Spiderman Themed */}
      <div style={{ position: 'relative' }}> {/* Wrapper for Spider anchoring */}
        <SpidermanDecoration />
        <Section title={<span style={{ color: '#ef4444' }}>Honors & Web-Slinging</span>}>
          <motion.ul
            className="achievements-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {[
              {
                label: "4th Place",
                content: <>Coding Competition, <span style={{ textDecoration: 'underline', textDecorationColor: '#ef4444' }}>Indian Institute of Technology Kharagpur</span> - <span style={{ textDecoration: 'underline' }}>November 2025</span></>
              },
              {
                label: "Second Runner Up",
                content: <>IEM Hackathon (Main Event) & 1st Prize (Ad Event) - <span style={{ textDecoration: 'underline' }}>Jul 2025</span></>
              },
              {
                label: "Selected",
                content: <>ICDMAI 2025 - Medical Chatbot Development (<span style={{ textDecoration: 'underline' }}>Dec 2024</span>)</>
              },
              {
                label: "Global Rank 89",
                content: <>SIT ICOE Hackathon (Top 7%) - <span style={{ textDecoration: 'underline' }}>Apr 2024</span></>
              },
              {
                label: "Participant",
                content: <>IEEE Patent Conclave - <span style={{ textDecoration: 'underline' }}>Mar 2024</span></>
              }
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { x: -50, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
                }}
                style={{ borderBottom: '1px solid #ef444433' }}
              >
                <Award size={16} className="list-icon" style={{ color: '#ef4444' }} />
                <span style={{ color: '#fed7aa' }}>
                  <b style={{ color: '#ef4444' }}>{item.label}:</b> {item.content}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </Section>
      </div>

      {/* Contact Split View */}
      <Section id="contact">
        <div className="contact-split">
          <div className="contact-left">
            <h2 className="big-contact-title">Let's build something <br /><i>impossible</i>.</h2>
            <p>Always searching for new problems, fun teams, and great ideas.</p>
            <div className="contact-links">
              <a href="mailto:aryanroy56670@gmail.com" className="contact-link"><Mail size={18} /> aryanroy56670@gmail.com</a>
              <a href="https://linkedin.com/in/invokress" className="contact-link"><Linkedin size={18} /> linkedin.com/in/invokress</a>
            </div>
            <div className="contact-meta">
              <span><MapPin size={14} /> Kolkata, India</span>
              <span><Phone size={14} /> +91 9674389386</span>
            </div>
          </div>
          <div className="contact-right">
            <div className="matrix-game-wrapper">
              <TicTacToe />
            </div>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default Profile;

