import Head from "next/head";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew Wong | AWS Developer</title>
        <meta
          name="description"
          content="Portfolio of Andrew Wong - Cloud Developer, Full Stack Engineer, and AWS Specialist"
        />
      </Head>
      <main className={styles.container}>
        <div className={styles.card}>
          <header className={styles.header}>
            <h1 className={styles.name}>Andrew Wong</h1>
            <p className={styles.tagline}>
              AWS Developer · Full-Stack Engineer · Cloud Enthusiast
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:andrewshout@gmail.com">Email</a>
              <a href="https://github.com/andrewroar" target="_blank">
                GitHub
              </a>
              <span>Manchester, UK</span>
            </div>
          </header>

          <section className={styles.section}>
            <h2>About</h2>
            <p>
              I'm an AWS-certified developer with a strong background in
              cloud-native solutions, full-stack JavaScript, and infrastructure
              automation. I enjoy building scalable systems, mentoring
              developers, and optimising for performance and cost.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Experience</h2>
            <div className={styles.job}>
              <div className={styles.jobTitle}>
                <strong>AWS Developer</strong> · Centrica{" "}
                <span>Dec 2024 – Jul 2025</span>
              </div>
              <ul>
                <li>Integrated Salesforce lead updates via webhook APIs</li>
                <li>Tech: Node.js, TypeScript, Lambda, DynamoDB, Terraform</li>
                <li>Reduced lead processing time by 10 minutes</li>
              </ul>
            </div>

            <div className={styles.job}>
              <div className={styles.jobTitle}>
                <strong>Full Stack Developer</strong> · AVEVA{" "}
                <span>Feb 2022 – Dec 2024</span>
              </div>
              <ul>
                <li>Modernized AWS infrastructure (cut S3 costs by 40%)</li>
                <li>Led backend dev and CI/CD pipelines, updated C++ Docker</li>
              </ul>
            </div>

            <div className={styles.job}>
              <div className={styles.jobTitle}>
                <strong>Web Developer</strong> · Ergo Creative{" "}
                <span>Jul 2021 – Feb 2022</span>
              </div>
              <ul>
                <li>Developed and maintained bespoke marketing websites</li>
                <li>Integrated OAuth logins (Google, Facebook, Microsoft)</li>
                <li>
                  Implemented Stripe payments and managed full-stack updates
                  using React, Vue, Laravel, and MySQL
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Projects</h2>
            <p>
              <strong>BuzzNet</strong> – A React Native app for casual business
              networking.
            </p>
            <ul>
              <li>
                <a href="https://play.google.com/apps/testing/com.andrewroar.BeeNet">
                  Android Beta
                </a>
              </li>
              <li>
                <a href="https://testflight.apple.com/join/VjZGZZnS">
                  iOS TestFlight
                </a>
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Skills</h2>
            <p>
              <strong>Languages:</strong> JavaScript, TypeScript, Python, C++
            </p>
            <p>
              <strong>Cloud:</strong> AWS, Serverless, Terraform, CI/CD, DevOps
            </p>
            <p>
              <strong>Frontend:</strong> React, React Native, Vue.js
            </p>
            <p>
              <strong>Backend:</strong> Node.js, Express, Laravel
            </p>
            <p>
              <strong>Databases:</strong> MySQL, DynamoDB, MongoDB
            </p>
          </section>

          <section className={styles.section}>
            <h2>Education</h2>
            <div className={styles.educationItem}>
              <strong>University of York</strong>
              <ul>
                <li>Master of International Political Economy (2017–2019)</li>
                <li>
                  Master of Politics, Economics and Philosophy (2016–2017)
                </li>
                <li>
                  Bachelor of Politics, Economics and Philosophy (2013–2016)
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Certifications</h2>
            <ul>
              <li>AWS Certified Solutions Architect – Associate (2024)</li>
              <li>AWS Certified Cloud Practitioner (2023)</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
