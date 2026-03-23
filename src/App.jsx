import { useEffect } from 'react';
import { useCursor } from './hooks/useCursor';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { useSidebar } from './hooks/useSidebar';
import { useTerminalAnimation } from './hooks/useTerminalAnimation';
import './index.css';

function App() {
  const { cursorRef, ringRef, handleHoverEnter, handleHoverLeave } = useCursor();
  const { isOpen: sidebarOpen, openSidebar, closeSidebar } = useSidebar();
  const { ref: aboutRef } = useRevealOnScroll(0.15);
  const { ref: projectsRef } = useRevealOnScroll(0.15);
  const { ref: skillsRef } = useRevealOnScroll(0.15);
  const { termBodyRef, lines } = useTerminalAnimation();

  // Agregar listeners de hover a los botones
  useEffect(() => {
    const links = document.querySelectorAll('a, button');
    links.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverEnter);
      el.addEventListener('mouseleave', handleHoverLeave);
    });

    return () => {
      links.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
    };
  }, [handleHoverEnter, handleHoverLeave]);

  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>

      {/* Navigation */}
      <nav>
        <a href="#" className="logo">
          belén<span>.</span>dev
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about" data-num="01">
              About
            </a>
          </li>
          <li>
            <a href="#projects" data-num="02">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" data-num="03">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" data-num="04">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="hamburger"
          id="hamburger"
          onClick={openSidebar}
          aria-label="menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      ></div>
      <aside className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <button
          className="sidebar-close"
          onClick={closeSidebar}
          aria-label="cerrar menú"
        >
          ✕
        </button>
        <a href="#" className="sidebar-logo">
          belén<span>.</span>dev
        </a>
        <ul className="sidebar-links">
          <li>
            <a href="#about" data-num="01" onClick={closeSidebar}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" data-num="02" onClick={closeSidebar}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" data-num="03" onClick={closeSidebar}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" data-num="04" onClick={closeSidebar}>
              Contact
            </a>
          </li>
        </ul>
        <div className="sidebar-footer">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </aside>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero-inner">
          <div className="hero-tag">
            <i className="fas fa-rocket"></i> Welcome to my portfolio
          </div>
          <h1 className="hero-name">
            Hi, I'm <span className="line2">Belén</span>
            <br /> Junior Developer
          </h1>
          <p className="hero-desc">
            I create clean, modern web experiences with React, JavaScript, and a passion for
            user-centered design.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="glow-blob"></div>
      </section>

      <div className="scroll-hint">
        SCROLL <span className="scroll-indicator"></span>
      </div>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="reveal">
        <div className="about-inner">
          <div>
            <div className="section-label">About Me</div>
            <h2 className="section-title">Who am I?</h2>
            <div className="about-text">
              <p>
                I'm a passionate junior developer from [Location] with a deep interest in creating
                intuitive, performant web applications.
              </p>
              <p>
                With experience in <strong>React</strong>, <strong>JavaScript</strong>, and{' '}
                <strong>CSS</strong>, I love building projects that combine functionality with
                beautiful design.
              </p>
            </div>
            <div className="stack-grid">
              <div className="stack-item">
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="stack-link">
                  <div className="stack-icon">
                    <i className="devicon-html5-plain"></i>
                  </div>
                  <div className="stack-name">HTML5</div>
                </a>
              </div>
              <div className="stack-item">
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="stack-link">
                  <div className="stack-icon">
                    <i className="devicon-css3-plain"></i>
                  </div>
                  <div className="stack-name">CSS3</div>
                </a>
              </div>
              <div className="stack-item">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="stack-link">
                  <div className="stack-icon">
                    <i className="devicon-javascript-plain"></i>
                  </div>
                  <div className="stack-name">JavaScript</div>
                </a>
              </div>
              <div className="stack-item">
                <a href="https://react.dev" className="stack-link">
                  <div className="stack-icon">
                    <i className="devicon-react-original"></i>
                  </div>
                  <div className="stack-name">React</div>
                </a>
              </div>
              <div className="stack-item">
                <a href="https://nodejs.org" className="stack-link">
                  <div className="stack-icon">
                    <i className="devicon-nodejs-plain"></i>
                  </div>
                  <div className="stack-name">Node.js</div>
                </a>
              </div>
              <div className="stack-item">
                <a href="https://www.python.org" className="stack-link">
                  <div className="stack-icon">
                    <i className="devicon-python-plain"></i>
                  </div>
                  <div className="stack-name">Python</div>
                </a>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="terminal">
              <div className="terminal-bar">
                <span className="t-dot" style={{ background: '#ff5f56' }}></span>
                <span className="t-dot" style={{ background: '#ffbd2e' }}></span>
                <span className="t-dot" style={{ background: '#27c93f' }}></span>
                <span className="t-title">terminal.sh</span>
              </div>
              <div className="terminal-body" ref={termBodyRef}>
                {lines.map((line, idx) => (
                  <div key={idx} className="t-line">
                    {line.type === 'cmd' ? (
                      <>
                        <span className="t-prompt">{line.prompt}</span>
                        <span className="t-cmd">{line.text}</span>
                        {line.isTyping && <span className="t-cursor"></span>}
                      </>
                    ) : line.type === 'val' ? (
                      <span className="t-val">{line.text}</span>
                    ) : (
                      <span className="t-out">{line.text}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="accent-corner"></div>
              <div className="accent-corner2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="reveal">
        <div className="projects-header">
          <div>
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">Featured Projects</h2>
          </div>
        </div>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-num">01</div>
            <h3 className="project-title">Project One</h3>
            <p className="project-desc">A brief description of your first project goes here.</p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">JavaScript</span>
              <span className="tag">CSS</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">
                <i className="fab fa-github"></i> Code
              </a>
              <a href="#" className="project-link">
                <i className="fas fa-arrow-up-right-from-square"></i> Live
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-num">02</div>
            <h3 className="project-title">Project Two</h3>
            <p className="project-desc">Another great project with interesting features.</p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">
                <i className="fab fa-github"></i> Code
              </a>
              <a href="#" className="project-link">
                <i className="fas fa-arrow-up-right-from-square"></i> Live
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="reveal">
        <div className="section-label">Expertise</div>
        <h2 className="section-title">Skills & Experience</h2>
        <div className="skills-row">
          <div className="skill-bar-item">
            <div className="skill-bar-header">
              <span className="skill-bar-name">JAVASCRIPT</span>
              <span className="skill-bar-level">85%</span>
            </div>
            <div className="skill-bar-track">
              <div className="skill-bar-fill" data-width="85"></div>
            </div>
          </div>
          <div className="skill-bar-item">
            <div className="skill-bar-header">
              <span className="skill-bar-name">REACT</span>
              <span className="skill-bar-level">80%</span>
            </div>
            <div className="skill-bar-track">
              <div className="skill-bar-fill" data-width="80"></div>
            </div>
          </div>
          <div className="skill-bar-item">
            <div className="skill-bar-header">
              <span className="skill-bar-name">CSS3</span>
              <span className="skill-bar-level">90%</span>
            </div>
            <div className="skill-bar-track">
              <div className="skill-bar-fill" data-width="90"></div>
            </div>
          </div>
          <div className="skill-bar-item">
            <div className="skill-bar-header">
              <span className="skill-bar-name">NODE.JS</span>
              <span className="skill-bar-level">75%</span>
            </div>
            <div className="skill-bar-track">
              <div className="skill-bar-fill" data-width="75"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="section-label">Get in touch</div>
        <h2 className="contact-big">
          Let's build something <span className="accent">amazing</span>
        </h2>
        <p className="contact-sub">I'm always open to new opportunities and collaborations.</p>
        <div className="contact-links">
          <a href="mailto:your@email.com" className="btn-primary">
            Send Email
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-outline">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-outline">
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2024 Belén — <span className="accent">Developer</span>
        </p>
        <div className="footer-links"></div>
      </footer>
    </>
  );
}

export default App;
