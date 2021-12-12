import styles from '../css/home.module.css';

function Home() {
  const clock = new Date();
  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.property}>
        <span>{`${clock.getFullYear()}년 ${
          clock.getMonth() + 1
        }월 ${clock.getDate()}일`}</span>
        <span
          className={styles.time}
        >{`${clock.getHours()} : ${clock.getMinutes()}`}</span>
        <span className={styles.weather}>Weather</span>
      </div>
    </div>
  );
}

export default Home;
