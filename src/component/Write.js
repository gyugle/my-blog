function Write() {
  return (
    <div>
      <h2>Board</h2>
      <input className={styles.title} placeholder="Title..." />
      <div>
        <input className={styles.writer} placeholder="Name" />
        <input className={styles.date} type="date" />
      </div>
      <input
        className={styles.text}
        type="text"
        placeholder="Type your content."
      />
      <button onClick={console.log('click')}>Post</button>
      <button>Cancel</button>
    </div>
  );
}
export default Write;
