import styles from './About.module.css';

const About = ({ description }) => (
  <section className={styles.about}>
    <h2>Sobre mí</h2>
    <p>{description}</p>
  </section>
);

export default About;