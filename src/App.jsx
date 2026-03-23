import './App.css'

const coreSkills = [
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
  { name: 'Docker', icon: 'devicon-docker-plain' },
  { name: 'Kubernetes', icon: 'devicon-kubernetes-plain' },
  { name: 'Terraform', icon: 'devicon-terraform-plain' },
  { name: 'Jenkins', icon: 'devicon-jenkins-line' },
  { name: 'GitHub Actions', icon: 'devicon-github-original' },
  { name: 'Prometheus', icon: 'devicon-prometheus-original' },
  { name: 'Grafana', icon: 'devicon-grafana-plain-wordmark' },
  { name: 'Linux', icon: 'devicon-linux-plain' },
  { name: 'Python', icon: 'devicon-python-plain' },
]

const services = [
  'EC2',
  'IAM',
  'S3',
  'SQS',
  'Lambda',
  'RDS',
  'ECS',
  'ECR',
  'SNS',
  'VPC',
  'Elastic Beanstalk',
  'SES',
]

const projects = [
  {
    title: 'Infrastructure Monitoring with Prometheus and Grafana',
    stack: 'Docker, Docker Compose, Prometheus, Grafana, Linux',
    summary:
      'Built a Dockerized monitoring stack with Node Exporter and cAdvisor, then designed custom Grafana dashboards for real-time infrastructure and container visibility.',
  },
  {
    title: 'Website Downtime Monitoring with AWS Lambda',
    stack: 'AWS Lambda, CloudWatch, Python, Serverless',
    summary:
      'Implemented a serverless health-check system using Python-based Lambda functions, CloudWatch scheduling, and alerting for downtime and response failures.',
  },
  {
    title: 'End-to-End CI/CD Multi-Stack Deployment',
    stack: 'AWS, Docker, Kubernetes, Jenkins, GitHub Actions, Prometheus, Grafana',
    summary:
      'Delivered 8+ production deployments for Django, FastAPI, Node.js, PHP, and Laravel apps with automated pipelines, containerization, orchestration, and observability.',
  },
]

function App() {
  return (
    <div className="site-shell">
      <div className="bg-glow bg-glow-one" aria-hidden="true" />
      <div className="bg-glow bg-glow-two" aria-hidden="true" />

      <header className="topbar">
        <p className="brand">Sharath Chandra C</p>
        <nav className="menu" aria-label="Main navigation">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>

      <main>
        <section className="hero panel">
          <p className="eyebrow">AWS Cloud Engineer</p>
          <h1>DevOps and Cloud Engineer focused on reliable AWS delivery.</h1>
          <p className="lead">
            Hands-on experience across AWS infrastructure, CI/CD automation,
            containerized deployments, and production monitoring.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#projects">
              Explore Projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="metrics">
            <article>
              <h3>8+</h3>
              <p>AWS application deployments completed</p>
            </article>
            <article>
              <h3>3</h3>
              <p>Featured projects in this portfolio</p>
            </article>
            <article>
              <h3>2025-Present</h3>
              <p>Professional DevOps and Cloud engineering experience</p>
            </article>
          </div>
        </section>

        <section id="skills" className="panel section-gap">
          <div className="section-head">
            <h2>Core Skills</h2>
            <p>
              Strong delivery across cloud infrastructure, automation pipelines,
              containers, and observability.
            </p>
          </div>

          <div className="skill-grid">
            {coreSkills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <i className={skill.icon} aria-hidden="true" />
                <h3>{skill.name}</h3>
              </article>
            ))}
          </div>

          <div className="cloud-service-wrap">
            <h3>AWS Services</h3>
            <div className="service-chips">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="panel section-gap">
          <div className="section-head">
            <h2>Featured Projects</h2>
            <p>
              Projects focused on CI/CD, monitoring, and production-grade AWS
              deployments.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-stack">{project.stack}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="timeline section-gap">
          <article className="panel timeline-item">
            <p className="eyebrow">Experience</p>
            <h2>DevOps and Cloud Engineer</h2>
            <p className="muted">Sep 2025 - Present | Salem, Tamil Nadu</p>
            <ul>
              <li>
                Delivered 8+ AWS-based deployments with CI/CD workflows to
                reduce manual effort and improve release reliability.
              </li>
              <li>
                Managed infrastructure components across EC2, S3, IAM, VPC,
                and security groups for secure application hosting.
              </li>
              <li>
                Designed and maintained CI/CD pipelines with Jenkins and
                GitHub Actions for automated build, test, and deployments.
              </li>
              <li>
                Built Dockerized deployments and supported Kubernetes
                environments with observability using Prometheus and Grafana.
              </li>
            </ul>
          </article>
        </section>

        <section id="contact" className="panel section-gap contact-card">
          <div className="section-head">
            <h2>Contact</h2>
            <p>Open to Cloud and DevOps engineering roles and collaborations.</p>
          </div>
          <div className="contact-grid">
            <a href="mailto:sharathraghav2003@gmail.com">sharathraghav2003@gmail.com</a>
            <a
              href="https://github.com/Sharath1863"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Sharath1863
            </a>
            <a
              href="https://www.linkedin.com/in/sharathchandra-"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/sharathchandra-
            </a>
            <a href="tel:+919345331879">+91 9345331879</a>
            <p>Salem, Tamil Nadu, India</p>
            <p>LeetCode: sharath_chandra_20</p>
          </div>
        </section>

        <section id="resume" className="panel resume-card section-gap">
          <h2>Resume</h2>
          <p>
            Resume is available for recruiters and hiring teams. You can
            request the latest PDF directly by email or connect on LinkedIn.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="mailto:sharathraghav2003@gmail.com">
              Request Resume
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/Sharath1863"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Sharath Chandra C</footer>
    </div>
  )
}

export default App