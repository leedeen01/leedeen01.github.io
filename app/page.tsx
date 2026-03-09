export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section id="home">
        <p className="hero-eyebrow">CS @ NUS · Singapore</p>
        <h1 className="hero-name">
          Lee
          <br />
          <span>De En.</span>
        </h1>
        <p className="hero-tagline">
          Penultimate CS student building things at the intersection of web, ML,
          and cloud.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects →
          </a>
          <a
            href="/assets/03-2026_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-7h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h3v1.5H8V10z" />
            </svg>
            Resume
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="hero-socials">
          {/* GitHub */}
          <a
            href="https://github.com/leedeen01"
            target="_blank"
            className="social-icon-link"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/leedeen/"
            target="_blank"
            className="social-icon-link"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/leedeen_/"
            target="_blank"
            className="social-icon-link"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="section-header reveal">
          <span className="section-num">01.</span>
          <h2 className="section-title">About</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I&apos;m a{" "}
              <strong>penultimate Computer Science student at NUS</strong>, with
              a strong foundation in algorithms, data structures, and software
              development.
            </p>
            <p>
              Through hands-on projects I&apos;ve worked across
              <em> web development</em>, <em> machine learning</em>, and
              <em> cloud solutions</em> — turning complex challenges into clean,
              functional software.
            </p>
            <p>
              Always curious and committed to
              <strong> continuous learning</strong>. I look forward to
              connecting with like-minded engineers and exploring what&apos;s
              next in tech.
            </p>
          </div>
          <div className="reveal">
            <p className="stack-title">{"//"} Frontend &amp; Frameworks</p>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-dot"></span>Next.js
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>React
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>TypeScript
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>Tailwind CSS
              </div>
            </div>
            <p className="stack-title" style={{ marginTop: "24px" }}>
              {"//"} Backend &amp; Databases
            </p>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-dot"></span>Spring Boot
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>NodeJS + Express
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>PostgreSQL + PrismaORM
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>Supabase / Firebase
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>WebSockets
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>Git
              </div>
            </div>
            <p className="stack-title" style={{ marginTop: "24px" }}>
              {"//"} AI &amp; Systems Engineering
            </p>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-dot"></span>Python (Playwright/Scraping)
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>PyTorch (RNNs/GANs)
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>Network Admin
                (PiHole/Tailscale)
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>Automated Testing (Cucumber)
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint reveal">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* TIMELINE */}
      <section id="timeline">
        <div className="section-header reveal">
          <span className="section-num">02.</span>
          <h2 className="section-title">Journey</h2>
        </div>

        <div className="timeline-wrap">
          {/* Singapore Polytechnic */}
          <div className="tl-item reveal">
            <div className="tl-header">
              <div className="tl-meta">
                <div className="tl-title">Singapore Polytechnic</div>
                <div className="tl-subtitle">
                  Diploma in Aerospace Engineering, School of EEE
                </div>
                <span className="tl-date">Apr 2018 – Apr 2021</span>
                <div className="tl-sub">
                  <span className="tl-badge edu">Education</span>
                </div>
              </div>
              <div className="tl-toggle">
                <svg viewBox="0 0 24 24">
                  <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                </svg>
              </div>
            </div>
            <div className="tl-body">
              <div className="tl-body-inner">
                <div className="tl-content">
                  Completed my Diploma at the **School of Electrical and
                  Electronic Engineering (EEE)**, bridging the gap between
                  hardware systems and software logic.
                  <ul>
                    <li>
                      <strong>
                        Diploma in Aerospace Electronics (Graduated with Merit)
                      </strong>
                    </li>
                    <li>
                      <strong>Academic Excellence:</strong> Achieved a
                      Cumulative <strong>GPA of 3.885 / 4.0</strong>, earning
                      Distinctions in core modules like{" "}
                      <em>Structured Programming</em> and{" "}
                      <em>Microcontroller Applications</em>.
                    </li>
                    <li>
                      <strong>Engineering Foundation:</strong> Specialized in
                      avionics systems, digital electronics, and complex
                      hardware-software integration.
                    </li>
                  </ul>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginTop: "1.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href="/assets/SP/Diploma_Certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: "0.65rem", padding: "0.5rem 1rem" }}
                    >
                      <span>📄 View Diploma Cert</span>
                    </a>
                    <a
                      href="/assets/SP/SP_Exam_Result.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: "0.65rem", padding: "0.5rem 1rem" }}
                    >
                      <span>📊 View Full Transcript</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* National Service */}
          <div className="tl-item reveal">
            <div className="tl-header">
              <div className="tl-meta">
                <div className="tl-title">
                  National Service, Combat Engineer
                </div>
                <div className="tl-subtitle">
                  3rd Sergeant & Section Commander, 30th Battalion Singapore
                  Combat
                </div>
                <span className="tl-date">Jun 2021 – Apr 2023</span>
                <div className="tl-sub">
                  <span className="tl-badge service">
                    Military / Singapore Armed Force
                  </span>
                </div>
              </div>
              <div className="tl-toggle">
                <svg viewBox="0 0 24 24">
                  <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                </svg>
              </div>
            </div>
            <div className="tl-body">
              <div className="tl-body-inner">
                <div className="tl-content">
                  Served as a <strong>3rd Sergeant & Section Commander</strong>{" "}
                  (Field Engineer Specialist) in the{" "}
                  <strong>
                    30th Battalion, Singapore Combat Engineers (30SCE)
                  </strong>
                  .
                  <ul>
                    <li>
                      <strong>Operational Excellence:</strong> Led a Field
                      Engineer Section to achieve <strong>REDCON 1</strong> (the
                      highest attainable proficiency rating) during major
                      evaluation exercises.
                    </li>
                    <li>
                      <strong>Leadership & Personnel Management:</strong>{" "}
                      Accountable for the training and operational readiness of
                      a specialist section, earning a{" "}
                      <strong>&quot;Very Good&quot;</strong> performance and
                      conduct appraisal.
                    </li>
                    <li>
                      <strong>Professional Certification:</strong> Attained the{" "}
                      <strong>
                        WSQ Advanced Certificate in Leadership and People
                        Management
                      </strong>{" "}
                      through the Specialist Cadet Course.
                    </li>
                    <li>
                      <strong>Proven Discipline:</strong> Recognized with the{" "}
                      <strong>IPPT Gold Award</strong> and{" "}
                      <strong>Marksmanship Award</strong> for consistent
                      excellence in physical and operational standards.
                    </li>
                    <li>
                      <strong>National Contribution:</strong> Supported
                      logistics and preparation for the{" "}
                      <strong>National Day Parade (NDP) 2022</strong>.
                    </li>
                  </ul>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginTop: "1.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href="/assets/NS/NS_Testimonial.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: "0.65rem", padding: "0.5rem 1rem" }}
                    >
                      <span>🎖️ View Testimonial</span>
                    </a>
                    <a
                      href="/assets/NS/NS_Transcript.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: "0.65rem", padding: "0.5rem 1rem" }}
                    >
                      <span>📊 Service Transcript</span>
                    </a>
                    <a
                      href="/assets/NS/NS_Certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: "0.65rem", padding: "0.5rem 1rem" }}
                    >
                      <span>📄 NDP Certificate</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NUS */}
          <div className="tl-item reveal">
            <div className="tl-header">
              <div className="tl-meta">
                <div className="tl-title">National University of Singapore</div>
                <div className="tl-subtitle">
                  Bachelor of Computing (Honours) in Computer Science
                </div>
                <span className="tl-date">Aug 2023 – Jun 2026</span>
                <div className="tl-sub">
                  <span className="tl-badge edu">Education</span>
                  <span className="tl-badge intern" style={{ marginLeft: 0 }}>
                    2× Internships
                  </span>
                  <span className="tl-badge exchange" style={{ marginLeft: 0 }}>
                    2× Exchanges
                  </span>
                </div>
              </div>
              <div className="tl-toggle">
                <svg viewBox="0 0 24 24">
                  <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                </svg>
              </div>
            </div>
            <div className="tl-body">
              <div className="tl-body-inner">
                <div className="tl-content">
                  Pursuing a Bachelor of Computing (Computer Science) at NUS,
                  one of Asia&apos;s top-ranked universities.
                  <ul>
                    <li>
                      Specialising in algorithms, software engineering, and
                      machine learning
                    </li>
                    <li>
                      Built full-stack projects spanning web, ML, and cloud
                      infrastructure
                    </li>
                  </ul>
                </div>

                <div className="sub-tl">
                  <div className="sub-tl-label">{"//"} During NUS</div>

                  {/* KU */}
                  <div className="sub-tl-item">
                    <div className="sub-tl-dot"></div>
                    <div className="sub-tl-main">
                      <div className="sub-tl-header">
                        <div className="sub-tl-info">
                          <span className="sub-tl-title">
                            Korea University, Exchange
                          </span>
                          <div className="sub-tl-sub">
                            <span className="tl-badge exchange">Exchange</span>
                            <span className="tl-date">Dec 2024 – Jan 2025</span>
                          </div>
                        </div>
                        <div className="sub-tl-toggle">
                          <svg viewBox="0 0 24 24">
                            <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                          </svg>
                        </div>
                      </div>
                      <div className="sub-tl-body">
                        <div className="sub-tl-body-inner">
                          <div className="sub-tl-content">
                            Short-term winter exchange at Korea University,
                            Seoul: broadening academic and cultural horizons.
                            <ul>
                              <li>
                                Attended intensive CS and technology courses
                              </li>
                              <li>
                                Engaged with a diverse international student
                                community
                              </li>
                              <li>
                                Explored Seoul&apos;s thriving tech ecosystem
                                and startup culture
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phillip Capital */}
                  <div className="sub-tl-item">
                    <div className="sub-tl-dot"></div>
                    <div className="sub-tl-main">
                      <div className="sub-tl-header">
                        <div className="sub-tl-info">
                          <span className="sub-tl-title">
                            Phillip Capital, SWE Intern
                          </span>
                          <div className="sub-tl-sub">
                            <span className="tl-badge intern">Internship</span>
                            <span className="tl-date">May 2025 – Aug 2025</span>
                          </div>
                        </div>
                        <div className="sub-tl-toggle">
                          <svg viewBox="0 0 24 24">
                            <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                          </svg>
                        </div>
                      </div>
                      <div className="sub-tl-body">
                        <div className="sub-tl-body-inner">
                          <div className="sub-tl-content">
                            Interned at <strong>PhillipCapital</strong>, a
                            global financial services group, contributing to a
                            high-stakes blockchain-based remittance platform.
                            <ul>
                              <li>
                                <strong>Distributed Architecture:</strong>{" "}
                                Developed modular microservices using{" "}
                                <strong>NestJS</strong>, implementing Clean
                                Architecture and Dependency Injection.
                              </li>
                              <li>
                                <strong>Event-Driven Systems:</strong>{" "}
                                Integrated <strong>RabbitMQ</strong> for
                                asynchronous messaging and{" "}
                                <strong>Redis</strong> for distributed caching.
                              </li>
                              <li>
                                <strong>Data Integrity:</strong> Designed robust{" "}
                                <strong>PostgreSQL</strong> schemas via ORM,
                                prioritizing transactional integrity.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* UT Austin */}
                  <div className="sub-tl-item">
                    <div className="sub-tl-dot"></div>
                    <div className="sub-tl-main">
                      <div className="sub-tl-header">
                        <div className="sub-tl-info">
                          <span className="sub-tl-title">
                            The University of Texas At Austin, Exchange
                          </span>
                          <div className="sub-tl-sub">
                            <span className="tl-badge exchange">Exchange</span>
                            <span className="tl-date">Aug 2025 – Dec 2025</span>
                          </div>
                        </div>
                        <div className="sub-tl-toggle">
                          <svg viewBox="0 0 24 24">
                            <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                          </svg>
                        </div>
                      </div>
                      <div className="sub-tl-body">
                        <div className="sub-tl-body-inner">
                          <div className="sub-tl-content">
                            <p>
                              Selected for a Semester Exchange at the{" "}
                              <strong>University of Texas at Austin</strong>,
                              ranked among the top 10 Computer Science programs
                              in the U.S.
                            </p>
                            <ul>
                              <li>
                                <strong>Advanced Coursework:</strong> Focused on
                                the intersection of Systems and AI, achieving
                                deep technical competency in:
                                <ul className="nested-list">
                                  <li>
                                    <em>AI &amp; Vision:</em> Natural Language
                                    Processing (CS 371N), Generative Visual
                                    Computing (CS 378)
                                  </li>
                                  <li>
                                    <em>Systems &amp; Data:</em> Algorithms (ECE
                                    360C), Web App Development (MIS 333K), Intro
                                    to Data Science (STA 301)
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <strong>Technical Immersion:</strong> Engaged
                                with Austin&apos;s &quot;Silicon Hills&quot;
                                ecosystem, exploring emerging trends in the
                                startup and venture capital landscape.
                              </li>
                              <li>
                                <strong>Global Networking:</strong> Collaborated
                                on high-intensity projects with diverse
                                engineering teams, fostering a global
                                perspective on software architecture.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Toppan Ecquaria */}
                  <div className="sub-tl-item">
                    <div className="sub-tl-dot"></div>
                    <div className="sub-tl-main">
                      <div className="sub-tl-header">
                        <div className="sub-tl-info">
                          <span className="sub-tl-title">
                            Toppan Ecquaria, SWE Intern
                          </span>
                          <div className="sub-tl-sub">
                            <span className="tl-badge intern">Internship</span>
                            <span className="tl-date">Dec 2025 – Jan 2026</span>
                          </div>
                        </div>
                        <div className="sub-tl-toggle">
                          <svg viewBox="0 0 24 24">
                            <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                          </svg>
                        </div>
                      </div>
                      <div className="sub-tl-body">
                        <div className="sub-tl-body-inner">
                          <div className="sub-tl-content">
                            Interned at Toppan Ecquaria, a digital government
                            solutions company based in Singapore.
                            <ul>
                              <li>
                                Worked on large-scale ICA identity collection
                                project
                              </li>
                              <li>
                                Optimized backend systems using synchronization
                                locks
                              </li>
                              <li>
                                Contributed to automated testing pipelines using
                                Gherkins/Cucumber
                              </li>
                              <li>
                                Gained exposure to large-scale enterprise
                                software delivery processes
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint reveal">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-header reveal">
          <span className="section-num">03.</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-list">
          <a
            href="https://leedeen01.github.io/tic-tac-toe/"
            target="_blank"
            className="project-row reveal"
          >
            <span className="project-index">001</span>
            <div className="project-info">
              <div className="project-name">Tic Tac Toe</div>
              <p className="project-desc-short">
                Classic game with a twist — challenge a friend or face an AI
                powered by the minimax algorithm.
              </p>
              <div className="project-tags">
                <span className="tag">JavaScript</span>
                <span className="tag">Minimax AI</span>
              </div>
            </div>
            <span className="project-arrow">↗</span>
          </a>
          <a
            href="https://main--trackspence.netlify.app/"
            target="_blank"
            className="project-row reveal"
          >
            <span className="project-index">002</span>
            <div className="project-info">
              <div className="project-name">Finance Tracker</div>
              <p className="project-desc-short">
                Full-featured expense tracker that auto-recalculates totals on
                every add, edit, or delete.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
              </div>
            </div>
            <span className="project-arrow">↗</span>
          </a>
        </div>
        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-header reveal">
          <span className="section-num">04.</span>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-grid">
          <div className="reveal">
            <p className="contact-cta-text">
              Let&apos;s build
              <br />
              something <span>great.</span>
            </p>
            <p className="contact-sub">
              Open to internships, collaborations, and interesting
              conversations.
            </p>
            <div className="contact-links">
              {/* GitHub */}
              <a
                href="https://github.com/leedeen01"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-row"
              >
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </span>
                <span className="contact-link-text">
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-value">
                    github.com/leedeen01
                  </span>
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/leedeen/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-row"
              >
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <span className="contact-link-text">
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">
                    linkedin.com/in/leedeen
                  </span>
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/leedeen_/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-row"
              >
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </span>
                <span className="contact-link-text">
                  <span className="contact-link-label">Instagram</span>
                  <span className="contact-link-value">
                    instagram.com/leedeen
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="reveal">
            <form action="https://formspree.io/f/xvgerrwg" method="POST">
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-input"
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>
              <button type="submit" className="btn-send">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
