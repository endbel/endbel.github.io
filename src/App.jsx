import { useEffect } from 'react';
import { useCursor } from './hooks/useCursor';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { useSidebar } from './hooks/useSidebar';
import { useTerminalAnimation } from './hooks/useTerminalAnimation';

function App() {
  const { cursorRef, ringRef, handleHoverEnter, handleHoverLeave } = useCursor();
  const { isOpen: sidebarOpen, openSidebar, closeSidebar } = useSidebar();
  const { ref: aboutRef } = useRevealOnScroll(0.15);
  const { ref: projectsRef } = useRevealOnScroll(0.15);
  const { ref: skillsRef } = useRevealOnScroll(0.15);
  const { termBodyRef, lines } = useTerminalAnimation();

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
          belén<span>.dev</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about" data-num="01">
              about
            </a>
          </li>
          <li>
            <a href="#projects" data-num="02">
              projects
            </a>
          </li>
          <li>
            <a href="#skills" data-num="03">
              skills
            </a>
          </li>
          <li>
            <a href="#contact" data-num="04">
              contact
            </a>
          </li>
        </ul>
        <button className="hamburger" onClick={openSidebar} aria-label="menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
      <aside className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <button className="sidebar-close" onClick={closeSidebar} aria-label="cerrar menú">
          ✕
        </button>
        <a href="#" className="sidebar-logo">
          belén<span>.dev</span>
        </a>
        <ul className="sidebar-links">
          <li>
            <a href="#about" data-num="01" onClick={closeSidebar}>
              about
            </a>
          </li>
          <li>
            <a href="#projects" data-num="02" onClick={closeSidebar}>
              projects
            </a>
          </li>
          <li>
            <a href="#skills" data-num="03" onClick={closeSidebar}>
              skills
            </a>
          </li>
          <li>
            <a href="#contact" data-num="04" onClick={closeSidebar}>
              contact
            </a>
          </li>
        </ul>
        <div className="sidebar-footer">
          <a href="https://github.com/endbel" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/endbel" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </aside>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero-inner">
          <div className="hero-tag">
            <i className="fas fa-terminal"></i> Hola, soy
          </div>
          <h1 className="hero-name">
            Belén <span className="line2">Benítez</span>
          </h1>
          <p className="hero-desc">
            Junior Developer apasionada por crear experiencias web modernas, funcionales y accesibles.
            Especializada en frontend con React, pero también trabajo en backend con Node.js y bases de datos.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              Ver mis proyectos
            </a>
            <a href="#contact" className="btn-outline">
              Contactame
            </a>
          </div>
        </div>
        <div className="glow-blob"></div>
      </section>

      <div className="scroll-hint">
        SCROLL<span></span>
      </div>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="reveal">
        <div>
          <p className="section-label">01 — sobre mí</p>
          <h2 className="section-title">Quien<br />soy.</h2>
          <div className="about-text">
            <p>
              Soy una junior developer de Argentina, actualmente estudiando en la UTN (Universidad Tecnológica Nacional). Me apasiona el desarrollo
              web y estoy en la búsqueda de mis primeras experiencias laborales en el área.
            </p>
            <p>
              Tengo experiencia proyectos en equipo bajo metodología ágil (Scrum), y he trabajo con tecnologías como <strong>React</strong>,{' '}
              <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong> y bases de datos relacionales y no relacionales.
            </p>
            <p>
              Cuando no estoy coding, probablemente estoy viendo series, jugando videojuegos o pasando tiempo con mi gato de 3 patas.
            </p>
          </div>
          <div className="stack-grid">
            <div className="stack-item">
              <a href="#" className="stack-link">
                <div className="stack-icon">
                  <i className="devicon-html5-plain"></i>
                </div>
                <div className="stack-name">HTML</div>
              </a>
            </div>
            <div className="stack-item">
              <a href="#" className="stack-link">
                <div className="stack-icon">
                  <i className="devicon-css3-plain"></i>
                </div>
                <div className="stack-name">CSS</div>
              </a>
            </div>
            <div className="stack-item">
              <a href="#" className="stack-link">
                <div className="stack-icon">
                  <i className="devicon-javascript-plain"></i>
                </div>
                <div className="stack-name">JavaScript</div>
              </a>
            </div>
            <div className="stack-item">
              <a href="#" className="stack-link">
                <div className="stack-icon">
                  <i className="devicon-react-original"></i>
                </div>
                <div className="stack-name">React</div>
              </a>
            </div>
            <div className="stack-item">
              <a href="#" className="stack-link">
                <div className="stack-icon">
                  <i className="devicon-nodejs-plain"></i>
                </div>
                <div className="stack-name">Node.js</div>
              </a>
            </div>
            <div className="stack-item">
              <a href="#" className="stack-link">
                <div className="stack-icon">
                  <i className="devicon-typescript-plain"></i>
                </div>
                <div className="stack-name">TypeScript</div>
              </a>
            </div>
            <div className="stack-item">
              <a href="#" className="stack-link">
                <div className="stack-icon">
                  <i className="devicon-python-plain"></i>
                </div>
                <div className="stack-name">Python</div>
              </a>
            </div>
            <div className="stack-item">
              <a href="#" className="stack-link">
                <div className="stack-icon">
                  <i className="devicon-java-plain"></i>
                </div>
                <div className="stack-name">Java</div>
              </a>
            </div>
            <div className="stack-item">
              <a href="#" className="stack-link">
                <div className="stack-icon">
                  <i className="devicon-mysql-plain"></i>
                </div>
                <div className="stack-name">MySQL</div>
              </a>
            </div>
            <div className="stack-item">
              <a href="#" className="stack-link">
                <div className="stack-icon">
                  <i className="devicon-git-plain"></i>
                </div>
                <div className="stack-name">Git</div>
              </a>
            </div>
            <div className="stack-item">
              <a href="#" className="stack-link">
                <div className="stack-icon">
                  <i className="devicon-docker-plain"></i>
                </div>
                <div className="stack-name">Docker</div>
              </a>
            </div>
            <div className="stack-item">
              <a href="#" className="stack-link">
                <div className="stack-icon">
                  <i className="devicon-npm-original-wordmark"></i>
                </div>
                <div className="stack-name">NPM</div>
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
              <span className="t-title">belén@dev</span>
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
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="projects-header reveal" ref={projectsRef}>
          <div>
            <p className="section-label">02 — proyectos</p>
            <h2 className="section-title">
              Lo que<br />
              he construido.
            </h2>
          </div>
        </div>

        <div className="project-grid reveal">
          <div className="project-card">
            <p className="project-num">// 001</p>
            <h3 className="project-title">App del Clima</h3>
            <p className="project-desc">
              Aplicación web que consulta una API pública para mostrar el clima actual según la ciudad ingresada. Trabajé con fetch, manejo de
              JSON y diseño responsive.
            </p>
            <div className="project-tags">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">API REST</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/endbel/mi-proyecto-clima" target="_blank" rel="noreferrer" className="project-link">
                ⌥ github
              </a>
            </div>
          </div>

          <div className="project-card">
            <p className="project-num">// 002</p>
            <h3 className="project-title">Conversor de Monedas</h3>
            <p className="project-desc">
              Aplicación de consola en Java que convierte entre distintas monedas. Proyecto individual que consolidó el uso de programación
              orientada a objetos, estructuras de control y manejo de entrada/salida.
            </p>
            <div className="project-tags">
              <span className="tag">Java</span>
              <span className="tag">POO</span>
              <span className="tag">CLI</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/endbel/ConversorDeMonedasJava" target="_blank" rel="noreferrer" className="project-link">
                ⌥ github
              </a>
            </div>
          </div>

          <div className="project-card">
            <p className="project-num">// 003</p>
            <h3 className="project-title">Voz Ciudadana</h3>
            <p className="project-desc">
              Plataforma full stack desarrollada en equipo que permite a ciudadanos reportar y visualizar problemas urbanos. Participé en
              frontend y backend con React, TypeScript y Node.js bajo metodología ágil.
            </p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Node.js</span>
              <span className="tag">Vite</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/endbel/vozCiudadana" target="_blank" rel="noreferrer" className="project-link">
                ⌥ github
              </a>
            </div>
          </div>

          <div className="project-card">
            <p className="project-num">// 004</p>
            <h3 className="project-title">ToDos App</h3>
            <p className="project-desc">
              App de gestión de tareas desarrollada en equipo para la UTN. Incluye registro de usuarios, prioridades, categorías, filtros y
              diseño mobile-first. Participé en frontend y backend.
            </p>
            <div className="project-tags">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">JavaScript</span>
              <span className="tag">PHP</span>
              <span className="tag">MySQL</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/DDarioBenitez/ToDos_app" target="_blank" rel="noreferrer" className="project-link">
                ⌥ github
              </a>
            </div>
          </div>

          <div className="project-card">
            <p className="project-num">// 005</p>
            <h3 className="project-title">Demo Clínica</h3>
            <p className="project-desc">
              Sistema de gestión clínica desarrollado en equipo. Incluye autenticación, dashboard, gestión de pacientes y turnos. Participé en
              el frontend y base de datos con Next.js, Prisma y TypeScript.
            </p>
            <div className="project-tags">
              <span className="tag">Next.js</span>
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Tailwind</span>
              <span className="tag">Prisma</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/reedq1/demo-clinica" target="_blank" rel="noreferrer" className="project-link">
                ⌥ github
              </a>
            </div>
          </div>

          <div className="project-card">
            <p className="project-num">// 006</p>
            <h3 className="project-title">CICI App</h3>
            <p className="project-desc">
              Plataforma de gestión para academia de inglés desarrollada en equipo. Administra alumnos, clases y profesores. Participé en
              frontend y backend con contenedorización mediante Docker.
            </p>
            <div className="project-tags">
              <span className="tag">JavaScript</span>
              <span className="tag">HTML/CSS</span>
              <span className="tag">Tailwind</span>
              <span className="tag">Prisma</span>
              <span className="tag">Docker</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/endbel/cici-app" target="_blank" rel="noreferrer" className="project-link">
                ⌥ github
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="reveal" ref={skillsRef}>
          <p className="section-label">03 — habilidades</p>
          <h2 className="section-title">Mi stack.</h2>
        </div>
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
              <span className="skill-bar-name">CSS / TAILWIND</span>
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
          <div className="skill-bar-item">
            <div className="skill-bar-header">
              <span className="skill-bar-name">TYPESCRIPT</span>
              <span className="skill-bar-level">70%</span>
            </div>
            <div className="skill-bar-track">
              <div className="skill-bar-fill" data-width="70"></div>
            </div>
          </div>
          <div className="skill-bar-item">
            <div className="skill-bar-header">
              <span className="skill-bar-name">PYTHON</span>
              <span className="skill-bar-level">65%</span>
            </div>
            <div className="skill-bar-track">
              <div className="skill-bar-fill" data-width="65"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="reveal">
          <p className="section-label">04 — contacto</p>
          <h2 className="contact-big">
            ¿Trabajamos<br />
            <span className="accent">juntos?</span>
          </h2>
          <p className="contact-sub">Abierta a oportunidades, proyectos freelance y colaboraciones.</p>
          <div className="contact-links">
            <a href="mailto:endbel.ar@gmail.com" className="btn-primary">
              Enviar email
            </a>
            <a href="https://linkedin.com/in/belén-benítez" target="_blank" rel="noreferrer" className="btn-outline">
              LinkedIn
            </a>
            <a href="https://github.com/endbel" target="_blank" rel="noreferrer" className="btn-outline">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2024 Belén — <span className="accent">Developer</span>
        </p>
      </footer>
    </>
  );
}

export default App;
