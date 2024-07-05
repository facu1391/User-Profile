import styles from './Header.module.css';

const Header = ({ name, profileImage }) => (
  <header className={styles.header}>
    <img src={profileImage} alt={`${name}'s profile`} className={styles.profileImage} />
    <h1>{name}</h1>
  </header>
);

export default Header;