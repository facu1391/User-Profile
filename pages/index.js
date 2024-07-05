import Header from '../components/Header';
import About from '../components/About';
import Interests from '../components/Interests';
import ContactForm from '../components/ContactForm';
import styles from '../styles/Home.module.css'; 

export default function Home() {
  const user = {
    name: 'Juan Pérez',
    profileImage: '/123.jpg',
    description: 'Soy un desarrollador frontend con experiencia en React y Next.js.',
    interests: ['Programación', 'Música', 'Deportes']
  };

  return (
    <div className={styles.container}>
      <Header name={user.name} profileImage={user.profileImage} />
      <About description={user.description} />
      <Interests interests={user.interests} />
      <ContactForm />
    </div>
  );
}