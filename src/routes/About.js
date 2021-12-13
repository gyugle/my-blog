import styles from '../css/about.module.css';
function AboutMe() {
  return (
    <div className={styles.about}>
      <img
        src={require('../img/cat.jpg').default}
        alt="profile"
        className={styles.profile}
      ></img>
      <div className={styles.info}>
        <h2>ABOUT</h2>
        <ul className={styles.list}>
          <li>NAME : Conner</li>
          <li>EMAIL : anonymous@mail.com</li>
          <li>CONTACT : +82-10-5555-5555</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
